import React,{useRef, useEffect, useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate, useNavigation } from 'react-router-dom';
import styled from 'styled-components'
import './Traveloper.css'

import {IoArrowBackOutline} from 'react-icons/io5' 
import {RiHome6Line} from 'react-icons/ri'

function Traveloper() {
  
  const navigate = useNavigate();
  const [position, setPosition] = useState(0);
  
  useEffect(() => {
    function onScroll() {
      setPosition(window.scrollY);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);  

  return (
    <BG> 
      {/* 헤더 */}
      <Header>
        <BackContainer 
          onClick={()=>{
            navigate('/project')
          }}>
          <IoArrowBackOutline
            color='white'
            size={24}/>
        </BackContainer>
        <Title>댕트립</Title>
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
      {/* 메인영역 */}
      <MainArea
        onScroll={()=>{
          console.log(position)
        }}
      >
        <div className='cover'>
          <div></div>
          <div></div>
        </div>

        <div className='overview'></div>
      </MainArea>
    </BG>
  )
}

const BG  = styled.div`
  width: 100vw;
  height : 100vh;
  display : flex;
  flex-direction : column;
`

const Header = styled.div`
  width : 100%;
  height : 80px;
  display : flex;
  justify-content : space-between;
  padding : 0 140px;
  background-color : #1e1e1e;
  align-items :center;
`
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
const Title = styled.div`
  font-family : Pretendard;
  font-size : 1.2rem;
  color : white;
  text-align : center;
`
const MainArea = styled.div`
  height : 100%;
  width : 100%;
  overflow: scroll;
`

const Cover = styled.div`
  width: 100%;
  height : 1000px;
  border : 3px solid salmon;
`

export default Traveloper