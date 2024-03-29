import React, { 
    createContext
    , useContext
    , useState
} from 'react';
import type { ReactNode } from 'react';

// Libraries 
import { useMatches } from '@remix-run/react';

interface Props {
    children?: ReactNode
}

export interface Alert {
    message: string;
    type: string;
}

interface ContextInterface {
    activeTab: string| null;
    drawerIsOpen: boolean;
    setActiveTab: ( selectedTab: string | null ) => void;
    setDrawerIsOpen: ( newState: boolean ) => void;
    snackbarOpen: boolean;
    setSnackbarOpen: ( newState: boolean ) => void;
    alert: Alert | null;
    setAlert: ( newAlert: Alert ) => void;
}

export const SiteContext = createContext<ContextInterface>( {
    activeTab: null
    , drawerIsOpen: false
    , setActiveTab: () => {}
    , setDrawerIsOpen: () => {}
    , snackbarOpen: false
    , setSnackbarOpen: () => {}
    , alert: null
    , setAlert: () => {}
} );

const ContextProvider = ( { children }: Props ) => {
    const [ , { pathname } ] = useMatches();
    const [ activeTab, setActiveTab ] = useState<string | null>( pathname );
    const [ drawerIsOpen, setDrawerIsOpen ] = useState<boolean>( false );
    const [ snackbarOpen, setSnackbarOpen ] = useState<boolean>( false );
    const [ alert, setAlert ] = useState<Alert | null>( null );

    return (
        <SiteContext.Provider value={ {
            activeTab
            , drawerIsOpen
            , setActiveTab
            , setDrawerIsOpen
            , snackbarOpen
            , setSnackbarOpen
            , alert
            , setAlert
        } }>
            {children}
        </SiteContext.Provider>
    );
};

export default ContextProvider;

export const useSiteContext = () => {
    return useContext( SiteContext );
};