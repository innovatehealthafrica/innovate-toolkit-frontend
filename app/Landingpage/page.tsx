import React from 'react'
import Hero from './component/hero';
import Benefit from './component/benefit';
import About from './component/about';
export default function Landingpage() {
  return (
    <div>
        <Hero />
        <Benefit />
        <About />
      {/* Add more components here */}
    </div>
  )
}
