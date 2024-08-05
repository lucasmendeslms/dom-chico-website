'use client'

import React from 'react';
import { SessionProvider } from 'next-auth/react';


interface SessionContainerProps {
    children: React.ReactNode;
}

export const SessionContext = ({ children }: SessionContainerProps) => {

    return (
        <SessionProvider
            refetchInterval={30 * 60}
            refetchOnWindowFocus={true}
        >
            {children}
        </SessionProvider>
    )
}