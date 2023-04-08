import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';

function hydrate () {
    startTransition( () => {
        hydrateRoot(
            document,
            <StrictMode>
                <RemixBrowser />
            </StrictMode>
        );
    } );
}


if ( window.requestIdleCallback ) {
    // window.requestIdleCallback( hydrate );
    // window.setTimeout( hydrate, 1 );
    document.addEventListener( 'loaded', hydrate );
} else {
    // Safari doesn't support requestIdleCallback
    // https://caniuse.com/requestidlecallback
}
