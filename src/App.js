import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Skills from './pages/skills/Skills'
import Projects from './pages/projects/Projects'
import Connect from './pages/connect/Connect'
import Testpage from './Testpage'
import About from './pages/about/About'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/tools' element={<Skills />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/connect' element={<Connect />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/test' element={<Testpage />}></Route>

    </Routes>
  )
}

export default App