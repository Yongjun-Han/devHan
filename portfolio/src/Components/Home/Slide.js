import React, {useState, useEffect} from 'react';
import { Navigate, useNavigate, useNavigation } from 'react-router-dom';
import '../../Css/Slide.css'
import styled from 'styled-components'

function Slide() {

  const navigate = useNavigate();
  const [project, setProject] = useState('#1e1e1e')
  const [contact, setContact] = useState('#1e1e1e')
  const [resume, setResume] = useState('#1e1e1e')

  return (
    <div className='slideContainer'>
      <div>
        <p
          className='project'
          onMouseEnter={(e)=>{
            if(e.target.innerText === "Projects"){
              setProject('#d43')
            }
            console.log(e.target.innerText)
          }}
          onMouseOut={()=>{
            setProject('#1e1e1e')
          }}
          onClick={(e)=>{
            console.log(e)
            navigate('/project')
          }}
          >Projects</p>
          <ProjectHoverBar color={project}/>
      </div>
      
      <div className='contactContainer'>
        <p
        className='contact'
        onMouseEnter={(e)=>{
          console.log(e)
          setContact('#d43')
        }}
        onMouseOut={()=>{
          setContact('#1e1e1e')
        }}
        onClick={(e)=>{
          console.log(e)
          navigate('/contact')
        }}
        >Contact</p>
        <ContactHoverBar color={contact}/>
      </div>
      
      <div>
        <p
        className='resume'
        onMouseEnter={(e)=>{
          setResume('#d43')
          console.log(e)
        }}
        onMouseOut={()=>{
          setResume('#1e1e1e')
        }}
        onClick={(e)=>{
          console.log(e)
          navigate('/resume')
        }}
        >Resume</p>
        <ResumeHoverBar color={resume}/>
      </div>
    </div>
  )
}
  const ProjectHoverBar = styled.div`
    width : inherit;
    height: 2px;
    margin-top: 8px;
    background-color:${props => props.color}
  `
  const ContactHoverBar = styled.div`
    width : 10px;
    height: 2px;
    margin-top: 8px;
    padding: 0 32px;
    background-color:${props => props.color}
  `
  const ResumeHoverBar = styled.div`
    width : inherit;
    height: 2px;
    margin-top: 8px;
    background-color:${props => props.color}
  `


export default Slide