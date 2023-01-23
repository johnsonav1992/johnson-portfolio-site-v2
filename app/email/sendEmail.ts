
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
        , to: `johnsonav1992@gmail.com`
        , replyTo: email
        , subject: `Message received from ${ name } - ${ email }`
        , text: message
        // , html: '<img alt="GitHub" height="32" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style="display: block; height: auto; border: 0;" title="GitHub" width="32"/>'
    };

    try {
        await transporter.sendMail( mailOptions );
    } catch ( error: any ) {
        return error;
    }
};