import { RemixBrowser } from '@remix-run/react';
import { StrictMode } from 'react';
import { hydrate } from 'react-dom';

// Using the old-skool React v17 hydrate() until hydrateRoot() is fixed
hydrate ( 
    <StrictMode>
        <RemixBrowser />
    </StrictMode>
    , document 
); 
