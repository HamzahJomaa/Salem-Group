const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
    }
});

const mailOptions = (sender, receiver, subject, text) => {
    const options = {
        from: sender,
        to: receiver,
        subject: subject,
        text: text
    }
    return options
}
const sendEmail = await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});