
import nodemailer from 'nodemailer';

// Utils
import { formattedReceiptEmail } from './formattedReceiptEmail';

// Types
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

export const sendEmail = async ( name: string, email: string, message: string ) => {
    let error;

    const transporter = nodemailer.createTransport( {
        service: 'gmail'
        , auth: {
            user: process.env.GMAIL_EMAI
            , pass: process.env.GMAIL_PASS
        }
    } );

    const mailOptions = {
        from: name
        , sender: name
        , to: `johnsonav1992@gmail.com`
        , replyTo: email
        , subject: `Message received from ${ name } - ${ email }`
        , text: message
        , html: '<img alt="GitHub" height="32" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style="display: block; height: auto; border: 0;" title="GitHub" width="32"/>'
    };

    await transporter.sendMail( mailOptions, ( e: Error | null, info: SMTPTransport.SentMessageInfo ) => {
        if ( e ) {
            error = e;
        } else {
            console.log( 'Email sent: ' + info.response );
        } 
    } );

    console.log( error );

    return error;
};