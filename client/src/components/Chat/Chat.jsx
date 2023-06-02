import React, { useEffect, useState } from 'react'
import './chat.css'
import './mdb.min.css'
import UserHeader from '../UserHeader/UserHeader'
import ChatList from '../ChatList/ChatList'
import MessageList from '../MesasgeList/MessageList'
import { useParams, useSearchParams } from 'react-router-dom'
import { createChat, findChat, getUserChats } from '../../api/chatRequests'
import { useSelector } from 'react-redux'

export default function Chat({ }) {
  const [currentChat, setCurrentChat] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams()
  const [usersList, setUsersList]=useState([])
  const id = searchParams.get('id')
  const user = useSelector((state) => state.user.details)
  useEffect(() => {
    (async function () {
      try {
        if (id && user) {
          let {data:users}= await getUserChats(user._id)
          if(!users.err){
            setUsersList(users.chat)
          }
          
          let { data } = await findChat(user._id, id)
          if (!data.err) {
            setCurrentChat(data.chat)
          }
        }
      } catch (err) {
        console.log(err)
      }
    })()
  }, [user])
  console.log(currentChat, usersList)

  return (
    <div>
      <UserHeader></UserHeader>
      <section className="chat-main container">
        <div className>
          <div className="col-md-12" style={{ boxShadow: "none" }}>
            <div className="card" id="chat3">
              <div className="card-body">
                <div className="row">
                  <ChatList users={usersList}></ChatList>
                  <MessageList currentChat={currentChat}></MessageList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
