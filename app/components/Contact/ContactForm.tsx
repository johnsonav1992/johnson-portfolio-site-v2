import React from 'react';

// Libraries
import type { FormikProps } from 'formik';
import { Form } from 'formik';
import { useTransition } from '@remix-run/react';

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
import type { ContactInput } from '~/routes/contact';

// Styles
import theme from '~/theme/theme';

const ContactForm = ( { ...formikProps }: FormikProps<ContactInput> ) => {
    const transition = useTransition();
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

    const {
        values
        , errors
        , handleChange
    } = formikProps;
    
    return (
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
    );
};

export default ContactForm;