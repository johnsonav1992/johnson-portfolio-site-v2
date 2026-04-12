'use client';

import { useState } from 'react';

// Libraries
import { Formik } from 'formik';
import * as Yup from 'yup';

// Components
import ContactForm from '~/components/Contact/ContactForm';
import SnackAlert from '~/components/SnackAlert/SnackAlert';

// Contexts
import { useSiteContext } from '~/context/context';

// Server Actions
import { sendContactEmail } from '~/actions/contact';

// Types
import type { FormikProps } from 'formik';

export interface ContactInput {
    name: string;
    email: string;
    message: string;
    honeypot: string;
    loadedAt: number;
}

export default function Page () {
    const { 
        setSnackbarOpen
        , setAlert
    } = useSiteContext();
    
    const [ initialValues ] = useState<ContactInput>( () => ( {
        name: ''
        , email: ''
        , message: ''
        , honeypot: ''
        , loadedAt: Date.now()
    } ) );
    
    const validationSchema = Yup.object( {
        name: Yup.string()
            .min( 2, 'Name must be at least 2 characters.' )
            .required( 'You must enter a name.' )
        , email:
            Yup.string()
                .email( 'Must be a valid email address.' )
                .required( 'You must enter an email address.' )
        , message: Yup.string()
            .min( 20, 'Please enter a more detailed message (at least 20 characters).' )
            .required( 'You must enter a message.' )
    } );
    
    const handleSubmit = async ( values: ContactInput ) => {
        try {
            const result = await sendContactEmail( values );

            setAlert( result );
            setSnackbarOpen( true );
        } catch {
            setAlert( {
                type: 'error'
                , message: 'There was an error sending your message - Please try again.'
            } );
            
            setSnackbarOpen( true );
        }
    };

    
    return (
        <>
            <Formik 
                initialValues={ initialValues }
                validationSchema={ validationSchema }
                onSubmit={ ( 
                    values
                    , { resetForm } 
                ) => {
                    handleSubmit( values );
                    resetForm(); 
                } }
            > 
                { ( formikProps: FormikProps<ContactInput> ) => (
                    <ContactForm { ...formikProps }/>
                ) }
            </Formik>
            <SnackAlert />
        </>
    );
}
