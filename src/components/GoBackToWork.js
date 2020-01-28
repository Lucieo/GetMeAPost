import React from 'react';
import {StyledMainTitle, StyledSecondTitle} from 'components/StyledTexts';
import Zombie from 'media/zombie.svg'

const GoBackToWork = ()=>{
  return(
    <>
      <StyledMainTitle>How many posts do you need!?!</StyledMainTitle>
      <StyledSecondTitle>You social zombie... Seriously I'm sure you can find better things to do!</StyledSecondTitle>
      <img src={Zombie} style={{width:100}} alt="zombie"/>
    </>
  )
}

export default GoBackToWork
