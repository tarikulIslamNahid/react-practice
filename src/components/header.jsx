import React from 'react' 
import {Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline'; 
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const header = () => {
  
  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="static" color="primary" enableColorOnDark component="nav">
      <Toolbar>
     
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          ROUTER
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
             <Link  to='/'>
            <Button  sx={{ color: '#fff' }}>
            HOME
            </Button>
           </Link>
             <Link  to='/about'>
            <Button  sx={{ color: '#fff' }}>
            ABOUT
            </Button>
           </Link>
          </Box>
         

      </Toolbar>
    </AppBar>
      </Box>
  )
}

export default header