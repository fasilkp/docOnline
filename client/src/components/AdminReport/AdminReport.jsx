import * as React from 'react';
import { useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Backdrop, CircularProgress, setRef } from '@mui/material';
import HospitalSidebar from '../HospitalSidebar/HospitalSidebar';
import { useDispatch, useSelector } from 'react-redux'
import HospitalHeader from '../HospitalHeader/HospitalHeader';
import { useEffect } from 'react';
import { getHospitalReport } from '../../api/hospitalApi';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { FcOk, FcOvertime, FcTodoList } from "react-icons/fc";
import './HospitalReport.css'
import dayjs from 'dayjs';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'

 
export default function AdminReport() {
    const [refresh, setRefresh] = useState(false)
    const [startDate, setStartDate] = useState(dayjs(new Date(new Date().setDate(new Date().getDate() - 7))))
    const [endDate, setEndDate] = useState(dayjs(new Date()))
    const [load, setLoad] = useState(false)
    const [data, setData] = useState({})
    const { hospital } = useSelector((state) => state)
    const [clicked, setCLicked] = useState(false)
    const handleClick = () => {
        setCLicked(!clicked)
    }
    console.log(startDate)
    useEffect(() => {
        (
            
        async function () {
            const data = await getHospitalReport(startDate, endDate);
            console.log(data)
            if (!data.err) {
                setData(data)
            }
        }
        )()
       
}, [refresh, startDate, endDate]);
const iconComponent = {
    booking: () => <FcTodoList className='icon' />,
    upcoming: () => <FcOvertime className='icon' />,
    completed: () => <FcOk className='icon' />,
}
const downloadPdf=()=>{
    const totalBody=data.totalCount.map((item=>["Total "+item._id, item.count]))
    const byDoctor=data.byDoctor.map((item=>[item._id.doctorName, item.count, item.totalProfit]))
    const byDepartment=data.byDepartment.map((item=>[item.department.name, item.count, item.totalProfit]))
    const doc = new jsPDF();
    doc.setFontSize(13);
    doc.text("DocOnline Booking Report ( "+new Date(data.startDate).toLocaleDateString()+" - "+new Date(data.endDate).toLocaleDateString()+" )", 13, 10);

    autoTable(doc, {
        theme: 'grid',
        head: [["Analysis Report",""],['Total', 'Count']],
        body: totalBody,
        startY: 20

    })
    doc.autoTable({
        theme: 'grid',
        head: [["Analysis By Doctor","",''],['Total', 'Count', 'Profit']],
        body: byDoctor,
        startY: doc.lastAutoTable.finalY + 10
    })
    doc.autoTable({
        theme: 'grid',
        head: [["Analysis By Department","",''],['Total', 'Count', 'Profit']],
        body: byDepartment,
        startY: doc.lastAutoTable.finalY + 10
    })

    doc.save("a4.pdf");
}

return (
    <div className="admin-home">

        <HospitalHeader handleClick={handleClick} />
        <div className="admin-main">
            <HospitalSidebar page={'reports'} clicked={clicked} />
            <Container fluid>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className="admin-container" id="textHtml">
                        <div className="container-header">
                            <h5>Bookking report</h5>
                            {/* <div className="admin-search-box">
                                    <input type="text" placeholder='Search...' value={name} onChange={(e) => setName(e.target.value)} />
                                    <button><RiSearch2Line /></button>
                                </div> */}
                            <button className='btn btn-dark' onClick={downloadPdf}>Download Pdf</button>
                        </div>
                        <Row>

                            <Container fluid>
                                <Row>

                                    <Col md={6} >
                                        <div className="report-box">
                                            <div className="report-input">
                                                <h5>Choose Date</h5>
                                            </div>
                                            <div className="report-input">
                                                <div className="report-input-row">
                                                    {/* <div className="report-input-radio">
                                                            <input type="radio" id='thisweek' name='date' />
                                                            <label htmlFor="thisweek">This Week</label>
                                                        </div> */}
                                                    <div className="report-input-radio">
                                                        <input type="radio" id='lastweek' name='date' />
                                                        <label htmlFor="lastweek">Last Week</label>
                                                    </div>
                                                </div>
                                                <div className="report-input-row">
                                                    <div className="report-input-radio">
                                                        <input type="radio" id='thismonth' name='date' />
                                                        <label htmlFor="thismonth">This Month</label>
                                                    </div>
                                                    <div className="report-input-radio">
                                                        <input type="radio" id='lastmonth' name='date' />
                                                        <label htmlFor="lastmonth">Last month</label>
                                                    </div>
                                                </div>
                                                <div className="report-input-row">
                                                    <div className="report-input-radio">
                                                        <input type="radio" id='thisyear' name='date' />
                                                        <label htmlFor="thisyear">This Year</label>
                                                    </div>
                                                    <div className="report-input-radio">
                                                        <input type="radio" id='lastyear' name='date' />
                                                        <label htmlFor="lastyear">Last Year</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="report-input">
                                                <div className="report-input-date-picker">
                                                    <h5>Choose time</h5>
                                                </div>
                                                <div className="report-input-row">
                                                    <div className="report-input-date-picker">
                                                        <MobileDatePicker className='w-100' value={startDate} onChange={(date) => setStartDate(date)} />
                                                    </div>
                                                    <div className="report-input-date-picker">
                                                        <MobileDatePicker className='w-100' value={endDate} onChange={(date) => setEndDate(date)} />
                                                    </div>
                                                </div>

                                                {/* <div className="report-input-date-picker">
                                                    <input type="radio" id='lastweek' name='date' />
                                                    <label htmlFor="lastweek">Last Week</label>
                                                </div> */}

                                            </div>

                                        </div>

                                    </Col>
                                    <Col md={6} >
                                        <div className="report-box total">
                                            {
                                                data.totalCount &&
                                                data.totalCount.map((item, index) => {
                                                    return <div className="report-box-item" key={index}>
                                                        <div>
                                                            <h6>Total {item._id}</h6>
                                                            <h3>{item.count}</h3>
                                                        </div>
                                                        <div>
                                                            {iconComponent[item._id]()}
                                                        </div>
                                                    </div>
                                                })

                                            }

                                        </div>
                                    </Col>
                                </Row>
                                <Row>

                                    <Col md={6} >
                                        <Table className='table-main' responsive>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Departmet Name</th>
                                                    <th>Count</th>
                                                    <th>Profit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data && data.byDepartment ?
                                                        data.byDepartment.map((item, index) => {
                                                            return <tr key={index}>
                                                                <td>{index + 1}</td>
                                                                <td>
                                                                    {item.department.name}
                                                                </td>
                                                                <td>
                                                                    {item.count}
                                                                </td>
                                                                <td>
                                                                    {item.totalProfit}
                                                                </td>

                                                            </tr>
                                                        }) : null
                                                }
                                            </tbody>
                                        </Table>
                                    </Col>
                                    <Col md={6} >
                                        <Table className='table-main' responsive>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Doctor Name</th>
                                                    <th>Count</th>
                                                    <th>Profit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data && data.byDoctor ?
                                                        data.byDoctor.map((item, index) => {
                                                            return <tr key={index}>
                                                                <td>{index + 1}</td>
                                                                <td>
                                                                    {item._id.doctorName}
                                                                </td>
                                                                <td>{item.count}</td>
                                                                <td>{item.totalProfit}</td>

                                                            </tr>
                                                        }) : null
                                                }
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>

                            </Container>
                        </Row>



                    </div>
                </LocalizationProvider>

            </Container>
        </div>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={load}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    </div>

);
}