'use server';

import { sendEmail } from '~/email/sendEmail';

export interface ContactData {
    name: string;
    email: string;
    message: string;
}

type ContactResult = {
    type: 'success' | 'error';
    message: string;
};

const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const extractContactData = ( data: ContactData | FormData ): ContactData => {
    if ( data instanceof FormData ) {
        return {
            name: data.get( 'name' ) as string
            , email: data.get( 'email' ) as string
            , message: data.get( 'message' ) as string
        };
    }
    return data;
};

const validateContactData = ( { name, email, message }: ContactData ): string | null => {
    if ( !name || !email || !message ) return 'All fields are required.';
    if ( !EMAIL_REGEX.test( email ) ) return 'Invalid email format.';
    if ( name.length > MAX_NAME_LENGTH ) return `Name is too long (max ${ MAX_NAME_LENGTH } characters).`;
    if ( message.length > MAX_MESSAGE_LENGTH ) return `Message is too long (max ${ MAX_MESSAGE_LENGTH } characters).`;
    return null;
};

export async function sendContactEmail ( data: ContactData ): Promise<ContactResult>;
export async function sendContactEmail ( data: FormData ): Promise<ContactResult>;

export async function sendContactEmail ( data: ContactData | FormData ): Promise<ContactResult> {
    try {
        const contactData = extractContactData( data );
        const validationError = validateContactData( contactData );

        if ( validationError ) {
            return { type: 'error' as const, message: validationError };
        }

        return await sendEmail(
            contactData.name
            , contactData.email
            , contactData.message
        );
    } catch ( error ) {
        console.error( 'Contact form error:', error );
        
        return {
            type: 'error' as const
            , message: 'There was an error sending your message - Please try again.'
        };
    }
}
