import React from 'react';

// Libraries
import { useActionData, useSubmit } from '@remix-run/react';
import { redirect } from '@remix-run/node';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Components
import ContactForm from '~/components/Contact/ContactForm';

// Utils
import { sendEmail } from '~/email/sendEmail';

// Types
import type { ActionFunction } from '@remix-run/node';
import type { FormikProps } from 'formik';

export interface ContactInput {
    name: string;
    email: string;
    message: string;
}

const ContactPage = () => {
    const submit = useSubmit();
    const data = useActionData();

    console.log( 'action data', data );
    
    const initialValues: ContactInput = {
        name: ''
        , email: ''
        , message: ''
    };

    const validationSchema = Yup.object( {
        name: Yup.string().required( 'You must enter a name.' )
        , email: 
            Yup.string()
                .email( 'Must be a valid email address.' )
                .required( 'You must enter an email address.' )
        , message: Yup.string().required( 'You must enter a message.' )
    } );
    
    const handleSubmit = ( values: any ) => {
        submit( values, { method: 'post' } ); 
    };

    
    return (
        <Formik 
            initialValues={ initialValues }
            validationSchema={ validationSchema }
            onSubmit={ ( values ) => handleSubmit( values ) }
        > 
            { ( formikProps: FormikProps<ContactInput> ) => (
                <ContactForm { ...formikProps }/>
            ) }
        </Formik>
    );
};

export const action: ActionFunction = async ( { request } ) => {
    const formData = await request.formData(); 
    const data = Object.fromEntries( formData ); 
    console.table( data ); 

    const result = await sendEmail( 
        String( data.name )
        , String( data.email )
        , String( data.message ) 
    );
    
    console.log( result );
    
    return redirect( '/' );
};

export default ContactPage;
