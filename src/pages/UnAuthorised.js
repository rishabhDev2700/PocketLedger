import React from 'react';
import styled from 'styled-components';
import {GiStopSign} from 'react-icons/gi';
import {Link} from 'react-router-dom';
export const UnAuthorised = () => {
    return (
        <Div>
            <PageLink to='/' replace>Back to Home</PageLink>
            <GiStopSignIcon/>
            <Text>UnAuthorised</Text>
        </Div>
    )
}

const Div = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
background-color:#111;
color:white;
height: 100vh;
@media (min-width: 480px){
    font-size:2.5rem;
}
`
const Text = styled.div`
text-align:center;
padding-top: 2rem;
`
const GiStopSignIcon = styled(GiStopSign)`
font-size:8rem;
color:#a00;
`
const PageLink  = styled(Link)`
color:white;
margin-bottom:2rem;
transition: all ease-in-out 0.3s; 
&:hover{
    color:red;
    
}
`