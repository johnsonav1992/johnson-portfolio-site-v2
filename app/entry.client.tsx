import { RemixBrowser } from '@remix-run/react';
import ReactDOM from 'react-dom';
import { startTransition } from 'react';
import { StrictMode } from 'react';

function hydrate () {
    startTransition( () => {
        ReactDOM.hydrate(
            <StrictMode>
                <RemixBrowser />
            </StrictMode>,
            document
        );
    } );
}

if ( window.requestIdleCallback ) {
    window.requestIdleCallback( hydrate );
} else {
    // Safari doesn't support requestIdleCallback
    // https://caniuse.com/requestidlecallback
    window.setTimeout( hydrate, 1 );
}







