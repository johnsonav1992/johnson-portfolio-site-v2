
const nodemailer = require( 'nodemailer' );

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
        , to: `johnsonav1992@gmail.com`
        , subject: `Message received from ${ name } - ${ email }`
        , text: message
    };

    await transporter.sendMail( mailOptions, ( error: any, info: any ) => {
        if ( error ) {
            console.log( error );
        } else {
            console.log( 'Email sent: ' + info.response );
        }
    } );      
    
};