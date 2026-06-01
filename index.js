const XLSX = require("xlsx");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const express = require('express')
const { google } = require('googleapis')
const session = require("express-session");
const flash = require("connect-flash");
const nodemailer = require("nodemailer");
const boundary = "myboundary";

 const fs = require("fs");
 let data;
let fileContent;
let fileContent2;
let emailid;
let mailBody;
let subject;
let name;
let resume;
let excelfile;
let usertokens=null;
let otherdocs;
let gmail;

require('dotenv').config()




const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.listen(3000, () => {
  console.log('Server running')
})





const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.REDIRECT_URI
)
app.get('/auth/google', (req, res) => {
 console.log("AUTH GOOGLE HIT");
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: ['https://www.googleapis.com/auth/gmail.send']
  })
  res.redirect(url)
})
app.get('/auth/google/callback', async (req, res) => {
  console.log("CALLBACK HIT");
  const code = req.query.code

  const { tokens } = await oauth2Client.getToken(code);
  usertokens=tokens;

  oauth2Client.setCredentials(tokens);

   gmail = google.gmail({
    version: 'v1',
    auth: oauth2Client
  })
  // req.flash("success","sign up successful");
  // res.json({
  //   success:true,
  //   message:"sign up successful!"
  // })
  res.redirect("http://localhost:5173?message=success");
  // res.json({
  //   success:true,
  //   message:"Mails sent successfully"
  // })
});





app.post(
  "/data",
 

  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "resume", maxCount: 1 },
    { name: "otherdocs", maxCount: 1 }
  ]),

 async (req, res) => {
    if (!gmail) {
    return res.status(401).json({
      success: false,
      message: "Session expired. Please log in again."
    });
  }
  name=req.body.name;
     emailid=req.body.emailid;
   mailBody=req.body.mailBody;
   subject=req.body.subject;
     excelfile = req.files.avatar[0];
    resume = req.files.resume ? req.files.resume[0] : null;
otherdocs = req.files.otherdocs ? req.files.otherdocs[0] : null;

const workbook = XLSX.readFile(excelfile.path)

// Get first sheet name
const sheetName = workbook.SheetNames[0]

// Get sheet
const sheet = workbook.Sheets[sheetName]

// Convert sheet to JSON
 data = XLSX.utils.sheet_to_json(sheet)
 if (!(data[0]?.Email||data[0]?.Emails||data[0]?.emails||data[0]?.email)) {
  return res.status(400).json({
    success: false,
    message: "Email column is missing"
  });
}

console.log(data)
let fileContent = "";
if (resume!=null) {
  fileContent = fs.readFileSync(resume.path).toString("base64");
}
let fileContent2 = "";
if (otherdocs!=null) {
  const filePath2 = otherdocs.path;
  fileContent2 = fs.readFileSync(filePath2).toString("base64");
}

for(let i=0;i<data.length;i++){
let personalizedBody = mailBody;

  Object.keys(data[i]).forEach(key => {
    personalizedBody = personalizedBody.replaceAll(
      `{{${key}}}`,
      data[i][key]
    );
  });
  let personalizedSubject = subject;

  Object.keys(data[i]).forEach(key => {
    personalizedSubject = personalizedSubject.replaceAll(
      `{{${key}}}`,
      data[i][key]
    );
  });
  console.log("mailBody:", mailBody);
console.log("personalizedBody:", personalizedBody);

const parts = [
  `From: "${name}" <vidhilohia1111@gmail.com>`,
  `To: ${data[i].Emails||data[i].Email||data[i].email||data[i].emails}`,
  `Subject: ${personalizedSubject}`,
  'MIME-Version: 1.0',
  `Content-Type: multipart/mixed; boundary="${boundary}"`,
  '',

  `--${boundary}`,
  'Content-Type: text/plain; charset="UTF-8"',
  '',
  personalizedBody,
  '',

]
 
  if (resume!=null) {
  parts.push(
    `--${boundary}`,
    `Content-Type: application/pdf; name="${resume.originalname}"`,
    'Content-Transfer-Encoding: base64',
    `Content-Disposition: attachment; filename="${resume.originalname}"`,
    '',
    fileContent,
    ''
  );
}

// ✅ Other docs attachment (only if exists)
if (otherdocs!=null) {
  parts.push(
    `--${boundary}`,
    `Content-Type: application/pdf; name="${otherdocs.originalname}"`,
    'Content-Transfer-Encoding: base64',
    `Content-Disposition: attachment; filename="${otherdocs.originalname}"`,
    '',
    fileContent2,
    ''
  );
}

 parts.push(`--${boundary}--`);

const message = parts.join("\n");
  
  const encodedMessage = Buffer
    .from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')

    if (!gmail) {
  return res.status(401).json({
    message: "Session expired. Please log in again."
  });
}
try {
  await gmail.users.messages.send( {
    userId: 'me',
    requestBody: {
      raw: encodedMessage
    }});
} catch (err) {

  // Authentication expired / invalid
  if (
    err.code === 401 ||
    err.response?.status === 401
  ) {
    return res.status(401).json({
      success: false,
      message: "Session expired. Please log in again."
    });
  }

  return res.status(500).json({
    success: false,
    message: err.message
  });
}
}

  // res.redirect("http://localhost:5173?state=success");
  res.json({
    success:true,
    message:"Mails sent successfully"
  })
// res.redirect("/auth/google");
  });
  // app.post("/send-email",(req,res)=>{
  //   res.json(`${data.length} Recipients` );
  // })

// const oauth2Client = new google.auth.OAuth2(
//   process.env.GOOGLE_CLIENT_ID,
//   process.env.GOOGLE_CLIENT_SECRET,
//   process.env.REDIRECT_URI
// )
// app.get('/auth/google', (req, res) => {
//  console.log("AUTH GOOGLE HIT");
//   const url = oauth2Client.generateAuthUrl({
//     access_type: 'offline',
//     prompt: 'consent',
//     scope: ['https://www.googleapis.com/auth/gmail.send']
//   })
//   res.redirect(url)
// })
// app.get('/auth/google/callback', async (req, res) => {
//   console.log("CALLBACK HIT");
//   const code = req.query.code

//   const { tokens } = await oauth2Client.getToken(code);
//   usertokens=tokens;

//   oauth2Client.setCredentials(tokens);

//    gmail = google.gmail({
//     version: 'v1',
//     auth: oauth2Client
//   })
//   req.flash("success","sign up successful");
//   res.redirect("http://localhost:5173");
// }

// for(let i=0;i<data.length;i++){
// const message = [
//   'From: vidhilohia1111@gmail.com',
//   `To: ${data[i].Email}`,
//   `Subject: ${subject}`,
//   'MIME-Version: 1.0',
//   `Content-Type: multipart/mixed; boundary="${boundary}"`,
//   '',

//   `--${boundary}`,
//   'Content-Type: text/plain; charset="UTF-8"',
//   '',
//   mailBody,
//   '',

//   `--${boundary}`,
//   `Content-Type: application/pdf; name="${resume.filename}"`,
//   'Content-Transfer-Encoding: base64',
//   `Content-Disposition: attachment; filename="${resume.filename}"`,
//   '',
//   fileContent,
//   '',

  
//   `--${boundary}`,
//   `Content-Type: application/pdf; name="${otherdocs.filename}"`,
//   'Content-Transfer-Encoding: base64',
//   `Content-Disposition: attachment; filename="${otherdocs.filename}"`,
//   '',
//   fileContent2,
//   '',

//   `--${boundary}--`
// ].join('\n');
  
//   const encodedMessage = Buffer
//     .from(message)
//     .toString('base64')
//     .replace(/\+/g, '-')
//     .replace(/\//g, '_')
//     .replace(/=+$/, '')

//   await gmail.users.messages.send({
//     userId: 'me',
//     requestBody: {
//       raw: encodedMessage
//     }
//   })
//   }
  






