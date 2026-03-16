import { stripNewlines } from '~/utils/sanitize';
import type { ContactData } from '~/actions/contact';

const MAX_NAME_LENGTH = 100;
const MIN_NAME_LENGTH = 2;
const MAX_MESSAGE_LENGTH = 5000;
const MIN_MESSAGE_LENGTH = 20;
export const MIN_SUBMIT_TIME_MS = 3000;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SPAM_PATTERNS = [
    /\b(viagra|cialis|casino|lottery|prize|winner|buy now|free money|click here|make money fast)\b/i
    , /(https?:\/\/[^\s]+.*){3,}/
    // Solicitation / impersonation scam patterns
    , /\bon my behalf\b/i
    , /\b(join|sit in on|attend|represent me in)\s+(meetings?|calls?|interviews?)\b/i
    , /\bwin\s+(the\s+)?(contract|project|client)\b/i
    , /\bcompensate you\s+for\s+your\s+time\b/i
    , /\bsecure\s+(the\s+)?(project|contract|work|client)\b/i
    , /\bhandle\s+(all\s+)?(the\s+)?(post.meeting|technical\s+execution|delivery)\b/i
];

export const extractContactData = ( data: ContactData | FormData ): ContactData => {
    if ( data instanceof FormData ) {
        return {
            name: stripNewlines( data.get( 'name' ) as string )
            , email: stripNewlines( data.get( 'email' ) as string )
            , message: ( data.get( 'message' ) as string )?.trim()
            , honeypot: data.get( 'honeypot' ) as string
            , loadedAt: Number( data.get( 'loadedAt' ) ) || undefined
        };
    }
    return {
        ...data
        , name: stripNewlines( data.name )
        , email: stripNewlines( data.email )
    };
};

export const validateContactData = ( { name, email, message, honeypot, loadedAt }: ContactData ): string | null => {
    if ( honeypot ) return 'Submission rejected.';

    if ( loadedAt && Date.now() - loadedAt < MIN_SUBMIT_TIME_MS ) {
        return 'Please take a moment to fill out the form.';
    }

    if ( !name || !email || !message ) return 'All fields are required.';
    if ( !EMAIL_REGEX.test( email ) ) return 'Invalid email format.';
    if ( name.length < MIN_NAME_LENGTH ) return `Name must be at least ${ MIN_NAME_LENGTH } characters.`;
    if ( name.length > MAX_NAME_LENGTH ) return `Name is too long (max ${ MAX_NAME_LENGTH } characters).`;
    if ( message.length < MIN_MESSAGE_LENGTH ) return `Please enter a more detailed message (at least ${ MIN_MESSAGE_LENGTH } characters).`;
    if ( message.length > MAX_MESSAGE_LENGTH ) return `Message is too long (max ${ MAX_MESSAGE_LENGTH } characters).`;

    for ( const pattern of SPAM_PATTERNS ) {
        if ( pattern.test( message ) || pattern.test( name ) ) {
            return 'Your message appears to contain spam. Please revise and try again.';
        }
    }

    const letters = message.replace( /[^a-zA-Z]/g, '' );
    if ( letters.length >= 10 ) {
        const upperRatio = ( message.match( /[A-Z]/g ) ?? [] ).length / letters.length;
        if ( upperRatio > 0.6 ) return 'Please avoid excessive capitalization in your message.';
    }

    if ( /(.)\1{5,}/.test( message ) ) return 'Your message does not appear to be valid. Please try again.';

    return null;
};
