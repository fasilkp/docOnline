import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { RiFilter2Line, RiSearch2Line } from 'react-icons/ri'
import DoctorList from '../DoctorList/DoctorList'
import HospitalList from '../HospitalList/HospitalList'
import UserHeader from '../UserHeader/UserHeader'
import './userSearch.css'

function UserSearch() {
    const [name, setName] = useState("")
    const [searchType, setSearchType] = useState("doctor")
    const [doctorList, setDoctorList] = useState([])
    const [hospitalList, setHospitalList] = useState([])
    async function handleSearch() {
        if (searchType === 'hospital') {
            let { data } = await axios.get("/user/hospitals?name="+name);
            if (!data.err) {
                setHospitalList(data.hospitals)
            }
        } else {
            let { data } = await axios.get("/user/doctors?name="+name);
            if (!data.err) {
                setDoctorList(data.doctors)
            }
        }

    }
    useEffect(() => {
        handleSearch();
    }, [searchType])
    console.log(doctorList, hospitalList)


    return (
        <div className="user-main">
            <UserHeader />
            <Container>
                <Row className="mt-3">
                    <div className="user-search-box">
                        <form className="user-search-input" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                            <input type="text" placeholder='search' value={name} onChange={(e) => setName(e.target.value)} />
                            <RiSearch2Line className='icon' onClick={handleSearch} />
                        </form>
                        <div className="user-search-cat">

                            <div className="user-search-category">
                                <RiFilter2Line className='icon' />
                                <select name="" id="" placeholder='category' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                                    <option value="doctor">Doctor</option>
                                    <option value="hospital">Hospital</option>
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
                {
                    searchType === "doctor" &&
                    <Row className='mt-5'>
                        <DoctorList list={doctorList} />
                    </Row>
                }
                {
                    searchType === 'hospital' &&
                    <Row className='mt-5'>
                        <HospitalList list={hospitalList} />
                    </Row>
                }
            </Container>
        </div>
    )
}

export default UserSearch