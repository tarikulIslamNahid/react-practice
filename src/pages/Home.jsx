import React from 'react'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container'
import  { useState, useEffect } from 'react';

const Home = () => {
    const [state, setState] = useState(20)
    const [employees, setEmployees] = useState([])
   useEffect(() => {
   
     return () => {
       async function getData() {
         let data = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
         const res = await data.json();
         console.log(res)
         setEmployees(res)
       }
       getData()
     }
   }, [state])
 
  return (
    
    <Container maxWidth="lg">
<Typography variant="h4" align='center' mt={4} color="#202020"> ({employees.length}) Employee List</Typography>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">DOB</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell component="th" scope="row">
                {row.firstName} {row.lastName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.contactNumber}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.dob}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </TableContainer>
  </Container>
  )
}

export default Home
