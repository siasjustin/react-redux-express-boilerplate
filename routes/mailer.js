const express = require('express');
const router = express.Router();
const { createTransport } = require('nodemailer');

let transporter = createTransport({
    host: 'hwsmtp.qiye.163.com',
    port: 994,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'us@ofo.com',
        pass: 'ofo135135'
    }
});



/////// Get Started Page ///////

// forward mail to grace@ofo and autorespond to client
router.post('/mailer/get-started', function(req, res, next) {
    let { menu, message } = req.body,
        clientEmail = req.body.email;

    let emailToClientPlaintext = `Hi, Thanks for signing up to get updates from ofo. You'll be the first to know when ofo comes to your neighborhood. Cheers, The Team at ofo`,
        emailToClientHtml = `Hi,<br /><br />Thanks for signing up to get updates from ofo. You'll be the first to know when ofo comes to your neighborhood.<br /><br />Cheers,<br />The Team at ofo`

    /*let emailToAdminPlaintext = `Email from ${clientName} <${clientEmail}> - Subject: ${subjectType} - Message: ${message}`,
        emailToAdminHtml = `<table><tbody><tr>Email from ${clientName} <${clientEmail}></tr><tr>Subject: ${subjectType}</tr><tr>Message:<br />${message}</tr></tbody></table>`
    */

    let emailToClient = {
        from: `ofo <us@ofo.com>`,
        to: `"${clientEmail}" <${clientEmail}>`,
        bcc: `"Ofo" <info@ofo.com>`,
        subject: 'Thanks for contacting ofo.',
        text: emailToClientPlaintext,
        html: emailToClientHtml
    }

    /*let emailToAdmin = {
        from: `ofo <ofo@catchdev15.com>`,
        to: `"DevTest" <bobell.tech@gmail.com>`,
        subject: 'You have a new Contact Form Submission',
        text: emailToAdminPlaintext,
        html: emailToAdminHtml
    }*/

    console.log('email to client: ', emailToClient);

    return transporter.sendMail(emailToClient, (error, info) => {
        // if (error) return res.status(500).json({ message: 'Error sending email to client.' })
        if (error) return console.log('error: ', error);
        console.log('message sent: ', info)
        // console.log('Message %s sent: %s', info.messageId, info.response);
        return res.json('Successfully sent email to client');
    });
});


function(error, success) {
        if (error) console.log(error);
        else console.log('Server is ready to take our messages');
    });*/

    return transporter.sendMail(emailToClient, (error, info) => {
        // if (error) return res.status(500).json({ message: 'Error sending email to client.' })
        if (error) return console.log('error: ', error);
        console.log('message sent: ', info)
        // console.log('Message %s sent: %s', info.messageId, info.response);
        return res.json('Successfully sent email to client');
    });

    /*return transporter.sendMail(emailToAdmin, (error, info) => {
        // if (error) return res.status(500).json({ message: 'Error sending email to client.' })
        if (error) return console.log('error: ', error);
        console.log('message sent: ', info)
        // console.log('Message %s sent: %s', info.messageId, info.response);
        return res.json('Successfully sent email to admin');
    });*/

    // console.log(req.body);
    // res.json(req.body); // testing redux thunk

    let targetOfoEmail = menu == 'Customer Support' ? 'cs@ofo.com' : menu == 'Business Inquiry' ? 'partner@ofocom' :
                         menu == 'Media Inquiry' ? 'media@ofo.com' :
                         menu == 'Careers' ? 'careers@ofo.com' :
                         menu == 'General Information' ? 'info@ofo.com' : 'info@ofo.com';

                         
});

module.exports = router;

