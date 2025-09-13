import type { MetaFunction } from 'react-router';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

// MUI
import { 
    ThemeProvider
    , CssBaseline
} from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import theme from './theme/theme';

// Components
import Header from './components/Header/Header';

// Contexts 
import ContextProvider from './context/context';
import Footer from './components/Footer/Footer';

// Create cache outside of component to avoid recreation
const cache = createCache({ key: 'css' });

export const meta: MetaFunction = () => [
    { charset: 'utf-8' },
    { title: 'Alex Johnson - Web Developer' },
    { viewport: 'width=device-width,initial-scale=1' }
];


export default function App () {

    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
                <style
                    dangerouslySetInnerHTML={ {
                        __html: '__STYLES__'
                    } } 
                />
                <link 
                    href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" 
                    rel="stylesheet"
                />
            </head>
            <body>
                <CacheProvider value={cache}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <ContextProvider>
                            <Header />
                            <Outlet />
                            <Footer /> 
                        </ContextProvider>
                    </ThemeProvider>
                </CacheProvider>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
