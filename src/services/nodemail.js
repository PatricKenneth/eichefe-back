const nodemailer = require('nodemailer');

class Nodemail {
    emailSend = (data) => {
        console.log(data);
        const smtpTransport = nodemailer.createTransport({
            host: 'smtp.umbler.com',
            port: 587,
            secure: true,
            auth: {
                user: 'patric_kenneth',
                pass: ')QpS8m6,{|'
            }
        });

        const mail = {
            from: "Patric Kenneth <patric_kenneth@projectsdev-reactjs.com>",
            to: data.email,
            subject: `${data.nome} solicitou um orçamento.`,
            text: data.whats,
            html: `<p>${data.description}</p>`
        };

        smtpTransport.sendMail(mail)
            .then(response => {
                smtpTransport.close();
            })
            .catch(error => {
                smtpTransport.close();
            });
    };
};

const nodemail = new Nodemail();

module.exports = nodemail;