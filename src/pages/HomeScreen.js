import React from 'react'
import { useContext } from 'react';
import { Button } from '../components/Button'
import { BsGoogle } from 'react-icons/bs';
import { HomeHeroText } from '../components/HomeHeroText';
import { HomeLayout } from '../components/HomeLayout';
import { auth, provider } from '../FirebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../App';
import { useNavigate } from 'react-router-dom';
export const HomeScreen = () => {
    const navigate = useNavigate();
    const context = useContext(AuthContext);
    const signInUser = async () => {
        const result = await signInWithPopup(auth, provider);
        if (result) {
            localStorage.setItem('userStatus', !context.get);
            context.set(!context.get);
            console.log('after signin setting status' + context.get);
            navigate('/menu');
        }
    }
    return (
        <HomeLayout>
            <HomeHeroText>
                A Webapp To track your expenses.<br />
                <hr />
                Login with your Google Account<br />
                Give it a try!!
            </HomeHeroText>
            <Button onClick={signInUser}><BsGoogle /><span>Login</span></Button>
        </HomeLayout>)
}
