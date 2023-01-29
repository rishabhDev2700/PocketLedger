import styled from 'styled-components';
import {AiFillDelete} from 'react-icons/ai'
import React from 'react'

export const Transaction = (props) => {
  return (
    <Container key={props.key_id}>
        <Wrapper>
        <Date>{props.date}</Date>
        <Details>
            <Amount>₹ {props.amount}</Amount>
            <For>{props.for}</For>
        </Details>
        </Wrapper>
        <Button onClick={props.remove}><AiFillDelete/></Button>
    </Container>
  )
}



const Container = styled.li`
display:flex;
justify-content:space-around;
border:1px solid white;
margin:8px 2px;
padding:0.4rem;
background-color:white;
color:black;
width:20rem;
border-radius:0.2rem;
@media (min-width:768px){
    width:30rem;
}
`;
const Date = styled.div`
font-size:1.2rem;
font-weight:700;
font-family:sans-serif;
`;
const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
`
const Details = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
margin:0.5rem;
font-family:sans-serif;
font-weight:200;
color:#333;
`
const Amount = styled.div`
font-weight:800;
font-size:1.2rem;
`
const For = styled.div``
const Button = styled.button`
border:2px solid white;
color:black;
background-color:white;
padding:0.5rem;
font-size:2rem;
transition:all 0.2s ease-in-out;
&:hover{
    color:red;

}
`