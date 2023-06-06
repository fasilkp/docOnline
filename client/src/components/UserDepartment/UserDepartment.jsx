import { Col, Container, Row } from "react-bootstrap"
import UserHeader from "../UserHeader/UserHeader"
import React, { useEffect, useState } from 'react'
import DoctorList from '../DoctorList/DoctorList'
import { useLocation, useParams } from "react-router-dom"
import axios from "axios"

function UserDepartment() {
    const {id}= useParams()
    const [doctorsList, setDoctorsList] = useState([]);
    const [rating, setRating]=useState({})
    const {state}= useLocation()
    
    useEffect(()=>{
        (
            async function(){
                let result
                if(state.hospital){
                    result = await axios.get("/user/doctors?department="+id+"&hospital="+state.hospital);
                }else{
                    result = await axios.get("/user/doctors?department="+id);
                }
                if(!result.data.err){
                    setDoctorsList(result.data.doctors)
                    setRating(result.data.rating)
                }
            }
        )()
    },[])
    return (
        <div className="user-main">
            <UserHeader />
            <Container className="mt-3">
                <DoctorList list={doctorsList} rating={rating} />
            </Container>
        </div>
    )
}

export default UserDepartment