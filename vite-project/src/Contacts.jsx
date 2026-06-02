import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import {useState, useRef } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
export default  function Contacts({ setExcelFile,alertType, setAlert,showerrorfile,errorfile }){
    // const [dragging,setDragging]=useState(setDragging(false));
    const intRef=useRef();
    const [fileName,setFileName]=useState("");
    const handleFile=(file)=>{
        if(file){
            setFileName(file.name);
            setExcelFile(file);
        }
    }
    return (
        <>
        <input type="file" name="avatar" ref={intRef} style={{display:"none"}}  onChange={(e) =>{ 
             const isLoggedIn = sessionStorage.getItem("loggedIn")==="true";
                if (!isLoggedIn) {
                    console.log("SETTING ALERT");
                setAlert("loggedin");
                return; }
                showerrorfile(false);
                handleFile(e.target.files[0])}}/>
        <Box sx={{backgroundColor:"rgba(255,255,255,0.04)",mx:"auto",height:"auto",width:"100%",maxWidth:"800px", mt:"60px",borderRadius:"10px",p:2,borderColor:"rgba(255,255,255,0.2)"}}>
            <Box sx={{display:"flex"}}>
                <Box sx={{
  width: 22,
  height: 22,
  borderRadius: "50%",
  background: "rgba(124,58,237,0.25)",
  border: "0.5px solid rgba(124,58,237,0.45)",
  color: "#a78bfa",
  fontSize: 13,
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
  1
</Box>
            <Typography sx={{ml:1}}>
                CONTACTS SPREADSHEET
            </Typography>
            </Box>
             
            <Button onClick={()=>{
                
  console.log("CLICKED")
              
            const isLoggedIn = sessionStorage.getItem("loggedIn")==="true";
                if (!isLoggedIn) {
                    console.log("SETTING ALERT");
                     window.scrollTo(0,0);
                setAlert("loggedin");
               
                return; }
                showerrorfile(false);
               intRef.current.click();
        }} onDragOver={(e) => { e.preventDefault(); }}
            // onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
                e.preventDefault();
                showerrorfile(false);
                const isLoggedIn = sessionStorageStorage.getItem("loggedIn")==="true";
                if (!isLoggedIn) {
                      window.scrollTo(0,0);
                setAlert("loggedin");
              
                return; }
            // setDragging(false)
            handleFile(e.dataTransfer.files[0]);  }}
            sx={{border:"1px dashed #a78bfa",width:"100%",maxWidth:"766px",height:"140px",mx:"auto",mt:"10px",backgroundColor:"rgba(124,58,237,0.05)"
      }}>
         
           
             
        <Box sx={{display:"flex",alignItems:"center",flexDirection:"column"}}>
        <UploadFileIcon  sx={{ml:1,color:"#a78bfa",fontSize:"38px",mb:1}}>
        </UploadFileIcon>
         <Box sx={{ ml: 1 }}>
        <Typography variant="h6"  sx={{textTransform: "none",color:"white"}}>{fileName||"Drop your Excel or Csv here"}</Typography>
       
        <Typography variant="body1" sx={{textTransform: "none",color:"#58585d"}}>{fileName?"Click to change file":"or click to browse — .xlsx, .xls, .csv supported"}</Typography>
        </Box>

         
        </Box>
        </Button>
 {errorfile?<Box sx={{display:"flex",gap:"4px"}}><InfoOutlinedIcon fontSize='small' sx={{color:"red",mt:"2px"}}></InfoOutlinedIcon><Typography variant='body1' sx={{color:"red",mt:"2px"}}>Excel file is required</Typography></Box>:null}

      <Box sx={{backgroundColor:"#1e1d1d",width:"100%",mx:"auto",maxWidth:"766px",display:"flex",mt:2,height:"auto",p:1,borderRadius:"10px",}}><InfoOutlinedIcon fontSize='small' sx={{color:"#8c8585",mr:1,mt:"1px"}}></InfoOutlinedIcon><Typography sx={{color:"#8c8585"}}>Your sheet must have an 'Email' column</Typography></Box>
      
        </Box>
       </>
    )
}
