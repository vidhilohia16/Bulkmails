import Box from '@mui/material/Box';
import { useState,useRef } from 'react';
import './Content.css';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Typography from '@mui/material/Typography';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Content({subject,emailid,mailBody,setMailBody,setEmail,setSubject,name,setName,errorsubject,errormail,showerrormail,showerrorsubject}){
   const subjectRef=useRef();
  const mailRef=useRef();


    // const [email,setEmail]=useState("");
    // const [subject,setSubject]=useState("");
    // const [mailBody,setMailBody]=useState("");
    const ChangeEmail=(event)=>{
        setEmail(event.target.value);
    };
    const ChangeMailBody=(event)=>{
      showerrormail(false);
        setMailBody(event.target.value);
    };
    const ChangeSubject=(event)=>{
      showerrorsubject(false);
        setSubject(event.target.value);
    }
    const ChangeName=(event)=>{
        setName(event.target.value);
    }
    
    const [fresh,setFresh]=useState("");
    function fresher(){
      showerrormail(false);
      setMailBody(`Dear Hiring Manager,
I hope this message finds you well. I am {name}, a final-year student at BITS Pilani pursuing B.E. in Computer Science, with a keen interest in {role}.I came across your company's work and would love to explore opportunities to contribute to your team. I have attached my resume for your kind consideration.I am eager to learn and grow within a dynamic team, and I believe my skills in [skill 1] and [skill 2] could add value.
Looking forward to hearing from you.
Warm regards,
{name}`)

        setSubject(`Application for {role}  `)
    }
    function Referal(){
      showerrormail(false);
      setMailBody(`Dear Hiring manager,
I was referred to you by [Referrer's Name], who highly recommended I reach out regarding opportunities at your organisation.
I am {name} with experience in [relevant area]. I am very excited about the possibility of contributing to your team as {role}.My resume is attached. Thank you for your time and I look forward to speaking with you.
Best,
{name}`)
        setSubject(`Referred by [Name] for the {role}`)
    }
    function Cold(){
      showerrormail(false);
      setMailBody(`Hi,
I hope you're doing well! I am {name}.I have a passion for [domain]. I admire your company's work on [product/initiative] and would love to explore if there are any openings that match my profile for the role of {role}.
`)
      setSubject(`Exploring {role} opportunities `)
    }




return (
    <Box sx={{backgroundColor:"rgba(255,255,255,0.04)",borderColor:"rgba(255,255,255,0.3)",width:"100%",maxWidth:"800px",height:"auto",mx:"auto",p:2,mt:"40px",mb:"0px",borderRadius:"10px"}}>
        
        <Box sx={{display:"flex",mb:2}}>
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
  2
</Box>
            <Typography sx={{ml:1}} >
               COMPOSE MAIL
            </Typography>
            </Box>
<form className="row g-3" action="http://localhost:3000/data" method="post">
  <div class="col-md-6">
    <label htmlFor="inputName" className="form-label">Name</label>
    <input type="text" name="name" spellCheck={false} value={name} onChange={ChangeName} className="form-control custom" placeholder="e.g.Vidhi Lohia"id="inputName" style={{backgroundColor:"rgba(124,58,237,0.05)",border:"1px dashed #a78bfa",color:"white"}}/>
  </div>
  
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label" >Your Email</label>
    <input type="text" name="emailid" spellCheck={false} value={emailid} className="form-control custom" onChange={ChangeEmail} placeholder="e.g. vidhilohia@gmail.com" id="inputEmail4" style={{backgroundColor:"rgba(124,58,237,0.05)",border:"1px dashed #a78bfa",color:"white"}}/>
  </div>
  
  <div class="col-12">
    <label htmlFor="inputSubject" className="form-label">Subject Line</label>
    <input type="text"  ref={subjectRef} name="subject" spellCheck={false} value={subject} onChange={ChangeSubject} className="form-control custom" placeholder="e.g.Application for the role of Software Engineer"id="inputSubject" style={{backgroundColor:"rgba(124,58,237,0.05)",border:"1px dashed #a78bfa",color:"white"}}/>
    {errorsubject?<Box sx={{display:"flex",gap:"4px"}} ><InfoOutlinedIcon fontSize='small' sx={{color:"red",mt:"2px"}}></InfoOutlinedIcon><Typography variant='body1' sx={{color:"red",mt:"2px"}}>Subject line is required</Typography></Box>:null}
  </div>
  <div class="col-12">
    <label htmlFor="inputMail" className="form-label">Mail Body</label>
    <textarea value= {mailBody}
    spellCheck={false}
     ref={mailRef}
    name="mailBody"
    onChange={ChangeMailBody}
  className="form-control custom"
  placeholder="Enter message.."
  rows="5"
  style={{backgroundColor:"rgba(124,58,237,0.05)",border:"1px dashed #a78bfa",color:"white"}}
/>
 {errormail?<Box sx={{display:"flex",gap:"4px"}}><InfoOutlinedIcon fontSize='small' sx={{color:"red",mt:"2px"}}></InfoOutlinedIcon><Typography variant='body1' sx={{color:"red",mt:"2px"}}>Mail Body is required</Typography></Box>:null}
  </div>
  <div class="col-md-12" style={{display:"flex",gap:"10px",overflowX:"auto",paddingBottom:"4px"}}>
    <div className="mt-2">

    Suggested templates: 
    </div>
    <button type="button" class="btn btn-outline-light" onClick={fresher}>Fresher Application</button> 
    <button type="button" class="btn btn-outline-light" onClick={Referal}>Referral follow-up</button> 
    <button type="button" class="btn btn-outline-light" onClick={Cold}>Cold Outreach</button>
    
    

    </div>
  
</form>
<Box sx={{backgroundColor:"#1e1d1d",width:"100%",mx:"auto",maxWidth:"766px",mt:3,height:"auto",borderRadius:"10px",p:1}}>
  <Box sx={{display:"flex"}}><InfoOutlinedIcon fontSize='small' sx={{color:"#8c8585",mr:1,mt:"1px"}}></InfoOutlinedIcon><Typography sx={{color:"#8c8585"}}>{`Use {{ }} in your subject or mail body to personalize each email — for example, {{HR_Name}} or {{Company}}`}</Typography></Box>
  <Box sx={{display:"flex"}}><ReportProblemOutlinedIcon fontSize='small' sx={{color:"#8c8585",mr:1,mt:"1px"}}></ReportProblemOutlinedIcon><Typography sx={{color:"#8c8585"}}>The name inside the braces must match your Excel column header exactly (case-sensitive).</Typography></Box>
</Box>

</Box>

)
}