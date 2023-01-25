import styled from 'styled-components'

export const HomeLayout = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
flex-wrap: wrap;
height: 70vh;
align-items: center;
@media (min-width:480px){
    flex-direction: row;
}
`