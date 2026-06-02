import './App.css'
import * as XLSX from "xlsx";
import ButtonAppBar from './ButtonAppBar.jsx'
import Heading from './Heading.jsx'
import TextUnderHeading from './TextUnderHeading.jsx'
import FakeButtons from './FakeButtons.jsx'
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import Contacts from './Contacts.jsx'
import Content from './Content.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Attach from './Attach.jsx'
import Button from '@mui/material/Button';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress'

import { useState,useEffect,useRef } from 'react'


  function App() {
    const [errormail,showerrormail]=useState(false);
  
    const [errorfile,showerrorfile]=useState(false);
    
     const [errorsubject,showerrorsubject]=useState(false);

const [alertType, setAlert] = useState(null);
const [isloading, setloading] = useState(false);

const [recipients,setRecipients]=useState("0 Recipients")
  const [excelFile, setExcelFile] = useState(null);
const [emailid, setEmail] = useState("");
const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const [mailBody, setMailBody] = useState("");

  const [resume, setResume] = useState(null);
  const [otherdocs, setOtherdocs] = useState(null);
  useEffect(() => {
  if (!excelFile) return;

  const reader = new FileReader();

  reader.onload = (e) => {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: "array" });

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const jsonData = XLSX.utils.sheet_to_json(sheet);
      if (jsonData.length === 0) {
    setAlert("missingfile");
    return;
  }

  if (!("Email" in jsonData[0]||"email" in jsonData[0]||"emails" in jsonData[0]||"Emails" in jsonData[0])) {
    setAlert("missingcol");
    return;
  }

    setRecipients(`${jsonData.length} recipients`);
  };

  reader.readAsArrayBuffer(excelFile);
}, [excelFile]);

  async function ClickButton() {
     const isLoggedIn = sessionStorage.getItem("loggedIn");
                if (isLoggedIn!="true") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                setAlert("loggedinsend");
                  return; }
  
    
    if(excelFile==null){
      showerrorfile(true);
        window.scrollTo({ top: 10, behavior: "smooth" });
    return;
    }
    if(!subject.trim()){
      showerrorsubject(true);
      window.scrollTo({ top: 550, behavior: "smooth" });
    return;
    }
    if(!mailBody.trim()){
      showerrormail(true);
       window.scrollTo({ top: 650, behavior: "smooth" });
    return;
    }

    setloading(true);
    const formData = new FormData();

    

    formData.append("subject", subject);

    formData.append("mailBody", mailBody);
    formData.append("name", name);
    formData.append("emailid", emailid);
    if(resume){
  formData.append("resume", resume);
}

if(otherdocs){
  formData.append("otherdocs", otherdocs);
}

if(excelFile){
  formData.append("avatar", excelFile);
}

   let response = await fetch("https://bulkmails.onrender.com/data", {
    method: "POST",
    body: formData
  });

  let data = await response.json();  // ✅ SAME request response

  if (response.status === 401) {
  sessionStorage.removeItem("loggedIn");
  setAlert("loggedinsend"); // or a different alert
  window.scrollTo({ top: 0, behavior: "smooth" });
  setloading(false);
  return;
}
if (response.status === 400) {
  setAlert("missingcol"); // or a different alert
  window.scrollTo({ top: 0, behavior: "smooth" });
  return;
}
  if (data.success) {
    setloading(false);
    setAlert("mail");                // ✅ show success
    window.scrollTo({ top: 0, behavior: "smooth" });

  }
  }
  return <>
   <BrowserRouter>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<>
        <div className="bubbles"></div>
  <div className="bubble"></div>
  <div className="bubble2"></div>
  <div className="bubble3"></div>
  <ButtonAppBar alertType={alertType} setAlert={setAlert} />
  <Button variant="outlined" disabled sx={{backgroundColor:"rgba(124,58,237,0.18)",borderColor:"rgba(124,58,237,0.8)",borderRadius:"40px",display:"flex",justifyContent:"center",margin: "0 auto",mt:"65px",mb:"10px"}}><BoltOutlinedIcon fontSize="small" sx={{color:"#c4b5fd"}}></BoltOutlinedIcon><Typography sx={{textTransform:"none",color:"#c4b5fd"}}>Bulk email,simplified</Typography></Button>
  <Heading />
  
  <TextUnderHeading />
  <FakeButtons />
   <Contacts setExcelFile={setExcelFile} alertType={alertType} setAlert={setAlert}  showerrorfile={showerrorfile} errorfile={errorfile}/>
   <Content
   name={name}
   setName={setName}
   emailid={emailid}
   setEmail={setEmail}
        subject={subject}
        setSubject={setSubject}
        mailBody={mailBody}
        
        setMailBody={setMailBody}
        showerrormail={showerrormail} errormail={errormail} showerrorsubject={showerrorsubject} errorsubject={errorsubject}
      />
  
  <Attach setResume={setResume} 
  setOtherdocs={setOtherdocs} />
  
  <Box sx={{
  background: "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(29,158,117,0.1) 100%)",
  border: "0.5px solid rgba(124,58,237,0.3)",
  borderRadius: "14px",
  padding: "22px 24px",
  display: "flex",
  margin: "0 auto",
  width:"800px",
  justifyContent:"space-between",
  alignItems: "center",
  mt:"40px",
  position: "relative",   // ← needed for progress bar
  overflow: "hidden",
}}>
  <Box>
    <Typography variant="body1"sx={{  color: "rgba(255,255,255,0.6)", mb: 0.5 }}>
      Ready to send to
    </Typography>
    <Typography variant="h5"sx={{  color: "#fff", fontWeight: 500 }}>
      {recipients}
    </Typography>
    <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
      upload a contacts file to begin
    </Typography>
  </Box>

  <Button variant="outlined"  onClick={ClickButton}
   sx={{
      borderColor: isloading ? "rgba(124,58,237,0.6)" : "white",
    color: isloading ? "rgba(255,255,255,0.5)" : "#fff",
    borderColor:"white",
    color: "#fff",
    fontWeight: 500, 
    padding: "12px 28px",
    borderRadius: "10px",
    textTransform: "none",
    '&:hover': { background: "#363638" }
  }}>
    {isloading?<><CircularProgress size={20} sx={{ color: "#a78bfa", mr: 1 }} /> <Typography>Sending emails…</Typography></>:<><RocketLaunchIcon sx={{mr:1}}></RocketLaunchIcon><Typography sx={{fontSize:"20px",fontWeight: 500,}}>Blast emails</Typography></>}
  </Button>
   {isloading && (
    <Box sx={{
      position: "absolute",
      bottom: 0,
      left: 0,
      height: "3px",
      background: "linear-gradient(90deg, #7c3aed, #1d9e75)",
      borderRadius: "0 0 14px 14px",
      animation: "progressAnim 5s ease forwards",
      "@keyframes progressAnim": {
        from: { width: "0%" },
        to: { width: "90%" }
      }
    }} />
  )}
</Box>
      </>} />



      </Routes>
    </BrowserRouter>
 
  </>
}

export default App
