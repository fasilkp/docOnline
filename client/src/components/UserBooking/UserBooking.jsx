import React, { useEffect, useState } from 'react'
import UserHeader from '../UserHeader/UserHeader'
import doctorImg from '../../assets/images/doctor.png'
import './UserBooking.css'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { Chip } from '@mui/material'

export default function UserBooking() {
  const [bookingList, setBookingList] = useState([])

  useEffect(() => {
    (
      async function () {
        const { data } = await axios.get("/user/booking");
        console.log(data)
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
                    <div className="mt-2">
                      <p>Date : </p>
                      <p> {new Date(item.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p>Time : </p>
                      <p> {new Date(item.time).toLocaleTimeString('en-US')}</p>
                    </div>
                    <div>
                      <p>Token : </p>
                      <p> {item.token}</p>
                    </div>

                  </div>
                  <div className="booking-status">
                  <Chip label="consulted" color="primary" variant="outlined" />
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
