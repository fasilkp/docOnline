import React, { useEffect, useState } from 'react'
import UserHeader from '../UserHeader/UserHeader'
import doctorImg from '../../assets/images/doctor.png'
import './UserBooking.css'
import { Container } from 'react-bootstrap'
import axios from 'axios'

export default function UserBooking() {
  const [bookingList, setBookingList] = useState([])

  useEffect(() => {
    (
      async function () {
        const { data } = await axios.get("/user/booking");
        if (!data.err) {
          setBookingList(data.bookings)
        }

      }
    )()
  }, [])
  return (
    <div className="user-main">
      <UserHeader />
      <Container
      >

        <div className="user-booking-container">
          <h4 className='mt-3'>Recent Booking</h4>
          {

            bookingList.map((item, index) => {
              return <div className="user-booking-item">
                <div className="ub-dr-profile">
                  <img src={item.doctorId.image.url} alt="" />
                </div>
                <div className="ub-dr-desc">
                  <div className="ub-dr-desc-item">
                    <b>{item.doctorId.name}</b>
                    <span>
                      <b>Date: </b>
                      <p>{new Date(item.time).toLocaleDateString()}</p>
                    </span>
                    <span>
                      <b>Time: </b>
                      <p>{new Date(item.time).toLocaleTimeString('en-US')}</p>
                    </span>
                    <span>
                      <b>Token: </b>
                      <p>{item.token}</p>
                    </span>

                  </div>
                </div>
              </div>
            })

          }

        </div>
      </Container>

    </div>
  )
}
