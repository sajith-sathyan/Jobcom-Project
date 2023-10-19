import React from 'react'
import Navbar from '../../componet/navBar/nav-bar'
import TutorialQuestion from '../../componet/tutorial-question/TutorialQuestion'

function Tutorial() {
  return (
    <div>
        <Navbar navBarIndex={4}/>
        <TutorialQuestion/>
    </div>
  )
}

export default Tutorial