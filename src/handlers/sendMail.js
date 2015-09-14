import nodemailer from 'nodemailer';
import config from '../../config.js';

function getSmtpTransport(service, user, pass) {
  return nodemailer.createTransport('SMTP', {
    service,
    auth: {
      user,
      pass
    }
  });
}

export default function sendMail(req, res) {
  let from = req.body.from, sender = req.body.sender, body = req.body.text;
  if(!from || !sender || !body) {
    res.status(400);
    res.send('Invalid args!');
  }
  let smtpTransport = getSmtpTransport(config.email.service,
    config.email.user, config.email.password);
  smtpTransport.sendMail({
    from: req.body.from,
    to: config.email.user,
    subject: `${config.email.subject} [${req.body.sender}]`,
    body: req.body.text
  }, (error) => {
    if(error) {
      console.log(error);
      res.status(500);
      res.send(error + 'Unable to send mail!');
    } else {
      res.status(200);
      res.send('Thank you! I will contact you as soon as possible');
    }
  });
}
