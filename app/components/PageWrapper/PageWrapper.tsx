import { ReactNode } from 'react';

interface PageWrapperProps {
    children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <div style={{ paddingTop: '100px' }}>
            {children}
        </div>
    );
};

export default PageWrapper;
