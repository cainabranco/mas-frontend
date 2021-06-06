import { ReactNode } from 'react';
import {AuthProvider} from './Auth';

interface AuthProviderProps {
    children: ReactNode
}

export function AppProvider({children}:AuthProviderProps) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}