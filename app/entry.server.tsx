import type { AppLoadContext, EntryContext } from 'react-router';
import { ServerRouter } from 'react-router';
import { renderToString } from 'react-dom/server';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';

const cache = createCache({ key: 'css' });

const {
    extractCriticalToChunks,
    constructStyleTagsFromChunks
} = createEmotionServer(cache);

export default function handleRequest (
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    routerContext: EntryContext,
    loadContext: AppLoadContext
) {
    let markup = renderToString(
        <CacheProvider value={cache}>
            <ServerRouter context={routerContext} url={request.url} />
        </CacheProvider>
    );

    const chunks = extractCriticalToChunks(markup);
    const styles = constructStyleTagsFromChunks(chunks);

    markup = markup.replace('__STYLES__', styles);

    responseHeaders.set('Content-Type', 'text/html');

    return new Response('<!DOCTYPE html>' + markup, {
        headers: responseHeaders,
        status: responseStatusCode
    });
}
