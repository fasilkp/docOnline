import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import AdminHeader from '../AdminHeader/AdminHeader';
import { FcMoneyTransfer, FcPaid, FcPortraitMode, FcTodoList } from 'react-icons/fc'
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import Chart from "react-apexcharts";
import './AdminHome.css'
import { getAdminDashboardDetails } from '../../api/adminApi';

function AdminHome() {
  const [clicked, setCLicked]=useState(false)
  const handleClick=()=>{
    setCLicked(!clicked)
  }
  const [dashboardData, setDashboardData] = useState({
    totalBooking: 0,
    totalRevenue: 0,
    totalDoctors: 0,
    monthlyData: []
  })
  const state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
      }
    },
    series: [
      {
        name: "series-1",
        data: dashboardData.monthlyData
      }
    ]
  };
  useEffect(() => {
    (
      async function () {
        const data = await getAdminDashboardDetails()
        if (!data.err) {
          setDashboardData({
            ...data.booking, totalDoctors: data.totalDoctors,
            monthlyData: data.monthlyData
          })
        }
      }
    )()

  }, [])
  return (
    <div className="admin-home">
      <AdminHeader handleClick={handleClick} />
      <div className="admin-main">
        <AdminSidebar page={'dashboard'} clicked={clicked} />
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

export default AdminHome