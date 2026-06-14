import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useState,useEffect} from 'react';
import Alert from '@mui/material/Alert';
let msg;
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
export default function ButtonAppBar({ alertType, setAlert }) {
  function login(){
    window.location.href = "https://bulkmails.onrender.com/auth/google";
  }

   // ✅ 1. Handle URL params (runs once)


// async function sendData() {
//   let response = await fetch("http://localhost:3000/data", {
//     method: "POST",
//   });

//   let data = await response.json();  // ✅ MUST await
//   msg=data.message;
//   if (data.success) {
//     setAlert("mail");
//   }
// }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        height:"80px",
        display:"flex",
        justifyContent:"space-between",
        backgroundColor:"#0a0a0f",
        borderBottom: "0.5px solid rgba(255,255,255,0.15)" 
      }}>
        <Toolbar>
          <ForwardToInboxOutlinedIcon  sx={{color:"#facc15 ",mt:2,ml: { xs: 0, md: "20px" },fontSize:"38px"}}></ForwardToInboxOutlinedIcon>
          <Typography variant="h5" sx={{textTransform:"none",mt:2,ml: { xs: "2px", md: "5px" }}}>bulkmail </Typography>
          
          <Box sx={{
            ml: "auto", display: "flex", gap: 2
          }}>
          <Button variant="outlined" onClick={login} sx={{
            mr: { xs: 0, md: "20px" },
            color:"white",
            width:"120px",
            borderColor:"#facc15",
            height:"50px",
            mt:2,
            textTransform:"none",
            fontSize:"20px"
            // borderColor: "white",      
            
          }}>Sign in</Button>
          
          
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}