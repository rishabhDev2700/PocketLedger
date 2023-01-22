import { AuthContext } from '../App'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './../FirebaseConfig';
import styled from 'styled-components';

export function LogoutTile({children}) {
    const context = useContext(AuthContext);
    const navigate = useNavigate();
    const logoutUser = async() => {
        await signOut(auth);
        localStorage.setItem('userStatus',!context.get);
        context.set(!context.get);
        navigate('/');
    }
    return (
        <Logout onClick={logoutUser}>{children}</Logout>
    )
}

const Logout = styled.button`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
height:9rem;
width:9rem;
font-size:1.5rem;
font-family: 'Turret Road';
margin:0.5rem;
padding:0.5rem;
color:black;
transition:all 0.3s ease-in-out;
border:none;
&:hover{
    transform: scale(1.03);
}
`
