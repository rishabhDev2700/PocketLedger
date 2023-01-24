import { AuthContext, UserContext } from '../App'
import { auth } from '../FirebaseConfig'
import { signOut } from 'firebase/auth'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react';
export const Logout = async () => {
    const authContext = useContext(AuthContext);
    const userContext = useContext(UserContext);
    await signOut(auth);
    userContext.setUser(null);
    localStorage.clear();
    authContext.set(false);
    Navigate('/');
}
