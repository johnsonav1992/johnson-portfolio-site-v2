import React from 'react';
import { useSubmit } from '@remix-run/react';
import { redirect } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';
import type { FormikProps } from 'formik';
import { Formik, Form } from 'formik';


const ContactPage = () => {
    const submit = useSubmit();
    
    interface TestInput {
        input: string;
    }

    const initialValues: TestInput = {
        input: ''
    };
    
    const handleSubmit = ( values: any ) => {
        submit( values, { method: 'post' } ); //submit to Remix backend
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
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

// Backend Remix action function
export const action: ActionFunction = async ( { request } ) => {
    //grab formData object off request
    const formData = await request.formData(); 

    //transform into standard object
    const data = Object.fromEntries( formData ); 

    //data is ready for usage!
    console.log( data ); 

    return redirect( '/' );
};

export default ContactPage;
