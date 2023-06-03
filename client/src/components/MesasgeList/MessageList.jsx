import React, { useEffect, useRef, useState } from 'react'
import EmojiPicker from 'emoji-picker-react';
import { AiFillCloseCircle } from 'react-icons/ai'
import { addMessage, getMessages } from '../../api/messageRequests';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import { format } from 'timeago.js';
import { BounceLoader, PuffLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

export default function MessageList({ currentChat, chatClicked }) {
  const [showEmoji, setShowEmoji] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [sendLoading, setSendLoading] = useState(false)
  const navigate= useNavigate()
  const user = useSelector((state) => state.user.details)
  const scrollRef = useRef()

  const sentMessage = async (e) => {
    e.preventDefault()
    
    if(message.trim()===""){
      return;
    }
    setSendLoading(true)
    try {
      const { data } = await addMessage({
        chatId: currentChat._id,
        senderId: user._id,
        text: message
      })
      const tempMessage={
        text:message,
        createdAt:new Date(),
        senderId:user._id,
      }
      setMessages([...messages, tempMessage])
      setMessage("")

    } catch (err) {
      console.log(err)
    }
    setSendLoading(false)
  }

  useEffect(() => {
    try {
      (async function () {
        console.log(currentChat._id)
        const { data } = await getMessages(currentChat._id)
        if (!data.err)
          setMessages(data.result)
      })()

    } catch (err) {
      console.log(err)
    }
  }, [currentChat])

  useEffect(()=>{
    if(scrollRef.current){
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  },[messages])

  console.log(messages, currentChat)

  return (
    <div className={`col-md-6 col-lg-7 col-xl-8 ${!chatClicked} && 'hide-sec'`}>
      {
        currentChat ?

          <>
            <div className="row ps-2 d-flex align-items-center message-head" style={{ height: "45px" }}>
              <div className='d-flex align-items-center' style={{ gap: "10px" }} >
                <i className="fa-sharp fa-solid fa-arrow-left-long" onClick={()=>navigate("/chat")}  />
                <Avatar alt="Remy Sharp" sx={{ width: 32, height: 32 }} src={currentChat.doctorId.image && currentChat.doctorId.image.url} />
                <b className="ps-1">{currentChat.doctorId.name}</b>
              </div>
            </div>
            <div className="pt-3 pe-3 message-box" data-mdb-perfect-scrollbar="true" style={{ position: 'relative'}}>
              <div className="d-flex flex-row single-chat-container">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp" alt="avatar 1" style={{ width: 45, height: '100%' }} />
                <div className='sg-chat'>
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
              {
                messages[0] &&
                messages.map((item, index) => {
                  return (
                    <div className="d-flex flex-row single-chat-container me" ref={scrollRef}>
                      <div className='sg-chat'>
                        <p className={`small p-2 me-3 mb-1 text-white rounded-3 single-chat ${user._id === item.senderId ? 'me' : ''}`}>
                          {item.text}
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">
                          {format(item.createdAt)} | {new Date(item.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="avatar 1" style={{ width: 45, height: '100%' }} />
                    </div>
                  )
                })
              }
            </div>
            <form onSubmit={sentMessage} className={`text-muted chat-input-box d-flex justify-content-start align-items-center pe-3 pt-3 mt-2  ${!chatClicked && 'hide-sec'} `}>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp" alt="avatar 3" style={{ width: 40, height: '100%' }} />
              <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="form-control form-control-lg" id="exampleFormControlInput2" placeholder="Type message" />
              {/* <span className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip" /></span> */}
              <a className="ms-3 text-muted" onClick={() => setShowEmoji(true)}>
                <i className="fas fa-smile" />
              </a>
              <span className="ms-3" onClick={sentMessage}>
                {
                  sendLoading ?
                    <BounceLoader size={20} speedMultiplier={1.2} />
                    :
                    <i className="fas fa-paper-plane" />
                }
              </span>
            </form>
            {showEmoji &&
              <div className="emoji-container">
                <div className="emoji-box">
                  <AiFillCloseCircle className="icon" onClick={() => setShowEmoji(false)} />
                  <EmojiPicker onEmojiClick={(data) => setMessage(prev => prev + data.emoji)} />
                </div>
              </div>
            }
          </>
          :
          <div className="tap-on-chat-main">
            <div className="tap-container">
              <h4>
                Tap on a chat to start conversation...
              </h4>
            </div>
          </div>
      }
    </div>
  )
}
