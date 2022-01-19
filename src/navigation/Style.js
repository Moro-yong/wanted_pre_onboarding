import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  border-bottom: 1px solid #e8e8e8;
  width: 100vw;
  z-index: 10;
`
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1060px;

  @media ${props => props.theme.laptop} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    padding: 0 40px;
  }
  
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    padding: 0 20px;
  }
`
export const NavLight = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;

  @media ${props => props.theme.laptop} {
    width: 100vw;
  }
`
export const HamburgerIcon = styled.img`
  width: 17px;
  height: 14px;
  margin-right: 15px;
`
export const Title = styled.span`
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 4px;
`
export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  min-width: 600px;
  font-size: 13px; 
  color: #333333;
  padding: 15px 0;

  @media ${props => props.theme.laptop} {
    min-width: 440px;
  }

  @media ${props => props.theme.tablet} {
    min-width: 112px;

  }
`
export const Home = styled.li`
  display: none;
  
  @media ${props => props.theme.tablet} {
    display: flex;
    padding: 0;
  }
`
export const Price = styled.li`
  @media ${props => props.theme.tablet} {
    display: none;
  }
`
export const Resume = styled.li`
  @media ${props => props.theme.tablet} {
    display: none;
  }
`
export const Comunity = styled.li`
  @media ${props => props.theme.tablet} {
    display: none;
  }
`
export const Pre = styled.li`
  @media ${props => props.theme.tablet} {
    display: none;
  }
`
export const Ai = styled.li`
  @media ${props => props.theme.tablet} {
    display: none;
  }
`
export const NavRight = styled.span`
  display: flex;
  align-items: center;
  padding: 15px 0;
`
export const Functions = styled.ul`
  display: flex;
  align-items: center;
`
export const Line = styled.div`
  height: 10px;
  border-left: 1px solid #e1e2e3;
  margin: 0 10px;

  @media ${props => props.theme.laptop} {
    display: none;
  }
`
export const Search = styled.img`
  width: 16px;
  margin-right: 10px;
`
export const Alarm = styled.img`
  width: 16px;
  margin-right: 10px;
`
export const MyImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50px;
  
  @media ${props => props.theme.laptop} {
    display: none;
  }
`
export const DotTag = styled.li`
  display: none;

  @media ${props => props.theme.laptop} {
    display: flex;
  }
`
export const Dot = styled.img`
  width: 18px;
  height: 18px;
  border-radius: 50px;
`
export const Button = styled.button`
  width: 82px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 50px;
  font-size: 13px;
  color: #666666;

  @media ${props => props.theme.laptop} {
    display: none;
  }
`