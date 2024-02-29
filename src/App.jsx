import { useState } from 'react'
import Navbar from './component/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './page/Home'
import History from './page/History'
import About from './page/About'


function App() {

  return (
    <main id='app' className='min-h-screen flex flex-col'>
      <Navbar></Navbar>
      <div className="flex flex-col flex-grow pt-[80px]">
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/history' element={<History />} />
            <Route exact path='/about' element={<About />} />
        </Routes>
      </div>
    </main>
    )
}

export default App
