import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

export default function Footer() {
  return (
    <Box sx={{ borderTop: "1px solid #2e2e3a", mt: 8, px: { xs: 2, md: 6 }, py: 4,backgroundColor:"#13121f" }}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 4 }}>

        {/* Logo */}
        <Box>
          <Typography sx={{ color: "white", fontWeight: 500, fontSize: "16px", mb: 1 }}>
            <ForwardToInboxOutlinedIcon sx={{color:"#a78bfa"}}></ForwardToInboxOutlinedIcon> blastmail
          </Typography>
          <Typography sx={{ color: "#6b6b9a", fontSize: "13px" }}>
            Bulk email, simplified.
          </Typography>
          <Typography sx={{ color: "#6b6b9a", fontSize: "13px" }}>
            Write once,Hit 500 inboxes
          </Typography>
        </Box>

        {/* Contact */}
        <Box>
          <Typography sx={{ color: "#b4b4ba", fontSize: "11px", mb: 1.5, letterSpacing: "0.08em" }}>
            CONTACT
          </Typography>
          <Box sx={{display:"flex"}}><EmailOutlinedIcon fontSize="small" sx={{color:"#6b6b9a",mr:1}}></EmailOutlinedIcon><Link href="mailto:vidhilohia16@gmail.com" sx={{ textDecoration:"none",display: "block", color: "#6b6b9a", fontSize: "13px",  }}>vidhilohia16@gmail.com</Link></Box>
          <Box sx={{display:"flex"}}><LinkedInIcon fontSize="small" sx={{color:"#6b6b9a",mr:1}}></LinkedInIcon><Link href="https://www.linkedin.com/in/vidhi-lohia-303257395/" sx={{ textDecoration:"none",display: "block", color: "#6b6b9a", fontSize: "13px", mb: 1 }}>LinkedIn</Link></Box>
        </Box>

        {/* Legal */}
        <Box>
          <Typography sx={{ color: "#b4b4ba", fontSize: "11px", mb: 1.5, letterSpacing: "0.08em" }}>
            LEGAL
          </Typography>
          <Box sx={{display:"flex"}}><ShieldOutlinedIcon fontSize="small" sx={{color:"#6b6b9a"}}></ShieldOutlinedIcon><Link href="https:bulkmails-five.vercel.app/privacy-policy.html" sx={{ textDecoration:"none",display: "block", color: "#6b6b9a", fontSize: "13px", }}>Privacy policy</Link></Box>
        </Box>

      </Box>

      {/* Bottom bar */}
      <Box sx={{ borderTop: "1px solid #2e2e3a", width:"100%",mt: 4, pt: 2, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 1 }}>
        <Typography sx={{ color: "#3e3e5a", fontSize: "12px" }}>© 2026 blastmail. All rights reserved.</Typography>
        <Typography sx={{ color: "#3e3e5a", fontSize: "12px" }}>Made with ♥ by Vidhi</Typography>
      </Box>
    </Box>
  )
}