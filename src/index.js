const nodeMailer = require('nodemailer');
const SMTP_CONFIG = require('../src/config/smtp');

const transporter = nodeMailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.password
    },
    tls: {
        rejectUnauthorized: false,
    }
});

async function SendEmail(){
    const MailSent = await transporter.sendMail({
        text: "Texto da mensagem",
        subject: "Assunto desse email",
        from: "Coming from a people",
        to: ['anderson.r.o.r.jr@gmail.com'],
    });
    console.log(MailSent);
}


SendEmail();