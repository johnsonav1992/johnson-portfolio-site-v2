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
            </head>
            <body>
                <Header />
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
