import React, { useContext } from 'react';

// Libraries
import type { FormikProps } from 'formik';
import { Form } from 'formik';
import { useActionData, useTransition } from '@remix-run/react';

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


// Contexts
import { siteContext } from '~/context/context';

// Styles
import theme from '~/theme/theme';

const ContactForm = ( { ...formikProps }: FormikProps<ContactInput> ) => {
    const { state } = useTransition();
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

    const { setSnackbarOpen } = useContext( siteContext );

    const {
        values
        , errors
        , handleChange
    } = formikProps;

    const inputWidth = isMdScreen ? '90%' : '40%';
    
    return (
        <Form>
            <Grid 
                container
                direction='column'
                alignItems='center'
                spacing={ 3 }
                sx={ { 
                    paddingTop: '1.5rem'
                    , minHeight: '100vh' 
                } }
            >
                <Grid 
                    container
                    item 
                    justifyContent='center'
                >
                    <Typography variant='h3'>
                        Contact Me
                    </Typography>
                </Grid>
                <Grid 
                    item 
                    container
                    direction='column'
                    alignItems='center' 
                    textAlign='center'
                >
                    <Typography 
                        variant={ isMdScreen ? 'body1' : 'h6' } 
                        sx={ { 
                            margin: isMdScreen ? '0 1.5rem 0' : ''
                            , width: inputWidth 
                        } }
                    >
                        Please fill out the form below and I will 
                        get back to you as soon as I can. Thank you!
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
                        sx={ { width: inputWidth } }
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
                        sx={ { width: inputWidth } }
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
                        sx={ { width: inputWidth } }
                        rows={5}
                    />
                </Grid>
                <Grid 
                    item 
                    container 
                    justifyContent='center'
                >
                    <Button 
                        color='primary'
                        variant='contained'
                        type='submit'
                        sx={ { 
                            width: isMdScreen ? '90%' : '30%'
                            , marginBottom: '1rem' 
                        } }
                    >
                        { state !== 'idle' 
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