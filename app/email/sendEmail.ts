
import nodemailer from 'nodemailer';

// Utils
import { formattedReceiptEmail } from './formattedReceiptEmail';

export const sendEmail = async ( name: string, email: string, message: string ) => {

    const transporter = nodemailer.createTransport( {
        service: 'gmail'
        , auth: {
            user: process.env.GMAIL_EMAIL
            , pass: process.env.GMAIL_PASS
        }
    } );

    const mailOptions = {
        from: name
        , sender: name
        , to: process.env.GMAIL_EMAIL
        , replyTo: email
        , subject: `Message received from ${ name } - ${ email }`
        , text: message
    };

    try {
        await transporter.sendMail( mailOptions );
        return { 
            type: 'success'
            , message: 'Email sent successfully! We will get back to you soon!' 
        };
    } catch ( error: any ) {
        console.error( error );
        return { 
            type: 'error'
            , message: 'There was an error sending your message - Please try again.' 
        };
    }
};