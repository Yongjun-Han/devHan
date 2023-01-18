import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate, useNavigation } from 'react-router-dom';
import TraveloperCover from "../../Assets/Img/Traveloper.png"
import HushCover from "../../Assets/Img/Hush.png"

function Detail() {

  const navigate = useNavigate();

  const projectArr = ["댕트립","주식추천","대전어때","Flutter","Swift"]
  const imgArr = [TraveloperCover,HushCover,TraveloperCover,HushCover,TraveloperCover]

  const list = projectArr.map((el,id)=>{
      return(
          <div 
          className="items" 
          key={id}
          onClick={(e)=>{
            console.log(e.target)
            navigate(`/project/${projectArr[id]}`)
          }}
          >
            <p className='projectTitle'>{el}</p>  
            <img className='imgT' src={imgArr[id]} alt="cover"/>
          </div>
      )
  })
  return list
}


export default Detail