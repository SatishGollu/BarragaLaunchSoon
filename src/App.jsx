import React from 'react'
import BallOnlyMorphing from './components/BallOnlyMorphing'
import TypewriterText from './components/TypewriterText'
import barragaLogo from './assets/logos/onlyBarraga.svg'
import dragonflyLogo from './assets/logos/dragonfly.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <BallOnlyMorphing />
      
      {/* Top brand logo */}
      <div className="brand-logo">
        <img 
          src={dragonflyLogo} 
          alt="Barraga Dragonfly" 
          className="dragonfly-logo"
        />
      </div>

      {/* Center main logo */}
      <div className="logo-overlay">
        <img 
          src={barragaLogo} 
          alt="Barraga" 
          className="barraga-logo"
        />
      </div>

      {/* Subtitle text with typewriter effect */}
      <TypewriterText />
    </div>
  )
}

export default App