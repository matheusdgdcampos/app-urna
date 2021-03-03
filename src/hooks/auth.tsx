import { createContext, useContext, FC, useState, useCallback } from 'react';

import { UserProps } from '~/models';
import api from '~/services/api';

interface AuthContextProps {
  user: UserProps | null;
  signIn(codigo: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(() => {
    const verifiUserIsStorage = JSON.parse(
      String(localStorage.getItem('@urna')),
    ) as UserProps;

    if (verifiUserIsStorage) {
      return verifiUserIsStorage;
    }

    return null;
  });

  const signIn = useCallback(async (codigo: string) => {
    const response = await api.post<UserProps>('/auth', { codigo });

    localStorage.setItem('@urna', JSON.stringify(response.data));

    setUser(response.data);
  }, []);

  const signOut = useCallback(async () => {
    localStorage.removeItem('@urna');
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { ...context } = useContext(AuthContext);

  return context;
};
