import { useState } from "react"
import { SLIDE_DATA } from './SLIDE_DATA'
import {
  MainSlide,
  SlideContainer,
  SlideSection,
  SlideImg,
  TextBox,
  TextBoxTop,
  TextBoxBottom,
  Title,
  SubTutle,
  Button,
  SlideButtonLeft,
  SlideButtonRight,
  Arrow,
  Dim
} from './Style'

const SLIDE_MOVING_WIDTH = 1088;
const SLIDE_LENGTH = SLIDE_DATA.length - 1;

export function Slide() {
  const [scrollState , setScrollState] = useState(0)
  
  const prevButton = () => {
    if (scrollState === -1) return;
    setScrollState(scrollState - 1);
  }
  const nextButton = () => {
    if (scrollState >= SLIDE_LENGTH) return;
    setScrollState(scrollState + 1);
  }
  // const nextButton = setInterval(() => {
  //   if (scrollState >= SLIDE_LENGTH) return;
  //   setScrollState(scrollState + 1);
  // }, 5000)

  return(
    <MainSlide>
      <SlideContainer>
        {SLIDE_DATA.map(list => {
          const {id, title, subtitle, img} = list
          return(
            <SlideSection 
              key={ id }  
              style={{
                transform: `translateX(${-scrollState * SLIDE_MOVING_WIDTH}px)`,
              }}
            >
              { scrollState === id-2 ? null : <Dim /> }
              <SlideImg src={ img } alt="Slide" />
              {scrollState === id-2
                ? 
                  <TextBox>
                    <TextBoxTop>
                      <Title>{ title }</Title>
                      <SubTutle>{ subtitle }</SubTutle>
                    </TextBoxTop>
                    <TextBoxBottom>
                      <Button>{`바로가기 >`}</Button>
                    </TextBoxBottom>
                  </TextBox>
                : null
              }
            </SlideSection>
          )
        })}
      </SlideContainer>
      <SlideButtonLeft onClick={prevButton}><Arrow src="./images/chevron-left-solid.svg" alt="svg"/></SlideButtonLeft>
      <SlideButtonRight onClick={nextButton}><Arrow src="./images/chevron-right-solid.svg" alt="svg"/></SlideButtonRight>
    </MainSlide>
  )
}