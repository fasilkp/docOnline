import React from 'react'
import './chat.css'
import './mdb.min.css'
import UserHeader from '../UserHeader/UserHeader'
import ChatList from '../ChatList/ChatList'
import MessageList from '../MesasgeList/MessageList'

export default function Chat() {
  return (
    <div>
      <UserHeader></UserHeader>
      <section className="chat-main container">
        <div className>
          <div className="col-md-12" style={{boxShadow:"none"}}>
            <div className="card" id="chat3">
              <div className="card-body">
                <div className="row">
                  <ChatList></ChatList>
                  <MessageList></MessageList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
