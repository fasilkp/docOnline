import React, { useEffect, useState } from 'react'
import UserHeader from '../UserHeader/UserHeader'
import doctorImg from '../../assets/images/doctor.png'
import './UserBooking.css'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { Chip, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import ViewEmr from '../../Modal/ViewEmr/ViewEmr'

export default function UserBooking() {
  const [bookingList, setBookingList] = useState([])
  const [booking, setBooking] = useState({})
  const [filter, setFilter]=useState('upcoming')
  const [showAddEmr, setShowAddEmr] = useState(false)

  useEffect(() => {
    (
      async function () {
        const { data } = await axios.get("/user/booking?filter="+filter);
        console.log(data)
        if (!data.err) {
          setBookingList(data.bookings)
        }

      }
    )()
  }, [filter])
  const showEmr = (data) => {

    setBooking(data);
    setShowAddEmr(true)
  }
  return (
    <div className="user-main">
      <UserHeader />
      <Container
      >

        <div className="user-booking-container">
          <div className='d-flex justify-content-between'>
            <h4 className='mt-3'>Recent Booking</h4>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">Booking Status</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                onChange={(e)=>setFilter(e.target.value)}
                value={filter}
                autoWidth
                label="Age"
              >
                <MenuItem value={'upcoming'}>upcoming</MenuItem>
                <MenuItem value={'completed'}>completed</MenuItem>
              </Select>
            </FormControl>

          </div>
          {

            bookingList.map((item, index) => {
              return <div className="user-booking-item" key={index} onClick={() => showEmr(item)}>
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
                    <Chip label={item.status} color={item.status == 'consulted' ? "primary" : "secondary"} variant="outlined" />
                  </div>
                </div>
              </div>
            })

          }

        </div>
      </Container>
      {
        showAddEmr &&
        <ViewEmr booking={booking} setShowAddEmr={setShowAddEmr} />
      }


    </div>
  )
}
