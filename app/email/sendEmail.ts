
import nodemailer from 'nodemailer';

// Utils
import { formattedReceiptEmail } from './formattedReceiptEmail';

// Types
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

export const sendEmail = async ( name: string, email: string, message: string ) => {

    const transporter = nodemailer.createTransport( {
        service: 'gmail'
        , auth: {
            user: 'johnsonav1992@gmail.com'
            , pass: 'wdkauqxopmcdyyyq'
        }
    } );

    const mailOptions = {
        from: name
        , sender: name
        , to: `johnsonav1992@gmail.com`
        , replyTo: email
        , subject: `Message received from ${ name } - ${ email }`
        , text: message
        , html: formattedReceiptEmail()
    };

    await transporter.sendMail( mailOptions, ( error: Error | null, info: SMTPTransport.SentMessageInfo ) => {
        if ( error ) {
            console.log( error.message );
        } else {
            console.log( 'Email sent: ' + info.response );
        } 
    } );      
    
};