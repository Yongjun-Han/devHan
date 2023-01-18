import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate, useNavigation } from 'react-router-dom';
import styled from 'styled-components'

import {IoArrowBackOutline} from 'react-icons/io5' 
import {RiHome6Line} from 'react-icons/ri'

function Traveloper() {

  const navigate = useNavigate();

  return (
    <BG> 
      <Header>
        <BackContainer 
          onClick={()=>{
            navigate('/project')
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
      <div></div>
    </BG>
  )
}

const BG  = styled.div`
  width: 100vw;
  height : 100vh;
  background-color : #1e1e1e;
  display : flex;
  flex-direction : column;
`

const Header = styled.div`
  width : 100%;
  height : 100px;
  border : 1px solid red;
  display : flex;
  justify-content : space-between;
  padding : 0 140px;
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
export default Traveloper