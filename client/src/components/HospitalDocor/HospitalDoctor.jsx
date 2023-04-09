import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { Container, Dropdown, Table } from 'react-bootstrap';
import { RiMore2Fill } from 'react-icons/ri';
import Swal from 'sweetalert2'
import { Backdrop, CircularProgress, setRef } from '@mui/material';
import HospitalSidebar from '../HospitalSidebar/HospitalSidebar';
import { useDispatch, useSelector } from 'react-redux'
import HospitalHeader from '../HospitalHeader/HospitalHeader';
import AddDoctor from '../../Modal/AddDoctor/AddDoctor';
import { useEffect } from 'react';
import EditDoctor from '../../Modal/editDoctor/EditDoctor';

export default function HospitalDoctor() {
    const [refresh, setRefresh] = useState(false)
    const [editDoctorId, setEditDoctorId] = useState("")
    const [load, setLoad] = useState(false)
    const { hospital } = useSelector((state) => state)
    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [doctorList, setDoctorList] = useState([])
    const [clicked, setCLicked] = useState(false)
    const handleClick = () => {
        setCLicked(!clicked)
    }
    const dispatch = useDispatch()

    const addDoctor = async () => {
        setShowModal(true)
    }
    const blockDoctor = (id) => {
        Swal.fire({
            title: 'Are you sure? Block',
            text: "Block this user!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7e3af2',
            cancelButtonColor: '##a8a8a8',
            confirmButtonText: 'Yes, Block!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await axios.patch("/hospital/doctor/block", { id });
                setRefresh(!refresh)
            }
        })
    }
    const unBlockDoctor = (id) => {
        Swal.fire({
            title: 'Are you sure? Unblock',
            text: "Unblock this user!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7e3af2',
            cancelButtonColor: '##a8a8a8',
            confirmButtonText: 'Yes, Unblock!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await axios.patch("/hospital/doctor/unblock", { id });
                setRefresh(!refresh)
            }
        })
    }
    useEffect(() => {
        (
            async function () {
                const { data } = await axios.get("/hospital/doctors");
                console.log(data)
                if (!data.err) {
                    setDoctorList(data.doctors)
                }
            }
        )()
    }, [refresh]);

    return (
        <div className="admin-home">

            <HospitalHeader handleClick={handleClick} />
            <div className="admin-main">
                <HospitalSidebar page={'doctor'} clicked={clicked} />
                <Container fluid>

                    <div className="admin-container">
                        <div className="container-header">
                            <h5>Doctors</h5>
                            <button className='btn btn-dark' onClick={addDoctor}>Add Doctor</button>
                        </div>
                        <Table className='table-main' responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Fees</th>
                                    <th>Status</th>
                                    <th>option</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    doctorList.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.fees}</td>
                                            <td>{item.block ? "Blocked" : "Active"}</td>
                                            <td className='option-btn'>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                        <RiMore2Fill />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#" onClick={(e) => { setShowEditModal(true); setEditDoctorId(item._id) }}>Edit</Dropdown.Item>
                                                        {
                                                            item.block ?
                                                            <Dropdown.Item href="#" onClick={() => { unBlockDoctor(item._id) }}>unBlock Doctor</Dropdown.Item>
                                                            :
                                                            <Dropdown.Item href="#" onClick={() => { blockDoctor(item._id) }}>Block Doctor</Dropdown.Item>
                                                        }
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </Table>

                    </div>
                </Container>
            </div>
            {
                showModal &&
                <AddDoctor setShowModal={setShowModal} refresh={refresh} setRefresh={setRefresh} />
            }
            {
                showEditModal &&
                <EditDoctor setShowModal={setShowEditModal} id={editDoctorId} refresh={refresh} setRefresh={setRefresh} />
            }
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={load}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>

    );
}