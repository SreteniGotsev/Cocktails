import {createContext,useContext } from "react";
import useLocalStorage from '../hooks/useLocalStorageHook'

export const AuthContext = createContext(); 


export const AuthProvider = ({
    children
}) => {


    const [user, setUser] = useLocalStorage('user',{
        _id: '',
        email: '',
        accessToken:''
      })
    
      const login = (authData) =>{
        setUser(authData);
      }
    
      const logout = () =>{
        setUser({
          _id: '',
          email: '',
          accessToken:''
        } );
      }

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: Boolean(user.email) }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
  const authState = useContext(AuthContext);

  return authState;
}