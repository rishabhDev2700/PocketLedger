import React from 'react'
import styled from 'styled-components'

export const HomeHeroText = ({children}) => {
  return (
    <HeroText>{children}</HeroText>
  )
}

const HeroText = styled.h2`
font-weight: lighter;
font-size:2rem;
padding:2rem;
@media (min-width:480px){
    font-size:3rem;
}
`