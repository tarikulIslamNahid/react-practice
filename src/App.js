import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
 
function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [data, setData] = useState([])
  const AddData = () => {
    setData(
      [...data,{
        name,email
      }])
      setName('')
      setEmail('')
  }
  const remove = (id) => {
    let arr = data;
    arr.splice(id, 1)
    setData([...arr])
  }
  return (
    <Container maxWidth="lg">
    <div className="App">
      <Header name='Top Header' />
      {/* For variant="text", adjust the height via font-size */}
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={name} onChange={(e)=> setName(e.target.value)} size="small" id="outlined-basic" label="Name" variant="outlined" />
          <TextField size="small" value={email} onChange={(e)=> setEmail(e.target.value)}  id="outlined-basic" label="Email" variant="outlined" />
          <Button onClick={AddData} variant="contained" size="medium"  endIcon={<SendIcon />}>
        Add
      </Button> 
        </Box>
       
<Typography variant="h5" mt={3} bgcolor={'#202020'} py={2} color="white">User Data List</Typography>
        
        <TableContainer component={Paper} >
      <Table size='medium' bgcolor={'white'}>
        <TableHead>
          <TableRow >
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align='center'>Email</TableCell> 
            <TableCell align='right'>Action</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{index+1}</TableCell> 
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align='center'>{row.email}</TableCell> 
              <TableCell align='right'>
                <IconButton onClick={()=>remove(index)} aria-label="delete">
        <DeleteIcon />
                </IconButton>
              </TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <Footer/>
    </div>
    </Container>

  );
}

export default App;
