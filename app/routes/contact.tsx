import React from 'react';
import { useSubmit, useTransition } from '@remix-run/react';
import { redirect } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';
import type { FormikProps } from 'formik';
import { Formik, Form } from 'formik';
import { Button, TextField, Typography, Grid, CircularProgress } from '@mui/material';
import * as Yup from 'yup';


const ContactPage = () => {
    const submit = useSubmit();

    const transition = useTransition();
    
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
        submit( values, { method: 'post' } ); 
    };

    
    return (
        <Formik 
            initialValues={ initialValues }
            validationSchema={ validationSchema }
            onSubmit={ ( values ) => handleSubmit( values ) }
        > 
            { ( 
                { values
                    , handleChange
                    , errors
                    , touched 
                }: FormikProps<ContactInput> 
            ) => (
                <Form>
                    <Grid 
                        container
                        direction='column'
                        alignItems='center'
                        // sx={ { width: '50%' } }
                    >
                        <Grid item>
                            <Typography variant='h2'>
                                Contact Me
                            </Typography>
                        </Grid>
                        <Grid item>
                            <TextField 
                                name='name'
                                label='Name'
                                value={ values.name }
                                onChange={ handleChange }
                                error={ errors.name ? true : false }
                                helperText={ errors.name }
                            />
                        </Grid>
                        <Grid item>
                            <TextField 
                                name='email'
                                label='Email Address'
                                value={ values.email }
                                onChange={ handleChange }
                                error={ errors.email ? true : false }
                                helperText={ errors.email }
                            />
                        </Grid>
                        <Grid item>
                            <TextField 
                                name='message'
                                label='Message'
                                value={ values.message }
                                onChange={ handleChange }
                                error={ errors.message ? true : false }
                                helperText={ errors.message }
                            />
                        </Grid>
                        <Grid item>
                            <Button 
                                color='primary'
                                variant='contained'
                                type='submit'
                            >
                                { transition.state !== 'idle' 
                                    ? <CircularProgress sx={{ color: 'white ' }} />
                                    : 'Send' 
                                }
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            ) }
        </Formik>
    );
};

export const action: ActionFunction = async ( { request } ) => {
    for ( let i = 0; i < 10000000000; i++ ) {
        i ++;
    }
    const formData = await request.formData(); 
    const data = Object.fromEntries( formData ); 
    console.log( data ); 
    
    return redirect( '/' );
};

export default ContactPage;
