'use client';

import Script from 'next/script';

export default function LogRocketScript () {
    return (
        <Script
            src="https://cdn.lr-in-prod.com/LogRocket.min.js"
            strategy="afterInteractive"
            onLoad={() => {
                // @ts-ignore
                if ( typeof window !== 'undefined' && window.LogRocket ) {
                    // @ts-ignore
                    window.LogRocket.init( '8ho0cs/portfolio-site' );
                }
            }}
        />
    );
}
