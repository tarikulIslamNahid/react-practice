import React from 'react'
import { useParams } from 'react-router-dom';
const EmployeeDetails = () => { 
    const { userId } = useParams();
  return (
    <div>
          <h1>EMPLOYEE DETAILS FOR : { userId}</h1>
    </div>
  )
}

export default EmployeeDetails
