import React, {useState, useEffect} from 'react';
import { Navigate, useNavigate, useNavigation } from 'react-router-dom';
import '../../Css/Slide.css'
function Slide() {

  
  const navigate = useNavigate();
  const [hover, setHover] = useState("")


  return (
    <div className='slideContainer'>
      <p
        className='project'
        onMouseEnter={(e)=>{console.log(e)}}
        onClick={(e)=>{
          console.log(e)
          navigate('/project')
        }}
        >Projects</p>

        <p
        className='contact'
        onMouseEnter={(e)=>{console.log(e)}}
        onClick={(e)=>{
          console.log(e)
          navigate('/contact')
        }}
        >Contact</p>

        <p
        className='resume'
        onMouseEnter={(e)=>{console.log(e)}}
        onClick={(e)=>{
          console.log(e)
          navigate('/resume')
        }}
        >Resume</p>
    </div>
  )
}

export default Slide