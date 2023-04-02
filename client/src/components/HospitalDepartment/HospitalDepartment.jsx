import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { Container, Dropdown, Table } from 'react-bootstrap';
import { RiMore2Fill } from 'react-icons/ri';
import Swal from 'sweetalert2'
import { Backdrop, CircularProgress } from '@mui/material';
import HospitalSidebar from '../HospitalSidebar/HospitalSidebar';
import { useDispatch, useSelector } from 'react-redux'
import HospitalHeader from '../HospitalHeader/HospitalHeader';

export default function HospitalDepartment() {
    const [refresh, setRefresh] = useState(false)
    const [load, setLoad] = useState(false)
    const { hospital } = useSelector((state) => state)
    const departmentList = hospital.details.departments
    const dispatch = useDispatch()


    //   const rejectRequest = async (e, email) => {
    //     e.preventDefault();
    //     Swal.fire({
    //       title: 'Are you sure?',
    //       text: "You won't be able to revert this!",
    //       icon: 'warning',
    //       showCancelButton: true,
    //       confirmButtonColor: '#7e3af2',
    //       cancelButtonColor: '##a8a8a8',
    //       confirmButtonText: 'Yes, Accept it!'
    //     }).then(async (result) => {
    //       if (result.isConfirmed) {
    //         setLoad(true)
    //         const { data } = await axios.post("/admin/hospital/reject", { email });
    //         if (!data.err) {
    //           Swal.fire(
    //             'Success!',
    //             'Successfully Rejected',
    //             'success'
    //           )
    //           setRefresh(!refresh)
    //         } else {
    //           Swal.fire(
    //             'Failed!',
    //             'Something Went Wrong',
    //             'error'
    //           )

    //         }
    //         setLoad(false)
    //       }
    //     })
    //   }

    const addDepartment = async () => {
        const { value: department } = await Swal.fire({
            title: 'Add Department',
            input: 'text',
            inputLabel: 'Enter Department name',
            inputPlaceholder: 'Enter your department name',
            confirmButtonText: 'Add',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })

        if (department) {
            let { data } = await axios.post("/hospital/department", { department });
            if (!data.err) {
                Swal.fire(
                    'Success!',
                    'Successfully Added',
                    'success'
                )
            }else{
                Swal.fire(
                    'Failed!',
                    data.message,
                    'error'
                )

            }
            dispatch({type:'refresh'})
        }
    }
    return (
        <div className="admin-home">

            <HospitalHeader />
            <div className="admin-main">
                <HospitalSidebar page={'department'} />
                <Container fluid>

                    <div className="admin-container">
                        <div className="container-header">
                            <h5>Departments</h5>
                            <button className='btn btn-dark' onClick={addDepartment}>Add Department</button>
                        </div>
                        <Table className='table-main' responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>option</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    departmentList.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item}</td>
                                            <td className='option-btn'>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <RiMore2Fill />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#" onClick={(e) => { }}>Accept</Dropdown.Item>
                                                        <Dropdown.Item href="#" onClick={(e) => { }}>Reject</Dropdown.Item>
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
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={load}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>

    );
}