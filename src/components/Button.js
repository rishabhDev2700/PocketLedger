import styled from 'styled-components'


export const Button = styled.button`
display: flex;
justify-content: space-evenly;
align-items: center;
font-size:1.5rem;
border:none ;
background-color:white;
color:black;
width: 8rem;
height: 5rem;
margin: 1rem 2rem;
transition: all 0.2s ease-in-out;
&:hover{
    transform: scale(1.05);
    box-shadow: 4px 4px 9px black;
}
`