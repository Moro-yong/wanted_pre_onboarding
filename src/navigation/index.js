import React from 'react'
import {
  Nav,
  NavContainer,
  NavLight,
  HamburgerIcon,
  Title,
  MenuList,
  NavRight,
  Functions,
  Line,
  Search,
  Alarm,
  MyImg,
  Button,
  Dot,
  DotTag,
  Home,
  Price,
  Resume,
  Comunity,
  Pre,
  Ai
} from './Style'

export function Navigation() {
  return(
    <Nav>
      <NavContainer>
        <NavLight>
          <HamburgerIcon src="./images/icon-menu.png" alt="img" />
          <Title>wanted</Title>
        </NavLight>
        <MenuList>
          <Home>홈</Home>
          <li>채용</li>
          <li>이벤트</li>
          <Price>직군별 연봉</Price>
          <Resume>이력서</Resume>
          <Comunity>커뮤니티</Comunity>
          <Pre>프리랜서</Pre>
          <Ai>AI 합격예측</Ai>
        </MenuList>
        <NavRight>
          <Functions>
            <li><Search src="./images/search-solid.svg" alt="img"/></li>
            <li><Alarm src="./images/bell-regular.svg" alt="img"/></li>
            <li><MyImg src="./images/my.png" alt="img"/></li>
            <DotTag><Dot src="./images/ellipsis-h-solid.svg" alt="img"/></DotTag>
          </Functions>
          <Line />
          <Button>기업 서비스</Button>
        </NavRight>
      </NavContainer>
    </Nav>
  )
} 