import './Css/App.css'
import React, {useState, useEffect} from 'react';
import { Navigate, useNavigate, useNavigation } from 'react-router-dom';
import Slide from './Components/Home/Slide';

function App() {

  const navigate = useNavigate();
  return (
    
    <div className="BG">
      {/* 메인영역 */}
      <div className='main'>

        {/* 타이틀 문구 */}
        <div className='titleContainer'>
          <p>“ I want to be a</p>
          <p className='title'> flexible developer </p>
          <p>”</p>
        </div>

        {/* 페이지 슬라이더 */}
        <Slide/>
        <div className='waterMarkContainer'>
          <p>Copyrightⓒ2022</p>
          <p className='waterMark'> devHAN </p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
