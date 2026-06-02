import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <Box sx={{ borderTop: "1px solid #2e2e3a", mt: 8, px: { xs: 2, md: 6 }, py: 4 }}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 4 }}>

        {/* Logo */}
        <Box>
          <Typography sx={{ color: "white", fontWeight: 500, fontSize: "16px", mb: 1 }}>
            ✉️ blastmail
          </Typography>
          <Typography sx={{ color: "#6b6b9a", fontSize: "13px" }}>
            Bulk email, simplified.
          </Typography>
        </Box>

        {/* Contact */}
        <Box>
          <Typography sx={{ color: "#b4b4ba", fontSize: "11px", mb: 1.5, letterSpacing: "0.08em" }}>
            CONTACT
          </Typography>
          <Link href="mailto:vidhilohia16@email.com" sx={{ display: "block", color: "#6b6b9a", fontSize: "13px", mb: 1 }}>vidhilohia16@email.com</Link>
          <Link href="https://www.linkedin.com/in/vidhi-lohia-303257395/" sx={{ display: "block", color: "#6b6b9a", fontSize: "13px", mb: 1 }}>LinkedIn</Link>
        </Box>

        {/* Legal */}
        <Box>
          <Typography sx={{ color: "#b4b4ba", fontSize: "11px", mb: 1.5, letterSpacing: "0.08em" }}>
            LEGAL
          </Typography>
          <Link href="https:bulkmails-five.vercel.app/privacy-policy.html" sx={{ display: "block", color: "#6b6b9a", fontSize: "13px", mb: 1 }}>Privacy policy</Link>
        </Box>

      </Box>

      {/* Bottom bar */}
      <Box sx={{ borderTop: "1px solid #2e2e3a", mt: 4, pt: 2, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 1 }}>
        <Typography sx={{ color: "#3e3e5a", fontSize: "12px" }}>© 2026 blastmail. All rights reserved.</Typography>
        <Typography sx={{ color: "#3e3e5a", fontSize: "12px" }}>Made with ♥ by Vidhi</Typography>
      </Box>
    </Box>
  )
}