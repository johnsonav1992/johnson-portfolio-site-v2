import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Ubuntu } from 'next/font/google';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageWrapper from './components/PageWrapper/PageWrapper';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import LogRocketScript from './LogRocketScript';

// Contexts
import ContextProvider from './context/context';

// Theme
import ThemeRegistry from './ThemeRegistry';

const ubuntu = Ubuntu( {
    subsets: [ 'latin' ]
    , weight: [ '300', '400', '500', '700' ]
    , display: 'swap'
} );

export const metadata: Metadata = {
    title: 'Alex Johnson - Web Developer'
    , description: 'Full-stack web developer portfolio'
};

export const viewport: Viewport = {
    width: 'device-width'
    , initialScale: 1
};

export default function RootLayout ( {
    children
}: {
  children: ReactNode;
} ) {

    return (
        <html lang='en'>
            <body className={ ubuntu.className }>
                <ThemeRegistry>
                    <ContextProvider>
                        <ScrollToTop />
                        <Header />
                        <PageWrapper>
                            {children}
                        </PageWrapper>
                        <Footer />
                    </ContextProvider>
                </ThemeRegistry>
                <LogRocketScript />
            </body>
        </html>
    );
}
