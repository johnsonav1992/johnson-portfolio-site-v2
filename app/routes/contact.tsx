import React from 'react';
import { useSubmit } from '@remix-run/react';
import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { SubmitOptions } from '@remix-run/react';
import type { FormikProps } from 'formik';
import { Formik, Form } from 'formik';


const ContactPage = () => {
    const submit = useSubmit();

    const testData = {
        firstName: 'Alex'
        , lastName: 'Johnson'
        , isCool: true
    };
    
    const handleSubmit = ( values: any ) => {
        submit( values, { method: 'post' } ); //submit to Remix backend
    };

    const initialValues: object = {
        name: ''
    };
    
    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={( values ) => handleSubmit( values )}
        > 
            {( { values, handleChange }: any ) => (
                <Form>
                    <div>Contact</div>
                    <input type="text" name='name' value={values.name} onChange={handleChange} />
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export const action: ActionFunction = async ( { request } ) => {
    const formData = await request.formData();
    const data = Object.fromEntries( formData );
    console.log( data );
    return redirect( '/' );
};

export default ContactPage;
