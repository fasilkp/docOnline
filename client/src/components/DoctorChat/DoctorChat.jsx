import React, { useEffect, useState } from 'react'
import '../Chat/chat.css'
import './mdb.min.css'
import {  useSearchParams } from 'react-router-dom'
import { findChat, getDoctorChats } from '../../api/chatRequests'
import { useSelector } from 'react-redux'
import DoctorMessageList from '../DoctorMesasgeList/DoctorMessageList'
import DoctorChatList from '../DoctorChatList/DoctorChatList'
import DoctorHeader from '../DoctorHeader/DoctorHeader'

export default function DoctorChat({ }) {
  const [currentChat, setCurrentChat] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams()
  const [usersList, setUsersList] = useState([])
  const [lastMessage, setLastMessage]= useState({})
  const [chatClicked, setChatClicked]= useState(false)
  const id = searchParams.get('id')
  console.log(chatClicked)
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
  console.log(usersList)

  return (
    <div className='container'>
      <DoctorHeader fullWidth></DoctorHeader>
      <section className="chat-main containers">
        <div className>
          <div className="col-md-12" style={{ boxShadow: "none" }}>
            <div className="card" id="chat3">
              <div className="card-body">
                <div className="row">
                  
                  <DoctorChatList users={usersList} chatClicked={chatClicked} lastMessage={lastMessage} setChatClicked={setChatClicked}></DoctorChatList>
                  {
                    currentChat ?
                      <DoctorMessageList currentChat={currentChat} chatClicked={chatClicked} setChatClicked={setChatClicked} ></DoctorMessageList>
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
