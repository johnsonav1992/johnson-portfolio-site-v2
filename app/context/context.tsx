'use client';

import {
    createContext
    , useContext
    , useState
} from 'react';
import type { ReactNode } from 'react';

// Libraries 
import { usePathname } from 'next/navigation';

interface Props {
    children?: ReactNode
}

export interface Alert {
    message: string;
    type: string;
}

interface ContextInterface {
    activeTab: string;
    drawerIsOpen: boolean;
    setDrawerIsOpen: ( newState: boolean ) => void;
    snackbarOpen: boolean;
    setSnackbarOpen: ( newState: boolean ) => void;
    alert: Alert | null;
    setAlert: ( newAlert: Alert ) => void;
}

export const SiteContext = createContext<ContextInterface>( {
    activeTab: '/'
    , drawerIsOpen: false
    , setDrawerIsOpen: () => {}
    , snackbarOpen: false
    , setSnackbarOpen: () => {}
    , alert: null
    , setAlert: () => {}
} );

const ContextProvider = ( { children }: Props ) => {
    const pathname = usePathname();
    const [ drawerIsOpen, setDrawerIsOpen ] = useState<boolean>( false );
    const [ snackbarOpen, setSnackbarOpen ] = useState<boolean>( false );
    const [ alert, setAlert ] = useState<Alert | null>( null );

    const activeTab = (() => {
        if ( pathname.startsWith( '/work/' ) ) {
            return '/work';
        } else {
            return pathname;
        }
    })();

    return (
        <SiteContext.Provider value={ {
            activeTab
            , drawerIsOpen
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