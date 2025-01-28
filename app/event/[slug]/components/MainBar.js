
import React from 'react'
import ImageSlider from './ImageSlider'
import About from './About'
import Features from './Features'
import Lineup from './Lineup'
import Media from './Media'
import LocationMap from './LocationMap'

export default function MainBar() {
  return (
    <main>
      <ImageSlider/>
      <About/>
      <Features/>
      <Lineup/>
      <Media/>
      <LocationMap/>
    </main>
  )
}
