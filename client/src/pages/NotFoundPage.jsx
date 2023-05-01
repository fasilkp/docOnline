import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
    const navigate = useNavigate()
    return (
        <div style={{
            backgroundImage:'url(https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg)' ,
            width:"100vw",
            height:"100vh",
            backgroundSize:"cover"          
        }}
        onClick={()=>navigate('/')}
        >
           
        </div>
    )
}
