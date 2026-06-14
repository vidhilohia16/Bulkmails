import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useEffect,useState} from 'react'
export default function Heading(){
  const [count, setCount] = useState(0);

useEffect(() => {
  const target = 500, duration = 1800;
  let start = null;
  const easeOut = t => 1 - Math.pow(1 - t, 3);

  const animate = (ts) => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    setCount(Math.round(easeOut(progress) * target));
    if (progress < 1) requestAnimationFrame(animate);
  };

  const id = setTimeout(() => requestAnimationFrame(animate), 300);
  return () => clearTimeout(id);
}, []);
    return (
        <Box  sx={{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }} >

  <Typography
    sx={{
      fontSize: { xs: "1.7rem", md: "3.75rem" },
      fontWeight: 700,
      textAlign:"center",
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
        color: "#facc15 ",
        lineHeight: 1.2,
      }}
    >
      Hit {count}+ inboxes.
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