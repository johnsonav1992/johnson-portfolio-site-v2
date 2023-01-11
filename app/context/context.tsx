import React, { 
    createContext
    , useEffect, useState
} from 'react';
import type { ReactNode } from 'react';
import { useMatches } from '@remix-run/react';

interface Props {
    children?: ReactNode
}

interface ContextInterface {
    activeTab: string| null;
    drawerIsOpen: boolean;
    setActiveTab: ( selectedTab: string | null ) => void;
    setDrawerIsOpen: ( newState: boolean ) => void;
}

export const siteContext = createContext<ContextInterface>( {
    activeTab: null
    , drawerIsOpen: false
    , setActiveTab: () => {}
    , setDrawerIsOpen: () => {}
} );

const ContextProvider = ( { children }: Props ) => {
    const [ , { pathname } ] = useMatches();
    const [ activeTab, setActiveTab ] = useState<string | null>( pathname || null );
    const [ drawerIsOpen, setDrawerIsOpen ] = useState<boolean>( false );

    // For redirects - automatically updates the selected tab with new pathname
    useEffect( () => {
        setActiveTab( pathname );
    },  [ pathname ] );

    return (
        <siteContext.Provider value={ {
            activeTab
            , drawerIsOpen
            , setActiveTab
            , setDrawerIsOpen
        } }>
            {children}
        </siteContext.Provider>
    );
};

export default ContextProvider;