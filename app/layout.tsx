import type { Metadata } from 'next';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LogRocketScript from './LogRocketScript';

// Contexts 
import ContextProvider from './context/context';

// Theme
import ThemeRegistry from './ThemeRegistry';

export const metadata: Metadata = {
    title: 'Alex Johnson - Web Developer'
    , description: 'Full-stack web developer portfolio'
    , viewport: 'width=device-width, initial-scale=1'
};

export default function RootLayout ( {
    children
}: {
  children: React.ReactNode;
} ) {

    return (
        <html lang="en">
            <head>
                <link 
                    href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" 
                    rel="stylesheet"
                />
            </head>
            <body>
                <ThemeRegistry>
                    <ContextProvider>
                        <Header />
                        {children}
                        <Footer /> 
                    </ContextProvider>
                </ThemeRegistry>
                <LogRocketScript />
            </body>
        </html>
    );
}
