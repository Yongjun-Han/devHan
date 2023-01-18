import React from 'react'
import {Route, Routes} from 'react-router-dom'
import App from './App'
//페이지용 
import Project from './Components/Projects/Project'
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact'

// 프로젝트 작품
import Traveloper from './Components/Projects/Pro/Traveloper'
import Swift from './Components/Projects/Pro/Swift'
import Flutter from './Components/Projects/Pro/Flutter'
import StockService from './Components/Projects/Pro/StockService'
import Daejeon from './Components/Projects/Pro/Daejeon'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/resume' element={<Resume/>}/>

      <Route path='/project/댕트립' element={<Traveloper/>}/>
      <Route path='/project/주식추천' element={<StockService/>}/>
      <Route path='/project/대전어때' element={<Daejeon/>}/>
      <Route path='/project/Flutter' element={<Flutter/>}/>
      <Route path='/project/Swift' element={<Swift/>}/>
    </Routes>
  )
}

export default Router