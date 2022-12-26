import React, { 
    createContext
    , useState
} from 'react';
import type { ReactNode } from 'react';
import { useMatches } from '@remix-run/react';

interface Props {
    children?: ReactNode
}

interface ContextInterface {
    activeTab: string| null;
    setActiveTab: ( selectedTab: string | null ) => void;
}

export const siteContext = createContext<ContextInterface>( {
    activeTab: null
    , setActiveTab: () => {}
} );

const ContextProvider = ( { children }: Props ) => {
    const [ , { pathname } ] = useMatches();
    const [ activeTab, setActiveTab ] = useState<string | null>( pathname || null );

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