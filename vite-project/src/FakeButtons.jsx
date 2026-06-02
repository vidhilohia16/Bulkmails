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
        <Box sx={{display:"flex",justifyContent:"space-between",mt:"20px",gap:"0px",width:"100%"}}>
            
        <Button variant="contained" disabled sx={{borderRadius: "999px","&.Mui-disabled": {
            backgroundColor: "#58585d",
            color: "#b4b4ba",
            opacity: 1,
          },}}><AccountBoxIcon sx={{mr:0.5,height:"20px"}}></AccountBoxIcon>Contacts</Button>
          <Box
    sx={{
        mt:"20px",
      height: "1px",
      bgcolor: "grey",
    }}
  />
        <Button variant="contained" disabled sx={{borderRadius: "999px","&.Mui-disabled": {
            backgroundColor: "#58585d",
            color: "#b4b4ba",
            opacity: 1,
          },}}><EditNoteIcon sx={{mr:1}}></EditNoteIcon> Compose </Button>
          
          <Box 
    sx={{
        mt:"20px",
      width: "50px",
      height: "1px",
      bgcolor: "grey",
     
    }}
  />
        <Button variant="contained" disabled sx={{borderRadius: "999px","&.Mui-disabled": {
            backgroundColor: "#58585d",
            color: "#b4b4ba",
            opacity: 1,
          },}}><AttachFileOutlinedIcon fontSize="small" sx={{mr:1}}></AttachFileOutlinedIcon>Attach</Button>
          <Box
    sx={{
        mt:"20px",
      width: "50px",
      height: "1px",
      bgcolor: "grey",
    
    }}
  />
        <Button variant="contained" disabled sx={{borderRadius: "999px","&.Mui-disabled": {
            backgroundColor: "#58585d",
            color: "#b4b4ba",
            opacity: 1,
          },}}><RocketLaunchIcon fontSize="small" sx={{mr:1}}></RocketLaunchIcon>Send</Button>
        </Box>
    )
}