import { createTransport } from 'nodemailer';

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'cesar.rrguez@gmail.com',
    pass: '*************',
  },
  tls: { rejectUnauthorized: false },
});

const mailOptions = {
  from: 'cesar.rrguez@gmail.com',
  to: 'cesar.rrguez@gmail.com',
  subject: 'Test email subject',
  html: '<p>Test email <strong>body</strong></p>',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error sending email');
    console.log(error);
  } else {
    console.log('Email sent successfully');
    console.log(info);
  }
});

transporter.close();
