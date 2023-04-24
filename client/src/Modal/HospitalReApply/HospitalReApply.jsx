import { InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { ClipLoader } from 'react-spinners'
import '../../assets/css/modalForm.css'

export default function HospitalReApply({ setShowModal, hospital }) {
    const [loading, setLoading] = useState({
        submit: false
    })
    const [image, setImage]=useState(null)
    const [name, setName]=useState("")
    const [about, setAbout]=useState("")
    const [address, setAddress]=useState("")
    const [place, setPlace]=useState("")
    const [mobile, setMobile]=useState("")
    const [finalImage, setFinalImage]=useState(null)
    const [errMessage, setErrMessage]=useState("")

    const isValidFileUploaded=(file)=>{
        const validExtensions = ['png','jpeg','jpg']
        const fileExtension = file.type.split('/')[1]
        return validExtensions.includes(fileExtension)
      }

    const handleImage=(e)=>{
        if(isValidFileUploaded(e.target.files[0])){
            setImage(e.target.files[0])
            setErrMessage("")
            ImageTOBase(e.target.files[0])
        }else{
            setErrMessage("Invalid File type")
        }
      console.log(e.target.files[0])
    }

    const ImageTOBase=(file)=>{
      const reader= new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend=()=>{
        setFinalImage(reader.result)
        console.log(reader.result)
      }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading({ ...loading, submit: true })
        const {data}= await axios.patch("/hospital/auth/reapply", {image:finalImage, name,hospitalId:hospital._id, about, address, place, mobile});
        console.log(data)
        if(data.err){
            setErrMessage(data.message)
        }
        setLoading({ ...loading, submit: false })
        setShowModal(false)
        window.location.reload()

        
       

    }
    function validForm() {
        if ( name.trim()==="" || 
            about.trim()==="" || address.trim()==="" || 
            mobile.toString().length!=10 ) {
            return false
        }
        return true
    }
    useEffect(()=>{
        setName(hospital.name)
        setAbout(hospital.about)
        setAddress(hospital.address)
        setPlace(hospital.place)
        setMobile(hospital.mobile)
    },[])


    return (
        <div className="modal-form">
            <form className="modal-container" onSubmit={handleSubmit}>
                <div className="modal-form-row head">
                    <h5>Edit Profile</h5>
                </div>

                <div className="modal-form-row">
                <TextField id="outlined-basic" value={name} onChange={(e) => setName(e.target.value)} label="Name" type="text" variant="outlined" fullWidth className='input' />
                </div>
                <div className="modal-form-row">
                <TextField id="outlined-basic" value={about} onChange={(e) => setAbout(e.target.value)} label="About" type="text" variant="outlined" fullWidth className='input' />
                </div>
                <div className="modal-form-row">
                <TextField id="outlined-basic" value={address} onChange={(e) => setAddress(e.target.value)} label="Address" type="text" variant="outlined" fullWidth className='input' />
                </div>
                <div className="modal-form-row">
                <TextField id="outlined-basic" value={place} onChange={(e) => setPlace(e.target.value)} label="Place" type="text" variant="outlined" fullWidth className='input' />
                </div>
                <div className="modal-form-row">
                <TextField id="outlined-basic" value={mobile} onChange={(e) => setMobile(e.target.value)} label="Mobile" type="number" variant="outlined" fullWidth className='input' />
                </div>
                <div className="modal-form-row">
                    <Form.Group controlId="formFile" className="mb-3 w-100">
                        <Form.Label>Input proof</Form.Label>
                        <Form.Control type="file" accept='image/*' className='w-100' onChange={handleImage} />
                    </Form.Group>
                </div>
                {
                    finalImage &&
                <div className="modal-form-row image full">
                    <img src={finalImage} alt="" />
                </div>
                }

                {errMessage &&
                    <div className="modal-form-row">
                        <b>{errMessage}</b>
                    </div>
                }
                <div className="modal-form-row">
                    <button type='button' onClick={() => setShowModal(false)} className='btn btn-outline-dark w-50'>close</button>
                    <button type='submmit' disabled={!validForm()} className='btn btn-dark w-50'>
                        Reapply
                        <ClipLoader size={20} color="white" loading={loading.submit} />

                    </button>
                </div>

            </form>
        </div>
    )
}
