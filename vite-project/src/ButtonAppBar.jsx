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
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const message = params.get("message");

  if (message === "success") {
    sessionStorage.setItem("loggedIn", "true");
    setAlert("signup");
  }

  if (params.toString()) {
    window.history.replaceState({}, document.title, window.location.pathname);
  }
}, []);
// ✅ 2. Handle alert timeout
useEffect(() => {
  if (!alertType) return;

  const timer = setTimeout(() => {
    setAlert(null);
  }, 7000);

  return () => clearTimeout(timer);
}, [alertType]);
  
  


// async function sendData() {
//   let response = await fetch("http://localhost:3000/data", {
//     method: "POST",
//   });

//   let data = await response.json();  // ✅ MUST await
//   msg=data.message;
//   if (data.success) {
//     setAlert("mail");
//     window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ scroll to alert
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
          <ForwardToInboxOutlinedIcon  sx={{color:"#a78bfa",mt:2,ml: { xs: 0, md: "20px" },fontSize:"38px"}}></ForwardToInboxOutlinedIcon>
          <Typography variant="h5" sx={{textTransform:"none",mt:2,ml: { xs: "2px", md: "5px" }}}>blastmail </Typography>
          
<Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", mt: "13px", px: { xs: 2, md: 0 }  }}>
  {alertType === "signup" && (
    <Alert severity="success" variant="filled" sx={{ width:"100%",maxwidth: "350px" ,display:"flex",justifyContent:"center", "& .MuiAlert-icon": {
      mt: "4px"}}}>
      <Typography variant='body1' sx={{textAlign:"center",fontSize:"20px"}}>Sign in successful</Typography>
    </Alert>
  )}
  {alertType === "mail" && (
    <Alert severity="success" variant="filled" sx={{ width:"100%",maxwidth: "350px" ,display:"flex",justifyContent:"center", "& .MuiAlert-icon": {
      mt: "4px"}}}>
      <Typography  variant='body1' sx={{textAlign:"center",fontSize:"20px"}}>Mails Sent Successfully</Typography>
    </Alert>
  )}
  {alertType === "loggedin" && (
    <Alert severity="error" variant="filled" sx={{ width:"100%",maxwidth: "450px" ,display:"flex",justifyContent:"center", "& .MuiAlert-icon": {
      mt: "4px"}}}>
      <Typography  variant='body1' sx={{textAlign:"center",fontSize:"20px"}}>You need to sign in first to upload</Typography>
    </Alert>
  )}
  {alertType === "loggedinsend" && (
    <Alert severity="error" variant="filled" sx={{ width:"100%",maxwidth: "450px" ,display:"flex",justifyContent:"center", "& .MuiAlert-icon": {
      mt: "4px"}}}>
      <Typography  variant='body1' sx={{textAlign:"center",fontSize:"20px"}}>Session expired please sign in agin</Typography>
    </Alert>
  )}
  {alertType === "missingfile" && (
    <Alert severity="error" variant="filled" sx={{width:"100%",maxwidth: "350px" ,display:"flex",justifyContent:"center", "& .MuiAlert-icon": {
      mt: "4px"}}}>
      <Typography  variant='body1' sx={{textAlign:"center",fontSize:"20px"}}>Excel file is empty</Typography>
    </Alert>
  )}  
  {alertType === "missingcol" && (
    <Alert severity="error" variant="filled" sx={{ width:"100%",maxwidth: "350px",display:"flex",justifyContent:"center", "& .MuiAlert-icon": {
      mt: "4px"}}}>
      <Typography  variant='body1' sx={{textAlign:"center",fontSize:"20px"}}>Email column is missing</Typography>
    </Alert>
  )}  
  
</Box>
          <Box sx={{
            ml: "auto", display: "flex", gap: 2
          }}>
          <Button variant="outlined" onClick={login} sx={{
            mr: { xs: 0, md: "20px" },
            color:"white",
            width:"120px",
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