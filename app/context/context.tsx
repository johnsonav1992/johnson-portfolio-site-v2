import type { ReactNode } from 'react';
import React, { createContext, useState } from 'react';

interface Props {
    children?: ReactNode
}

interface ContextInterface {
    activeTab: number;
    setActiveTab: ( selectedTab: number ) => void;
}

export const siteContext = createContext<ContextInterface>( {
    activeTab: 0
    , setActiveTab: () => {}
} );

const ContextProvider = ( { children }: Props ) => {
    const [ activeTab, setActiveTab ] = useState<number>( 0 );
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