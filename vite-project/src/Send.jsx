// import Button from '@mui/material/Button';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import SendIcon from '@mui/icons-material/Send';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Content from './Content.jsx';
// export default function Send(){
// return <Box sx={{display:"flex",justifyContent:"center",mt:"40px"}}>
//     <Button variant="outlined" sx={{width:"800px",backgroundColor:"grey",color:"white"}}><RocketLaunchIcon></RocketLaunchIcon>
//     <Typography variant="h5" sx={{textTransform:"none",ml:1,}}>  Send to all recipients</Typography></Button>
//     </Box>

// async function ClickButton(){
//     await fetch("http://localhost:3000/data",{
//         method:"POST",
        
//       body:formData
//     })
// }



// return <Box sx={{
//   background: "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(29,158,117,0.1) 100%)",
//   border: "0.5px solid rgba(124,58,237,0.3)",
//   borderRadius: "14px",
//   padding: "22px 24px",
//   display: "flex",
//   margin: "0 auto",
//   width:"800px",
//   justifyContent:"space-between",
//   alignItems: "center",
//   mt:"40px",
// }}>
//   <Box>
//     <Typography variant="body1"sx={{  color: "rgba(255,255,255,0.6)", mb: 0.5 }}>
//       Ready to send to
//     </Typography>
//     <Typography variant="h5"sx={{  color: "#fff", fontWeight: 500 }}>
//       0 recipients
//     </Typography>
//     <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
//       upload a contacts file to begin
//     </Typography>
//   </Box>

//   <Button variant="outlined"  onClick={ClickButton} sx={{
//     borderColor:"white",
//     color: "#fff",
//     fontWeight: 500, 
//     padding: "12px 28px",
//     borderRadius: "10px",
//     textTransform: "none",
//     '&:hover': { background: "#363638" }
//   }}>
//     <RocketLaunchIcon sx={{mr:1}}></RocketLaunchIcon><Typography sx={{fontSize:"20px",fontWeight: 500,}}>Blast emails</Typography>
//   </Button>
// </Box>}