import React from 'react';
import { useSubmit, useActionData } from '@remix-run/react';
import { json, redirect } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';
import type { FormikProps } from 'formik';
import { Formik, Form } from 'formik';
import { Button, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';


const ContactPage = () => {
    const submit = useSubmit();

    interface ContactInput {
        name: string;
        email: string;
        message: string;
    }

    const initialValues: ContactInput = {
        name: ''
        , email: ''
        , message: ''
    };

    const validationSchema = Yup.object( {
        name: Yup.string().required( 'You must enter a name' )
        , email: 
            Yup.string()
                .email( 'Must be a valid email address.' )
                .required( 'You must enter an email address.' )
        , message: Yup.string().required( 'You must enter a message.' )
    } );
    
    const handleSubmit = ( values: any ) => {
        submit( values, { method: 'post' } ); //submit to Remix backend
    };

    
    return (
        <Formik 
            initialValues={ initialValues }
            validationSchema={ validationSchema }
            onSubmit={ ( values ) => handleSubmit( values ) }
        > 
            {( { values, handleChange, errors }: FormikProps<ContactInput> ) => (
                <Form>
                    <Typography variant='h2'>
                        Contact Me
                    </Typography>
                    <TextField 
                        name='name'
                        label='Name'
                        value={ values.name }
                        onChange={ handleChange }
                        error={ errors.name ? true : false }
                        helperText={ errors.name }
                    />
                    <TextField 
                        name='email'
                        label='Email Address'
                        value={ values.email }
                        onChange={ handleChange }
                        error={ errors.email ? true : false }
                        helperText={ errors.email }
                    />
                    <TextField 
                        name='message'
                        label='Message'
                        value={ values.message }
                        onChange={ handleChange }
                        error={ errors.message ? true : false }
                        helperText={ errors.message }
                    />
                    <Button 
                        color='primary'
                        variant='contained'
                        type='submit'
                    >
                        Send
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

// Backend Remix action function
export const action: ActionFunction = async ( { request } ) => {
    const formData = await request.formData(); 
    const data = Object.fromEntries( formData ); 

    console.log( data ); 

    return data;
};

export default ContactPage;
