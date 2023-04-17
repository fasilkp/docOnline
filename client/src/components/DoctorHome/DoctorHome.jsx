import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Dropdown, Table } from 'react-bootstrap';
import { RiMore2Fill } from 'react-icons/ri';
import DoctorBottomNav from '../DoctorBottom/DoctorBottom';
import DoctorHeader from '../DoctorHeader/DoctorHeader';
import DoctorSideBar from '../DoctorSidebar/DoctorSidebar';

function DoctorHome() {
  const [bookingList, setBookingList] = useState([])
  useEffect(() => {
    (
        async function () {
            const { data } = await axios.get("/doctor/booking");
            console.log(data)
            console.log(data)
            if (!data.err) {
                setBookingList(data.bookings)
            }
        }
    )()
}, []);

  return (
    <div className="admin-home">
      <DoctorHeader />
      <div className="admin-main">
        <DoctorSideBar page={'home'}/>
        <div className="admin-container">
          <Container fluid>

          <h5>Todays Booking</h5>
          <Table className='table-main' responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Patient Name</th>
                                    <th>Fees</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>option</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookingList.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                {/* <Link to={"/doctor/"+item._id}> */}
                                                {item.patientName}
                                                {/* </Link> */}
                                                </td>
                                            <td>{item.fees}</td>
                                            <td>{new Date(item.date).toLocaleDateString()}</td>
                                            <td>{new Date(item.time).toLocaleTimeString('en-US')}</td>
                                            <td className='option-btn'>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                        <RiMore2Fill />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        {/* <Dropdown.Item href="#" onClick={() => { navigate('/account/hospital/schedule/'+item._id) }}>Schedule</Dropdown.Item> */}
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </Table>
          </Container>


        </div>
      </div>
      <DoctorBottomNav page={'home'} />
    </div>
  )
}

export default DoctorHome