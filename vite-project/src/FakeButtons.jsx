import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';

export default function FakeButtons(){
    return (
        <Box sx={{display:"flex",justifyContent:"space-between",mt:"20px",gap:"0px",width:"100%",maxWidth:"600px"}}>
            
        <Button variant="contained" disabled sx={{borderRadius: "999px","&.Mui-disabled": {
            backgroundColor: "#58585d",
            fontSize:{xs:"10px",md:"14px"},
            padding:{xs:"4px 8px",md:"6px 16px"},
            flexShrink:0,
            color: "#b4b4ba",
            opacity: 1,
          },}}><AccountBoxIcon sx={{height:"20px"}}></AccountBoxIcon>Contacts</Button>
          <Box
    sx={{
        mt:"20px",
         flex:1,
        width:"100%",

      height: "1px",
      bgcolor: "grey",
    }}
  />
        <Button variant="contained" disabled sx={{borderRadius: "999px","&.Mui-disabled": {
            backgroundColor: "#58585d",
            color: "#b4b4ba",
            opacity: 1,
            fontSize:{xs:"10px",md:"14px"},
            padding:{xs:"4px 8px",md:"6px 16px"},
            flexShrink:0,
          },}}><EditNoteIcon></EditNoteIcon> Compose </Button>
          
          <Box 
    sx={{
        mt:"20px",
        flex:1,
        width:"100%",
   
      height: "1px",
      bgcolor: "grey",
     
    }}
  />
        <Button variant="contained" disabled sx={{borderRadius: "999px","&.Mui-disabled": {
            backgroundColor: "#58585d",
            color: "#b4b4ba",
            fontSize:{xs:"10px",md:"14px"},
            padding:{xs:"4px 8px",md:"6px 16px"},
            flexShrink:0,
            opacity: 1,
          },}}><AttachFileOutlinedIcon fontSize="small" ></AttachFileOutlinedIcon>Attach</Button>
          <Box
    sx={{
        mt:"20px",
         flex:1,
      width:"100%",

      height: "1px",
      bgcolor: "grey",
    
    }}
  />
        <Button variant="contained" disabled sx={{borderRadius: "999px","&.Mui-disabled": {
            backgroundColor: "#58585d",
            color: "#b4b4ba",
            opacity: 1,
            fontSize:{xs:"10px",md:"14px"},
            padding:{xs:"4px 8px",md:"6px 16px"},
            flexShrink:0,
          },}}><RocketLaunchIcon fontSize="small" ></RocketLaunchIcon>Send</Button>
        </Box>
    )
}