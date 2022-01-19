import styled from "styled-components";

export const MainSlide = styled.div`
  width: 100vw;
  padding-top: 30px;
  margin-top: 60px;

  @media ${props => props.theme.laptop} {
    margin-top: 90px;
  }
`
export const SlideContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const SlideSection = styled.div`
  position: relative;
  min-width: 1060px;
  margin: 0 14px;
  transition: transform 0.35s;

  @media ${props => props.theme.desktopSldie} {
    min-width: 1040px;
    height: 282px;
  }
`
export const Dim = styled.div`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  background: black;
  opacity: 50%;

  @media ${props => props.theme.desktopSldie} {
    min-height: 182px;
  }
`
export const SlideImg = styled.img`
  border-radius: 4px;
  
  @media ${props => props.theme.desktopSldie} {
    height: 182px;
  }
`
export const TextBox = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 330px;
  height: 146px;
  background: white;
  border-radius: 4px;

  @media ${props => props.theme.desktopSldie} {
    left: 50%;
    top: 80%;
    transform: translate(-50%, -50%);
    background: none;
    height: 80px;
  }
`
export const TextBoxTop = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
  border-bottom: 1px solid #e8e8e8;

  @media ${props => props.theme.desktopSldie} {
    border: none;
    padding: 0;
  }
`
export const TextBoxBottom = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  height: 51px;
  
  @media ${props => props.theme.desktopSldie} {
    display: flex;
    justify-content: center;
    padding: 0;
    height: 16px;
  }
`
export const Title = styled.p`
  display: flex;
  align-items: flex-end;
  font-size: 20px;
  font-weight: 500;
  height: 44px;

  @media ${props => props.theme.desktopSldie} {
    display: flex;
    justify-content: center;
    height: 30px;
    font-size: 18px;
  }
`
export const SubTutle = styled.p`
  font-size: 14px;
  height: 30px;
  margin-top: 10px;

  @media ${props => props.theme.desktopSldie} {
    display: flex;
    justify-content: center;
    font-size: 13px;
    color: #666666;
  }
`
export const Button = styled.button`
  font-size: 14px;
  font-weight: 500;
  color: #3366FF;
`
export const SlideButtonLeft = styled.button`
  position: relative;
  top: -180px;
  left: calc(50vw - 610px);
  width: 30px;
  height: 60px;
  border-radius: 50px;
  background: white;
  opacity: 50%;
  padding-left: 8px;

  @media ${props => props.theme.desktopSldie} {
    display: none;
  }
`
export const SlideButtonRight = styled.button`
  position: relative;
  top: -180px;
  left: calc(50vw + 550px);
  width: 30px;
  height: 60px;
  border-radius: 50px;
  background: white;
  opacity: 50%;
  padding-left: 8px;

  @media ${props => props.theme.desktopSldie} {
    display: none;
  }
`
export const Arrow = styled.img`
  width: 10px;
`