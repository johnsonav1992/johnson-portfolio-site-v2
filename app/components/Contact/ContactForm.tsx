'use client';

import React, { useState } from 'react';

// Libraries
import type { FormikProps } from 'formik';
import { Form } from 'formik';

// MUI
import {
    Button
    , TextField
    , Typography
    , CircularProgress
    , useMediaQuery
    , Box
} from '@mui/material';
import { Grid } from '@mui/material';

// Types
import type { ContactInput } from '~/(modules)/contact/page';

// Theme
import theme from '~/theme/theme';

const ContactForm = ( { ...formikProps }: FormikProps<ContactInput> ) => {
    const [ isSubmitting, setIsSubmitting ] = useState( false );
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

    const {
        values
        , errors
        , handleChange
        , handleSubmit
    } = formikProps;

    const inputWidth = isMdScreen ? '90%' : '40%';

    const onSubmit = async ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        setIsSubmitting( true );
        await handleSubmit();
        setIsSubmitting( false );
    };
    
    return (
        <Form onSubmit={ onSubmit }>
            <Box
                sx={ {
                    display: 'flex'
                    , flexDirection: 'column'
                    , alignItems: 'center'
                    , gap: 3
                    , pt: '1.5rem'
                    , minHeight: '100vh'
                } }
            >
                <Typography variant='h3'>
                    Contact Me
                </Typography>

                <Typography
                    variant={ isMdScreen ? 'body1' : 'h6' }
                    textAlign='center'
                    sx={ {
                        m: isMdScreen ? '0 1.5rem 0' : ''
                        , width: inputWidth
                    } }
                >
                    Please fill out the form below and I will
                    get back to you as soon as I can. Thank you!
                </Typography>

                <TextField
                    name='name'
                    label='Name'
                    value={ values.name }
                    onChange={ handleChange }
                    error={ !!errors.name }
                    helperText={ errors.name }
                    sx={ { width: inputWidth } }
                />

                <TextField
                    name='email'
                    label='Email Address'
                    value={ values.email }
                    onChange={ handleChange }
                    error={ !!errors.email }
                    helperText={ errors.email }
                    sx={ { width: inputWidth } }
                />

                <TextField
                    multiline
                    name='message'
                    label='Message'
                    value={ values.message }
                    onChange={ handleChange }
                    error={ !!errors.message }
                    helperText={ errors.message }
                    sx={ { width: inputWidth } }
                    rows={ 5 }
                />

                <Button
                    color='primary'
                    variant='contained'
                    type='submit'
                    sx={ {
                        width: isMdScreen ? '90%' : '30%'
                        , mb: '1rem'
                    } }
                >
                    { isSubmitting
                        ? <CircularProgress
                            sx={ { color: ( theme ) => theme.palette.common.white } }
                            size='1.5rem'
                        />
                        : 'Send'
                    }
                </Button>
            </Box>
        </Form>
    );
};

export default ContactForm;