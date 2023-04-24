import React from 'react'
import HospitalApproval from '../../components/HospitaApproval/HospitalApproval'

function HospitalApproalPage({rejected, rejectedMessage, hospital}) {
  return (
        <HospitalApproval rejected={rejected} hospital={hospital} rejectedMessage={rejectedMessage} />
    )
}

export default HospitalApproalPage