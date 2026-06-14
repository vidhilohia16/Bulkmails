import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import { useState,useRef } from 'react';

export default function Attach({setResume,setOtherdocs}){
  const attachRef=useRef();
  const attachmoreRef=useRef();
  const [fileName,setFileName]=useState("");
  const handleTransfer1=(file)=>{
    if(file){
      setFileName(file.name);
      setResume(file); 
      
    }
  }
  const [fileName2,setFileName2]=useState("");
  const handleTransfer2=(file)=>{
    if(file){
      setFileName2(file.name);
      setOtherdocs(file);
    }
  }

    return (
        <Box sx={{backgroundColor:"rgba(255,255,255,0.04)",mx:"auto",height:"auto",width:"100%",maxWidth:"800px",mt:"40px",borderRadius:"10px",p:2}}>
            <Box sx={{display:"flex"}}>
            <Box sx={{
  width: 22,
  height: 22,
  borderRadius: "50%",
  background: "#facc15",
  border: "0.5px solid black",
  color: "black ",
  fontSize: 13,
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
  3
</Box>
            <Typography sx={{ml:1}} >
               ATTACHMENTS
            </Typography>
            </Box>
            <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row"},gap:2}}>

            <Button onClick={()=>attachRef.current.click()} onDragOver={(e)=>{
              e.preventDefault();
            }} onDrop={(e)=>{
              e.preventDefault();
              handleTransfer1(e.dataTransfer.files[0])
            }} sx={{border:"1px dashed #facc15 ",width:"100%",padding:"24px 16px",maxWidth:"375px",mx:"auto",height:"auto",mt:"5px", backgroundColor:"black"
      }}>
        
          <input style={{display:"none"}} ref={attachRef} onChange={(e)=>{
            handleTransfer1(e.target.files[0])
          }} type="file" name="resume"></input>
        
        <Box sx={{display:"flex",alignItems:"center",flexDirection:"column"}}>
        <PictureAsPdfOutlinedIcon sx={{ml:1,color:"#facc15 "}}>

        </PictureAsPdfOutlinedIcon>
         <Box sx={{ ml: 1 }}>
        <Typography variant="h6"  sx={{textTransform: "none",color:"white"}}>{fileName||"Resume/CV"}</Typography>
       
        <Typography variant="body1" sx={{textTransform: "none",color:"white"}}>{fileName?"Click to change file":"PDF or Word"}</Typography>
        </Box>
        </Box>
        </Button>

        <Button onClick={()=>attachmoreRef.current.click()} onDragOver={(e)=>{
              e.preventDefault();
            }} onDrop={(e)=>{
              e.preventDefault();
              handleTransfer2(e.dataTransfer.files[0])
            }} sx={{border:"1px dashed #facc15 ",mx:"auto",padding:"24px 16px",width:"100%",maxWidth:"375px",height:"auto",mt:"5px",backgroundColor:"black"
      }}>
        
          <input style={{display:"none"}} ref={attachmoreRef} onChange={(e)=>{
            handleTransfer2(e.target.files[0]) 
          }} type="file" name="otherdocs"></input>
        
        <Box sx={{display:"flex",alignItems:"center",flexDirection:"column"}}>
        <FileCopyOutlinedIcon sx={{ml:1,color:"#facc15 "}}>
        </FileCopyOutlinedIcon>
         <Box sx={{ ml: 1 }}>
        <Typography variant="h6"  sx={{textTransform: "none",color:"white"}}>{fileName2||"Other documents"}</Typography>
       
        <Typography variant="body1" sx={{textTransform: "none",color:"white"}}>{fileName2?"Click to change file":"Portfolio, cover letter, etc."}</Typography>
        </Box>
        </Box>
        </Button>
        </Box>

        </Box>
    )
}