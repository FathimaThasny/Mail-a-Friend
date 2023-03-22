const express = require('express');
const app = express();


//nodemailer initialization
const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    user: 'fathimathasny4@gmail.com',
    pass: 'zxgbtqftjdyrktym'
  }
});


var mailOptions = {
    from: 'fathimathasny4@gmail.com',
    to: 'madcrafts17@gmail.com',
    subject: 'Mail a Friend',
    text: 'Hi There!! \n\n This is a sample mail send by using nodeMailer.\n\n Hope you are fine.. \n\n Reagards, \n Thasny'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  

app.listen(3000, () => {
    console.log("Server Running...");
})