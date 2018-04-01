var nodemailer = require('nodemailer');
var smtpPool = require('nodemailer-smtp-pool');
var fs = require('fs');

var transporter = nodemailer.createTransport({
   service : 'naver',
   auth : {
       user : '',
       pass : ''
   }
});

var mailOptions = {
    from : '',
    to : '',
    subject : 'This is test',
    text : 'blah',
    attachments : [
        {
            filename : 'sohee.jpg',
            path : 'sohee.jpg'
        }
    ]
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    } else {
        console.log('Email sent :'+ info.response);
    }
    transporter.close();
});