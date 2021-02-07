const nodemailer = require('nodemailer');

// create transport for nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);

  // if mapleSyrup is filled its a bot, return 400 error
  if (body.mapleSyrup) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Boop beep bop zzzsstt' }),
    };
  }

  // if requiredField is missing return 400 error
  const requiredFields = ['email', 'name', 'subject', 'message'];
  for (const field of requiredFields) {
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops! You're missing the ${field} field`,
        }),
      };
    }
  }

  const info = await transporter.sendMail({
    from: `${body.name} <${body.email}>`,
    to: 'jeremy@kmmassage.com',
    subject: `${body.subject} | Launch Pad`,
    html: `<p>${body.message}</p>`,
  });
  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' }),
  };
};
