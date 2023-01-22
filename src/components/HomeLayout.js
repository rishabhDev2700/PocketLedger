import React from 'react'
import styled from 'styled-components'

export const HomeLayout = ({children}) => {
  return (
    <Layout>{children}</Layout>
  )
}

const Layout = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 70vh;
align-items: center;
@media (min-width:480px){
    flex-direction: row;
}
`