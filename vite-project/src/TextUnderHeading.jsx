import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
export default function TextUnderHeading(){
   return <Box sx={{mx:"auto"}}>
      <Typography variant="h5" sx={{
    textAlign:"center",
    color:"grey",
    mt:"20px"

   }}>
    Upload your contacts spreadsheet, compose your pitch, attach your resume — and blast it to hundreds of recruiters at once
   </Typography>
   </Box>
}