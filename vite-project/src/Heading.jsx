import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
export default function Heading(){
    return (
//         <Box >
//         <Typography  sx={{textAlign:"center",fontWeight:600,fontSize: { xs: "2rem", md: "3.75rem" }}}>
//             Stop applying one by one. 
//         </Typography>
//         <br/>
//         <Box sx={{display: "flex",justifyContent:"center", alignItems:"center", // 👈 add this
//   textAlign: "center"}}>
//         <Typography  sx={{fontWeight:600,fontSize: { xs: "2rem", md: "3.75rem" },}}>
//             Write once. 
//         </Typography>
//         <Typography  sx={{ 
//             fontStyle: "italic" ,
//             fontWeight:600,
//             fontSize: { xs: "2rem", md: "3.75rem" },
//             color:"#a78bfa"}}>
//             Hit 500 inboxes. 
//         </Typography>
//         <Typography sx={{fontWeight:"bold",fontSize: { xs: "2rem", md: "3.75rem" },}}>
//             Get Hired 
//         </Typography>
//         </Box>
//         </Box>
<Box  sx={{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }} >

  <Typography
    sx={{
      fontSize: { xs: "2rem", md: "3.75rem" },
      fontWeight: 700,
      lineHeight: 1.2,
    }}
  >
    Stop applying one by one.
  </Typography>

  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 1,
      flexWrap: "wrap",
      mt: 1,
    }}
  >
    <Typography
      sx={{
        fontSize: { xs: "1.8rem", md: "3.75rem" },
        fontWeight: 700,
        lineHeight: 1.2,
      }}
    >
      Write once.
    </Typography>

    <Typography
      sx={{
        fontSize: { xs: "1.8rem", md: "3.75rem" },
        fontStyle: "italic",
        fontWeight: 700,
        color: "#a78bfa",
        lineHeight: 1.2,
      }}
    >
      Hit 500 inboxes.
    </Typography>

    <Typography
      sx={{
        fontSize: { xs: "1.8rem", md: "3.75rem" },
        fontWeight: 700,
        lineHeight: 1.2,
      }}
    >
      Get Hired
    </Typography>
  </Box>

</Box>
    )
}