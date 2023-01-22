import React from 'react'
import { Button } from '../components/Button'
import { BsGoogle } from 'react-icons/bs';
import { HomeHeading } from '../components/HomeHeading';
import { HomeHeroText } from '../components/HomeHeroText';
import { HomeLayout } from '../components/HomeLayout';

export const HomeScreen = () => {
    const signInUser = ()=>{
        console.log("Signing in...");
    }
    return (
        <>
            <HomeHeading>PocketLedger</HomeHeading>
            <HomeLayout>
                <HomeHeroText>
                    A Webapp To track your expenses.<br />
                    <hr/>
                    Login with your Google Account<br/>
                    Give it a try!!
                </HomeHeroText>
                <Button onClick={signInUser}><BsGoogle /><span>Login</span></Button>
            </HomeLayout>
        </>
    )
}
