import type { MetaFunction } from '@remix-run/node';
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from '@remix-run/react';
import Header from './components/Header/Header';

import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';

export const meta: MetaFunction = () => ( {
    charset: 'utf-8'
    , title: 'Alex Johnson - Web Developer'
    , viewport: 'width=device-width,initial-scale=1'
} );

export default function App () {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
                { typeof document === 'undefined'
                    ? '__STYLES__'
                    : null }
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"/>
            </head>
            <body>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <Header />
                    <Outlet />
                </ThemeProvider>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
