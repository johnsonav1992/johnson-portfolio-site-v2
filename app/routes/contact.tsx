import React from 'react';

// Libraries
import { 
    useSubmit
    , useTransition
} from '@remix-run/react';
import { redirect } from '@remix-run/node';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// MUI
import { 
    Button
    , TextField
    , Typography
    , Grid
    , CircularProgress
    , useMediaQuery
} from '@mui/material';

// Types
import type { ActionFunction } from '@remix-run/node';
import type { FormikProps } from 'formik';

// Styles
import theme from '~/theme/theme';

const ContactPage = () => {
    const submit = useSubmit();
    const transition = useTransition();
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );
    
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
                        spacing={ 3 }
                        sx={ { paddingTop: '1.5rem', minHeight: '100vh' } }
                    >
                        <Grid 
                            container
                            item 
                            justifyContent='center'
                        >
                            <Typography variant={ isMdScreen ? 'h4' : 'h3'}>
                                Contact Me
                            </Typography>
                        </Grid>
                        <Grid 
                            container
                            item 
                            justifyContent='center' 
                            textAlign='center'
                        >
                            <Typography 
                                variant={ isMdScreen ? 'body1' : 'h6' } 
                                sx={ { 
                                    margin: isMdScreen ? '0 1.5rem 0' : ''
                                    , width: isMdScreen ? '90%' : '50%' 
                                } }
                            >
                                Please fill out the form below and I will get back to you as soon as I can. Thank you!
                            </Typography>
                        </Grid>
                        <Grid 
                            container
                            item 
                            justifyContent='center'
                        >
                            <TextField 
                                name='name'
                                label='Name'
                                value={ values.name }
                                onChange={ handleChange }
                                error={ errors.name ? true : false }
                                helperText={ errors.name }
                                sx={ { width: isMdScreen ? '90%' : '50%' } }
                            />
                        </Grid>
                        <Grid 
                            container
                            item 
                            justifyContent='center'
                        >
                            <TextField 
                                name='email'
                                label='Email Address'
                                value={ values.email }
                                onChange={ handleChange }
                                error={ errors.email ? true : false }
                                helperText={ errors.email }
                                sx={ { width: isMdScreen ? '90%' : '50%' } }
                            />
                        </Grid>
                        <Grid container item justifyContent='center'>
                            <TextField 
                                multiline
                                name='message'
                                label='Message'
                                value={ values.message }
                                onChange={ handleChange }
                                error={ errors.message ? true : false }
                                helperText={ errors.message }
                                sx={ { width: isMdScreen ? '90%' : '50%' } }
                                rows={5}
                            />
                        </Grid>
                        <Grid container item justifyContent='center'>
                            <Button 
                                color='primary'
                                variant='contained'
                                type='submit'
                                sx={ { 
                                    width: isMdScreen ? '90%' : '30%'
                                    , marginBottom: '1rem' 
                                } }
                            >
                                { transition.state !== 'idle' 
                                    ? <CircularProgress 
                                        sx={ { color: theme.palette.common.white } }
                                        size='1.5rem'
                                    />
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
