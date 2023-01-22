import { AuthContext } from '../App'
import { auth } from '../FirebaseConfig'
import { signOut } from 'firebase/auth'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react';
export const Logout = async () => {
    const context = useContext(AuthContext);
    console.log('status before logging out:' + context.get);
    await signOut(auth);
    localStorage.clear();
    context.set(false);
    console.log('status after logging out:' + context.get);
    Navigate('/');
}
