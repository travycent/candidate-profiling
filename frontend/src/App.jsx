import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from "./components/Navbar";
import Main from "./components/MainContent";
import MainContent from './components/MainContent';

function App() {
 

  return (
    <div className="row">
      <div className='col-12 '>
        <Navbar/>
        <MainContent />
        
      </div>
      
    </div>
  )
}

export default App
