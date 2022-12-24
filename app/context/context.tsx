import type { ReactNode } from 'react';
import React, { createContext, useState } from 'react';

interface Props {
    children?: ReactNode
}

interface ContextInterface {
    activeTab: number | null;
    setActiveTab: ( selectedTab: number | null ) => void;
}

export const siteContext = createContext<ContextInterface>( {
    activeTab: null
    , setActiveTab: () => {}
} );

const ContextProvider = ( { children }: Props ) => {
    const [ activeTab, setActiveTab ] = useState<number | null>( null );
    return (
        <siteContext.Provider value={{
            activeTab
            , setActiveTab
        }}>
            {children}
        </siteContext.Provider>
    );
};

export default ContextProvider;