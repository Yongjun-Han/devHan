import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate, useNavigation } from 'react-router-dom';
import styled from 'styled-components'

import Detail from './Detail';
import '../../Css/Projects.css'
import {IoArrowBackOutline} from 'react-icons/io5' 
import {RiHome6Line} from 'react-icons/ri'

function Project() {
  const navigate = useNavigate();
  // const [detail, setDetail] = useState(20)

  // const projectArr = ["ReactNative","Web","Swift","Flutter","Web"]

  // useEffect(()=>{
  //   const data = async()=>{
  //     const getData = axios.get("http://localhost:8282")
  //     console.log(getData)
  //   }
  //   data();
  // },[])
  
  return (
    <div className='PBG'>
      <Header>
        <BackContainer 
          onClick={()=>{
            navigate('/')
          }}>
          <IoArrowBackOutline
            color='white'
            size={24}/>
        </BackContainer>

        <HomeContainer>
          <RiHome6Line
          size='24'
          color='white'
          onClick={()=>{
            navigate('/')
          }}
          />
        </HomeContainer> 

      </Header>
      {/* 헤더 */}
      {/* <div className='projectHeader'>
        <div className='iconContainer'> */}
          {/* 뒤로가기 */}
          {/* <BackContainer 
            onClick={()=>{
              navigate('/')
            }}>
            <IoArrowBackOutline
              color='white'
              size={24}/>
          </BackContainer> */}

          {/* 홈으로 */}
          {/* <HomeContainer>
            <RiHome6Line
            size='24'
            color='white'
            onClick={()=>{
              navigate('/')
            }}
            />
          </HomeContainer>
        </div>
      </div> */}
      <div className='Title'>Project</div>
      
      {/* 메인컨테이너 */}
      <div className='mainContainer'>
        <Detail/>
      </div>

      {/* 푸터 */}
      <div className='projectFooter'>
        <div className='waterMarkProject'>
          <p>Copyrightⓒ2022</p>
          <p className='waterMark'> devHAN </p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

const BackContainer = styled.div`
  width : 32px;
  height : 32px;
  display : flex;
  justify-content : flex-start;
  align-items : center;
`
const HomeContainer = styled.div`
  width : 32px;
  height : 32px;
  display : flex;
  justify-content : flex-end;
  align-items : center;
`
const ProjectBox = styled.div`
  width : ${props => props.width}%;
  height : 100%;
  background-color : #ddd;
`
const Header = styled.div`
  width : 100%;
  height : 120px;
  display : flex;
  justify-content : space-between;
  padding : 0 140px;
  align-items :center;
`

export default Project