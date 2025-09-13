import { HydratedRouter } from 'react-router/dom';
import { StrictMode } from 'react';
import { hydrate } from 'react-dom';
import LogRocket from 'logrocket';

LogRocket.init( '8ho0cs/portfolio-site' );

// Using the old-skool React v17 hydrate() until hydrateRoot() is fixed
hydrate ( 
    <StrictMode>
        <HydratedRouter />
    </StrictMode>
    , document 
); 
