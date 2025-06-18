import { useState } from 'react'

import './output.css'
import { LandingPage } from './components/LandingPage'
import  NavBar  from './components/NavBar'
import EncryptText from './components/EncryptText'
import DecryptText from './components/DecryptText'

function App() {
  const pathname=window.location.pathname;
  if(pathname==="/encrypt")return <EncryptText />
  if(pathname==="/decrypt")return <DecryptText />

  return (
    <>
    <NavBar />
    <LandingPage />
    
  
    </>
  )
}

export default App
