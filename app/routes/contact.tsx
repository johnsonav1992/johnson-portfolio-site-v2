import React from 'react';
import { useSubmit, useTransition } from '@remix-run/react';
import { redirect } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';
import type { FormikProps } from 'formik';
import { Formik, Form } from 'formik';


const ContactPage = () => {
    const submit = useSubmit();

    const transition = useTransition();

    console.log( transition.state === 'submitting' ? 'submitting' : '' );
    
    interface TestInput {
        input: string;
    }

    const initialValues: TestInput = {
        input: ''
    };
    
    const handleSubmit = ( values: any ) => {
        submit( values, { method: 'post' } ); 
    };

    
    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={( values ) => handleSubmit( values )}
        > 
            {( { values, handleChange }: FormikProps<TestInput> ) => (
                <Form>
                    <h1>
                        Test Form
                    </h1>
                    <input 
                        type="text" 
                        name='input' 
                        value={values.input} 
                        onChange={handleChange}
                    />
                    <button type='submit'>
                        {transition.state !== 'idle' ? 'Sending' : 'Submit' }
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export const action: ActionFunction = async ( { request } ) => {
    setTimeout( async () => {
        const formData = await request.formData(); 
        const data = Object.fromEntries( formData ); 
    
        console.log( data ); 
    
        return redirect( '/' );
    }, 2000 );
};

export default ContactPage;
