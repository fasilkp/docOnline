import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ClipLoader } from 'react-spinners'
import '../../assets/css/modalForm.css'

function AddDoctor({setShowModal}) {
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [errMessage, setErrMessage]=useState("")
    const [refresh, setRefresh]=useState(false)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState({
        submit: false
    })
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading({ ...loading, submit: true })
        if (validForm()) {
            const { data } = await axios.post("/hospital/doctor", {
                email, password, name
            })
            if (data.err) {
                setErrMessage(data.message)
            } else {
                dispatch({type:"refresh"})
            }
            setLoading({ ...loading, submit: false })
            setRefresh(!refresh)
            setShowModal(false)
        }

    }
    function validForm() {
        if (email.trim() === "" || password.trim() === "" || name.trim()==="") {
            return false
        }
        return true
    }
    useEffect(() => {
        
    }, []);

  return (
    <div className="modal-form">
        <form className="modal-container" onSubmit={handleSubmit}>
            <div className="modal-form-row head">
                <h5>Add Doctor</h5>
            </div>
            <div className="modal-form-row">
            <TextField id="outlined-basic" value={name} onChange={(e) => setName(e.target.value)} label="Name" type="text" variant="outlined" fullWidth className='input' />
            </div>
            <div className="modal-form-row">
            <TextField id="outlined-basic" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" type="email" variant="outlined" fullWidth className='input' />    
            </div>
            <div className="modal-form-row">
            <TextField id="outlined-basic" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" variant="outlined" fullWidth className='input' />    
            </div>
            {errMessage && 
            <div className="modal-form-row">
                <b>{errMessage}</b>
            </div>
            }
            <div className="modal-form-row">
                <button type='button' onClick={()=>setShowModal(false)} className='btn btn-outline-dark w-50'>close</button>
                <button type='submmit' disabled={!validForm()} className='btn btn-dark w-50'>
                    Add
                    <ClipLoader size={20} color="white" loading={loading.submit} />

                    </button>
            </div>

        </form>
    </div>
  )
}

export default AddDoctor