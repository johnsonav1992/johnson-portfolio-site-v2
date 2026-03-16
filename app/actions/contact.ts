'use server';

import { headers } from 'next/headers';
import { sendEmail } from '~/email/sendEmail';
import { extractContactData, validateContactData } from '~/utils/contactValidation';

export interface ContactData {
    name: string;
    email: string;
    message: string;
    honeypot?: string;
    loadedAt?: number;
}

type ContactResult = {
    type: 'success' | 'error';
    message: string;
};

const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

export async function sendContactEmail ( data: ContactData ): Promise<ContactResult>;
export async function sendContactEmail ( data: FormData ): Promise<ContactResult>;

export async function sendContactEmail ( data: ContactData | FormData ): Promise<ContactResult> {
    try {
        const headersList = await headers();
        const ip =
            headersList.get( 'x-forwarded-for' )?.split( ',' )[ 0 ]?.trim()
            ?? headersList.get( 'x-real-ip' )
            ?? 'unknown';

        const lastSubmit = rateLimitMap.get( ip );

        if ( lastSubmit && Date.now() - lastSubmit < RATE_LIMIT_WINDOW_MS ) {
            return {
                type: 'error' as const
                , message: 'Please wait a moment before sending another message.'
            };
        }

        const contactData = extractContactData( data );
        const validationError = validateContactData( contactData );

        if ( validationError ) {
            return { type: 'error' as const, message: validationError };
        }

        rateLimitMap.set( ip, Date.now() );

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
