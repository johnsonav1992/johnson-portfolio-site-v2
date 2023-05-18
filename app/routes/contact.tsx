import { useEffect } from 'react';

// Libraries
import { 
    useActionData
    , useSubmit 
} from '@remix-run/react';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Components
import ContactForm from '~/components/Contact/ContactForm';
import SnackAlert from '~/components/SnackAlert/SnackAlert';

// Utils
import { sendEmail } from '~/email/sendEmail';

// Contexts
import { useSiteContext } from '~/context/context';

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
    const { 
        setSnackbarOpen
        , setAlert
    } = useSiteContext();
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
            <SnackAlert />
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
