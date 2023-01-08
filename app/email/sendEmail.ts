
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
        from: 'ajohnson@veryableops.com'
        , to: `johnsonav1992@gmail.com`
        , subject: 'Hello'
        , text: 'Hello, World!'
    };

    await transporter.sendMail( mailOptions, function ( error: any, info: any ){
        if ( error ) {
            console.log( error );
        } else {
            console.log( 'Email sent: ' + info.response );
        }
    } );      
    
};