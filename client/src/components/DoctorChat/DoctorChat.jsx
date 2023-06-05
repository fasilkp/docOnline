import React, { useEffect, useRef, useState } from 'react'
import '../Chat/chat.css'
import './mdb.min.css'
import {  useSearchParams } from 'react-router-dom'
import { findChat, getDoctorChats } from '../../api/chatRequests'
import { useSelector } from 'react-redux'
import DoctorMessageList from '../DoctorMesasgeList/DoctorMessageList'
import DoctorChatList from '../DoctorChatList/DoctorChatList'
import DoctorHeader from '../DoctorHeader/DoctorHeader'
import { io } from "socket.io-client";
import DoctorSidebar from '../DoctorSidebar/DoctorSidebar'


export default function DoctorChat({ }) {
  const [currentChat, setCurrentChat] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams()
  const [usersList, setUsersList] = useState([])
  const [lastMessage, setLastMessage]= useState({})
  const [chatClicked, setChatClicked]= useState(false)
  const [sendMessage, setSendMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState({});
  const [receivedMessage, setReceivedMessage] = useState({});
  const id = searchParams.get('id')
  const socket = useRef();

  const doctor = useSelector((state) => state.doctor.details)
  useEffect(() => {
    (async function () {
      try {
        if(id){
          setChatClicked(true)
        }else{
          setChatClicked(false)
        }
        if (id && doctor) {
          let { data } = await findChat(id, doctor._id)
          if (!data.err) {
            setCurrentChat(data.chat)
          }
        }
        if (doctor) {
          let { data: users } = await getDoctorChats(doctor._id)
          if (!users.err) {
            setUsersList(users.chat)
            setLastMessage(users.lastMessage)
          }
        }
      } catch (err) {
        console.log(err)
      }
    })()
  }, [doctor, id])
  useEffect(() => {
    socket.current = io("ws://localhost:5500");
    if(doctor){
      socket.current.emit("new-user-add", doctor._id);
      socket.current.on("get-users", (users) => {
        setOnlineUsers(users);
      });
    }
  }, [doctor]);
  useEffect(() => {
    if (sendMessage!==null) {
      socket.current.emit("send-message", sendMessage);}
  }, [sendMessage]);



  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log("doctor received message : ",data)
      setReceivedMessage(data);
    }
    );
  }, [socket]);

  return (
    <div className=''>
      <DoctorHeader fullWidth></DoctorHeader>
      <section className="chat-main">
        <div className="d-flex">
        <DoctorSidebar page={"chat"} ></DoctorSidebar>
          <div className="w-100" style={{ boxShadow: "none" }}>
            <div className="card" id="chat3">
              <div className="card-body">
                <div className="row">
                  
                  <DoctorChatList usersList={usersList} chatClicked={chatClicked} lastMessage={lastMessage} setChatClicked={setChatClicked}></DoctorChatList>
                  {
                    currentChat ?
                      <DoctorMessageList  setSendMessage={setSendMessage} receivedMessage={receivedMessage}  currentChat={currentChat} chatClicked={chatClicked} setChatClicked={setChatClicked} ></DoctorMessageList>
                      :
                      <div className="col-md-6 col-lg-7 col-xl-8">
                      <div className="tap-on-chat-main">
                        <div className="tap-container">
                          <h4>
                            Tap on a chat to start conversation...
                          </h4>
                        </div>
                      </div>
                      </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
