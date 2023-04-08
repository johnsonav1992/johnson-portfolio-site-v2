import type { EntryContext } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';
import { renderToString } from 'react-dom/server';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';

const cache = createCache( { 
    key: 'css'
    , speedy: true
} );

const {
    extractCriticalToChunks
    , constructStyleTagsFromChunks
} = createEmotionServer( cache );

export default function handleRequest (
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext
) {

    let markup = renderToString(
        <CacheProvider value={cache}>
            <RemixServer context={remixContext} url={request.url} />
        </CacheProvider>
    );

    const chunks = extractCriticalToChunks( markup );
    const styles = constructStyleTagsFromChunks( chunks );

    markup = markup.replace( '__STYLES__', styles );

    responseHeaders.set( 'Content-Type', 'text/html' );

    ( async () => {
        await new Promise( ( resolve ) => setTimeout( resolve, 1000 ) );
    } )();

    return new Response( '<!DOCTYPE html>' + markup, {
        headers: responseHeaders
        , status: responseStatusCode
    } );
}
