'use client';

import { useEffect, useState } from 'react';

// Libraries
import { Formik } from 'formik';
import * as Yup from 'yup';

// Components
import ContactForm from '~/components/Contact/ContactForm';
import SnackAlert from '~/components/SnackAlert/SnackAlert';

// Contexts
import { useSiteContext } from '~/context/context';

// Types
import type { FormikProps } from 'formik';

export interface ContactInput {
    name: string;
    email: string;
    message: string;
}

export default function Page () {
    const { 
        setSnackbarOpen
        , setAlert
    } = useSiteContext();
    
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
    
    const handleSubmit = async ( values: ContactInput ) => {
        try {
            const response = await fetch( '/api/contact', {
                method: 'POST'
                , headers: {
                    'Content-Type': 'application/json'
                }
                , body: JSON.stringify( values )
            } );

            const result = await response.json();
            setAlert( result );
            setSnackbarOpen( true );
        } catch ( error ) {
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
