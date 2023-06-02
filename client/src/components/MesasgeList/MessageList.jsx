import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react';

export default function MessageList({ currentChat }) {
  const [showEmoji, setShowEmoji] = useState(false)

  return (
    <div className="col-md-6 col-lg-7 col-xl-8">
      {
        currentChat ?

          <>
            <div className="row ps-2 d-flex align-items-center message-head" style={{ height: 50 }}>
              <div>
                <i className="fa-sharp fa-solid fa-arrow-left-long" />
                <b className="ps-1">Ben Smith</b>
              </div>
            </div>
            <div className="pt-3 pe-3 message-box" data-mdb-perfect-scrollbar="true" style={{ position: 'relative' }}>
              <div className="d-flex flex-row single-chat-container">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp" alt="avatar 1" style={{ width: 45, height: '100%' }} />
                <div>
                  <p className="small p-2 ms-3 mb-1 rounded-3 single-chat">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </p>
                  <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                    12:00 PM | Aug 13
                  </p>
                </div>
              </div>
              <div className="d-flex flex-row single-chat-container me">
                <div>
                  <p className="small p-2 me-3 mb-1 text-white rounded-3 single-chat me">
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                  </p>
                  <p className="small me-3 mb-3 rounded-3 text-muted">
                    12:00 PM | Aug 13
                  </p>
                </div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="avatar 1" style={{ width: 45, height: '100%' }} />
              </div>
            </div>
            <div className="text-muted chat-input-box d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp" alt="avatar 3" style={{ width: 40, height: '100%' }} />
              <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2" placeholder="Type message" />
              <span className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip" /></span>
              <a className="ms-3 text-muted" onClick={() => setShowEmoji(true)}>
                <i className="fas fa-smile" />
              </a>
              <a className="ms-3" href="#!"><i className="fas fa-paper-plane" /></a>
            </div>
            {showEmoji &&
              <div className="emoji-container" onClick={(e) => { e.stopPropagation(); setShowEmoji(false) }}>
                <EmojiPicker />
              </div>
            }
          </>
          :
          <div className="tap-on-chat-main">
            <div className="tap-container">
              <h4>
                Tap on a chat to start conversation
              </h4>
            </div>
          </div>
      }
    </div>
  )
}
