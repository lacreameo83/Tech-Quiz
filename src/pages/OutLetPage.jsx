import React from 'react'
import HomeDisplay from '../components/outlet/HomeDisplay'
import ExploreQuizeHomePage from '../components/outlet/ExploreQuizeHomePage'
import Advert from '../components/outlet/Advert'
import StepsToQuiz from '../components/outlet/stepsToQuiz'
import GetInTouch from '../components/outlet/GetInTouch'
import Footer from '../components/outlet/Footer'

function OutLetPage() {
  return (
    <div>
      <HomeDisplay />
      <ExploreQuizeHomePage />
      <Advert />
      <StepsToQuiz />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default OutLetPage
