import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import HospitalHeader from '../HospitalHeader/HospitalHeader';
import HospitalSidebar from '../HospitalSidebar/HospitalSidebar';
import '../../assets/css/dashboard.css'
import { FcMoneyTransfer, FcPaid, FcPortraitMode, FcTodoList } from 'react-icons/fc'
import Chart from "react-apexcharts";
import axios from 'axios';
import { getDashboardDetails } from '../../api/hospitalApi';
function HospitalHome() {
  const [clicked, setCLicked] = useState(false)
  const [dashboardData, setDashboardData]= useState({
    totalBooking:0,
    totalRevenue:0,
    totalDoctors:0
  })
  const handleClick = () => {
    setCLicked(!clicked)
  }
  const state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  };
  useEffect(()=>{
    (
      async function(){
        const data = await getDashboardDetails()
        if(!data.err){
          setDashboardData({
            ...data.booking, totalDoctors:data.totalDoctors
          })
        }
      }
    )()

  },[])

  return (
    <div className="admin-home">
      <HospitalHeader handleClick={handleClick} />
      <div className="admin-main">
        <HospitalSidebar page={'dashboard'} clicked={clicked} />
        <div className="admin-container">
          <Container fluid>

            <h5>Dashboard</h5>
          </Container>
          <Container>
            <Row>


              <Col md={4}>
                <div className="dash-item">
                  <div className="dash-item-desc">
                    <b>Total Booking</b>
                    <h3>{dashboardData.totalBooking}</h3>
                  </div>
                  <div className="dash-item icon">
                    <div className="icon-div">
                      <FcTodoList className='icon' />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="dash-item">
                  <div className="dash-item-desc">
                    <b>Total Revenue</b>
                    <h3>{dashboardData.totalRevenue}</h3>
                  </div>
                  <div className="dash-item icon">
                    <div className="icon-div">
                      <FcMoneyTransfer className='icon' />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="dash-item">
                  <div className="dash-item-desc">
                    <b>Total Doctors</b>
                    <h3>{dashboardData.totalDoctors}</h3>
                  </div>
                  <div className="dash-item icon">
                    <div className="icon-div">
                      <FcPortraitMode className='icon' />
                    </div>
                  </div>
                </div>
              </Col>
              {/* <Col md={3}>
                <div className="dash-item">
                  <div className="dash-item-desc">
                    <b>Total Booking</b>
                    <h3>435</h3>
                  </div>
                  <div className="dash-item icon">
                    <div className="icon-div">
                      <FcPaid className='icon' />
                    </div>
                  </div>
                </div>
              </Col> */}
            </Row>

          </Container>
          <Container fluid>

            <h5>Analysis</h5>
          </Container>
          <Container>
            <Row>
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              className={'w-100 dashboard-chart'}
              height={300}
            />
            </Row>

          </Container>
        </div>
      </div>
    </div>
  )
}

export default HospitalHome