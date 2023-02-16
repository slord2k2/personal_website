const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const PORT= process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));


// const nodemailer = require('nodemailer');

// app.use(bodyParser.json());

// app.post('/send-email', (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const subject = req.body.subject;
//   const message = req.body.message;

//   const transporter = nodemailer.createTransport({
//     host: 'your-smtp-server.com',
//     port: 587,
//     secure: false,
//     auth: {
//       user: 'your-email@example.com',
//       pass: 'your-email-password',
//     },
//   });

//   const mailOptions = {
//     from: 'your-email@example.com',
//     to: 'harshkishor2002@gmail.com',
//     subject: subject,
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.send('error');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.send('success');
//     }
//   });
// });

// Middleware

app.use('/assets', express.static(__dirname + '/assets'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
  });

app.get("/index.html" ,(req,res)=>{
  res.redirect("/");
})



app.post("/",(req,res)=>{
  res.redirect("/");
})


app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
    console.log('Server started on port '+app.get('port'));
});

