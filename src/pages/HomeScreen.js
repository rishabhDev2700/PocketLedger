import React from 'react'
import { useContext } from 'react';
import { Button } from '../components/Button'
import { BsGoogle } from 'react-icons/bs';
import { HomeHeroText } from '../components/HomeHeroText';
import { HomeLayout } from '../components/HomeLayout';
import { auth, provider } from '../FirebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../App';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../FirebaseConfig';

export const HomeScreen = () => {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const userContext = useContext(UserContext);
    const signInUser = async () => {
        const result = await signInWithPopup(auth, provider);
        if (result) {
            const user = result.user;
            userContext.setUser(user);
            authContext.set(!authContext.get);
            try {
                const document = doc(db, 'users', user.uid);
                await setDoc(document, {
                    displayName: user.displayName,
                    email: user.email,
                }, { merge: true });

                console.log("Document written with ID: ",document.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
            localStorage.setItem('userStatus', !authContext.get);
            localStorage.setItem("uid",user.uid);
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
