import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '~/email/sendEmail';

export async function POST ( request: NextRequest ) {
    try {
        const data = await request.json();
        
        const result = await sendEmail( 
            String( data.name )
            , String( data.email )
            , String( data.message ) 
        );

        return NextResponse.json( result );
    } catch ( error ) {
        return NextResponse.json(
            { 
                type: 'error'
                , message: 'There was an error sending your message - Please try again.' 
            }
            , { status: 500 }
        );
    }
}
