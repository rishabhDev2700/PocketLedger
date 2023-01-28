import styled from 'styled-components';

export const InputField = styled.input`
border: 1px solid white;
border-radius:0;
background-color:black; 
font-size:1rem;
color:white;
padding:0.5rem;
margin:0.5rem 0;
transition:all 0.3s ease-in-out;
&:focus{
    border:1px solid violet;
    outline:none;
    transform: scale(1.05);
}
`

export const Select = styled.select`
border-radius:0;
border:2px solid white;
height:2.2rem;
font-size:1.2rem;
`

export const InputButton = styled.button`
border:2px solid white;
width:3rem;
height:2.2rem;
color:${props => props.transactionType ? "black" : "white"};
font-weight:bold;
font-size:1.5rem;
transition:all 0.5s ease-out;
background-color:${props => props.transactionType ? "#30fc03" : "#fc0307"};
`
export const AddButton = styled.button`
width:90%;
border:none;
padding:1rem;
font-family: 'Turret Road', cursive;
font-size:2rem;
color:black;
border:2px solid turquoise;
font-weight:bold;
transition:all 0.3s ease-in-out;
&:hover{
    background-color: #00bdaa;
    color:white;
    transform: scale(1.05);
}
@media only screen and (min-width:480px) {
    width:10rem;
    height:5rem;
    margin:0.5rem auto;
}
`
export const InputWrapper = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
`
export const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:absolute;
width:100%;
bottom:0;
padding:0;
margin-bottom:1rem;
`
export const ListWrapper = styled.ul`
width:100%;
display:flex;
height:65vh;
flex-direction: column;
justify-content:center;
overflow:scroll;
`