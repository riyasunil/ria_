import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Skills from './pages/skills/Skills'
import Projects from './pages/projects/Projects'
import Connect from './pages/connect/Connect'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/tools' element={<Skills />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/connect' element={<Connect />}></Route>
    </Routes>
  )
}

export default App