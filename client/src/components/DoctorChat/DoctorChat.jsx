import React, { useEffect, useState } from 'react'
import './chat.css'
import './mdb.min.css'
import UserHeader from '../UserHeader/UserHeader'
import { useParams, useSearchParams } from 'react-router-dom'
import { createChat, findChat, getUserChats } from '../../api/chatRequests'
import { useSelector } from 'react-redux'
import DoctorChatList from '../DoctorChatList/DoctorChatList'
import DoctorMessageList from '../DoctorMesasgeList/DoctorMessageList'

export default function DoctorChat({ }) {
  const [currentChat, setCurrentChat] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams()
  const [usersList, setUsersList] = useState([])
  const [lastMessage, setLastMessage]= useState({})
  const id = searchParams.get('id')
  const user = useSelector((state) => state.user.details)
  useEffect(() => {
    (async function () {
      try {
        if (id && user) {
          let { data } = await findChat(user._id, id)
          if (!data.err) {
            setCurrentChat(data.chat)
          }
        }
        if (user) {
          let { data: users } = await getUserChats(user._id)
          if (!users.err) {
            setUsersList(users.chat)
            setLastMessage(users.lastMessage)
          }
        }
      } catch (err) {
        console.log(err)
      }
    })()
  }, [user, id])

  return (
    <div>
      <UserHeader></UserHeader>
      <section className="chat-main container">
        <div className>
          <div className="col-md-12" style={{ boxShadow: "none" }}>
            <div className="card" id="chat3">
              <div className="card-body">
                <div className="row">
                  <DoctorChatList users={usersList} lastMessage={lastMessage}></DoctorChatList>
                  {
                    currentChat ?
                      <DoctorMessageList currentChat={currentChat}></DoctorMessageList>
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
