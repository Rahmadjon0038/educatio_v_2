import React from 'react'
import HomeHeader from '../components/home/Headers'
import Direction from '../components/home/direction/Direction'
import StudentsComments from '../components/home/StudentComments/StudentsComments'
import NewsPreview from '../components/home/NewsPreview/NewsPreview'

function Home() {
  return (
    <>
    <HomeHeader/>
    <Direction/>
    <StudentsComments/>
    <NewsPreview/>
    </>
  )
}

export default Home