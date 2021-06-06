import {createContext, useCallback, useState, useContext, ReactNode} from 'react';
import api from '../services/api';

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthState {
    token: string;
    user: User;
}

interface Credentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    signIn(credentials: Credentials): Promise<void>;
    signOut: () => void
}

interface AuthProviderProps {
    children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children}:AuthProviderProps) {

    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('MAS:token');
        const user = localStorage.getItem('MAS:user');

        if(token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            return {token, user: JSON.parse(user)}
        }

        return {} as AuthState;
    })

    const signIn = useCallback( async ({email, password}) => {

        const response = await api.post('/auth', {
            email,
            password
        })

        const {token, user} = response.data;

        localStorage.setItem('MAS:token', token);
        localStorage.setItem('MAS:user', JSON.stringify(user));

        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({token, user});

    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('MAS:token');
        localStorage.removeItem('MAS:user');

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider
            value={{user: data.user, signIn, signOut}}
>
    {children}
    </AuthContext.Provider>
)
}

export function useAuth(): AuthContextData {

    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}