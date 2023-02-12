import React, { 
    useContext
    , useEffect 
} from 'react';

// Libraries
import { 
    useActionData
    , useSubmit 
} from '@remix-run/react';
import { Formik } from 'formik';
import * as Yup from 'yup';

// MUI
import { 
    IconButton
    , Snackbar 
} from '@mui/material';
import theme from '~/theme/theme';

// Components
import ContactForm from '~/components/Contact/ContactForm';

// Utils
import { sendEmail } from '~/email/sendEmail';

// Contexts
import { siteContext } from '~/context/context';

// Types
import type { ActionFunction } from '@remix-run/node';
import type { FormikProps } from 'formik';
import { Close } from '@mui/icons-material';

export interface ContactInput {
    name: string;
    email: string;
    message: string;
}

const ContactPage = () => {
    const submit = useSubmit();
    const { 
        snackbarOpen
        , setSnackbarOpen
        , alert
        , setAlert
    } = useContext( siteContext );
    const actionData = useActionData();
    
    useEffect( () => {
        if ( actionData ) {
            setSnackbarOpen( true );
            setAlert( actionData );
        }
    }, [ actionData, setAlert, setSnackbarOpen ] );
    
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

    const handleSnackClose = () => {
        setSnackbarOpen( false );
    };
    
    const handleSubmit = ( values: any ) => {
        submit( values, { method: 'post' } ); 
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
            <Snackbar 
                open={ snackbarOpen }
                onClose={ handleSnackClose }
                message={ alert?.message }
                action={ 
                    <IconButton
                        size="small"
                        color="inherit"
                        onClick={ handleSnackClose }
                    >
                        <Close fontSize="small" />
                    </IconButton> 
                }
                autoHideDuration={ 3000 }
                ContentProps={ 
                    { 
                        sx: { 
                            backgroundColor: 
                                alert?.type === 'success' 
                                    ? theme.palette.success.main 
                                    : theme.palette.error.main
                            , color: theme.palette.common.white 
                        } 
                    } 
                }
                anchorOrigin={ {
                    vertical: 'top'
                    , horizontal: 'center'
                } }
            />
        </>
    );
};

export const action: ActionFunction = async ( { request } ) => {
    const formData = await request.formData(); 
    const data = Object.fromEntries( formData ); 

    const result = await sendEmail( 
        String( data.name )
        , String( data.email )
        , String( data.message ) 
    );

    return result; 
};

export default ContactPage;
