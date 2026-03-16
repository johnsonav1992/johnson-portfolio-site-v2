export const escapeHtml = ( str: string ): string =>
    str
        .replace( /&/g, '&amp;' )
        .replace( /</g, '&lt;' )
        .replace( />/g, '&gt;' )
        .replace( /"/g, '&quot;' )
        .replace( /'/g, '&#039;' );

export const stripNewlines = ( str: string ): string => str.replace( /[\r\n]/g, ' ' ).trim();
