import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Tile = styled(Link)`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background-color:white;
color:black;
font-size:1.5rem;
width: 8rem;
height: 8rem;
margin: 0.5rem;
padding: 0.5rem;
transition: all 0.3s ease-in-out;
&:hover{
    transform: scale(1.03);
}
`
