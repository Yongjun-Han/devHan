import React from 'react'
import {Route, Routes} from 'react-router-dom'
import App from './App'
import Project from './Components/Projects/Project'
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/resume' element={<Resume/>}/>
    </Routes>
  )
}

export default Router