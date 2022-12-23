import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import theme from './theme/theme';

import '@fontsource/ubuntu';

function hydrate () {
    startTransition( () => {
        hydrateRoot(
            document,
            <StrictMode>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <RemixBrowser />
                </ThemeProvider>
            </StrictMode>
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
