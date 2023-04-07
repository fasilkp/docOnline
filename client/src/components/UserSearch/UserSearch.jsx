import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { RiFilter2Line, RiSearch2Line } from 'react-icons/ri'
import DoctorList from '../DoctorList/DoctorList'
import HospitalList from '../HospitalList/HospitalList'
import UserHeader from '../UserHeader/UserHeader'
import './userSearch.css'

function UserSearch() {

    return (
        <div className="user-main">
            <UserHeader />
            <Container>
                <Row className="mt-3">
                    <div className="user-search-box">
                        <div className="user-search-input">
                            <input type="text" placeholder='search' />
                            <RiSearch2Line className='icon' />
                        </div>
                        <div className="user-search-cat">

                        <div className="user-search-category">
                            <RiFilter2Line className='icon' />
                            <select name="" id="" placeholder='category'>
                                <option value="">Doctor</option>
                                <option value="">Hospital</option>
                                <option value="">department</option>
                            </select>
                        </div>
                        <div className="user-search-category">
                            <RiFilter2Line className='icon' />
                            <select name="" id="" placeholder='category'>
                                <option value="">All Department</option>
                                <option value="">Hospital</option>
                                <option value="">department</option>
                            </select>
                        </div>
                        </div>
                        {/* <div className="user-search-btn">
                            <button>Find</button>
                        </div> */}
                    </div>

                </Row>
                <Row className='mt-5'>
                    <DoctorList />
                </Row>
                <Row className='mt-5'>
                    <HospitalList />
                </Row>
            </Container>
        </div>
    )
}

export default UserSearch