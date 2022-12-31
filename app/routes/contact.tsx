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
        console.log( values );
        submit( values, { method: 'post' } );
    };

    const initialValues: object = {
        test: ''
    };
    
    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={( values ) => handleSubmit( values )}
        > 
            {( { values, handleChange }: any ) => (
                <Form>
                    <div>Contact</div>
                    <input type="text" name='test'value={values.test} onChange={handleChange} />
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export const action: ActionFunction = async ( { request } ) => {
    const result = await request.formData();
    console.log( Object.fromEntries( result ) );
    return redirect( '/' );
};

export default ContactPage;
