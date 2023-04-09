import { Col, Container, Row } from "react-bootstrap"
import UserHeader from "../UserHeader/UserHeader"
import React, { useEffect, useState } from 'react'
import DoctorList from '../DoctorList/DoctorList'
import { useLocation, useParams } from "react-router-dom"
import axios from "axios"

function UserDepartment() {
    const {id}= useParams()
    const [doctorsList, setDoctorsList] = useState([]);
    const {state}= useLocation()
    console.log(state.hospital)
    
    useEffect(()=>{
        (
            async function(){
                let result
                if(state.hospital){
                    console.log("1")
                    result = await axios.get("/user/doctors?department="+id+"&hospital="+state.hospital);
                }else{
                    console.log("2")
                    result = await axios.get("/user/doctors?department="+id);
                }
                if(!result.data.err){
                    setDoctorsList(result.data.doctors)
                }
            }
        )()
    },[])
    // console.log(id)
    
    return (
        <div className="user-main">

            <UserHeader />
            <Container className="mt-3">
                <DoctorList list={doctorsList} />
            </Container>
        </div>
    )
}

export default UserDepartment