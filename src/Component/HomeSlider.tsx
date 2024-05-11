import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { ChevronDoubleLeft, ChevronDoubleRight } from "react-bootstrap-icons";

import "../SliderImages/1.jpeg"
import "../SliderImages/2.jpg"
import "../SliderImages/3.jpg"
import "../SliderImages/4.png"


const imageList =[
    {
        id: 1,
        src: require("../SliderImages/1.jpeg"),
        alt: "Image 1",
        title: "title of the image one"
    },
    {
        id: 2,
        src: require("../SliderImages/2.jpg"),
        alt: 'Image 2',
        title: 'title of the image two'
    },
    {
        id: 3,
        src: require("../SliderImages/3.jpg"),
        alt: 'Image 3',
        title: 'title of the image three'
    },
    {
        id: 4,
        src: require("../SliderImages/4.png"),
        alt: 'Image 4',
        title: 'title of the image four'
    }
]

const Container = styled.div`
    display:flex;
    justify-content:center;
    position: relative; 
`
    const SlideContainer = styled.div`
    width:100%;
    height: 100vh;
    overflow:hidden; 
    display:flex;
`
const Slide = styled.div`
    flex: 0 0 100%;    /* The initial size of the flex item is set to occupy 100% of the available space*/
    position:relative;
`
const SlideImage = styled.img`
    width: 100%;
    height: 100%; 
    object-fit: cover;
    translate: ${props => props.translate};
    transition: translate 0.7s ease;
`

const SlideContent = styled.div`
    position: absolute;
    width: 100%; 
    top: 30%; 
    left: 20%; 
    font-family: sans-serif; 
    z-index: 6; 
    translate: ${props => props.translate};
    transition: translate 1.5s ease;
`
const Title = styled.p`
    color:rgb(255, 255, 255);
    font-size: 3rem;
    font-weight:900;
    max-width:80% ;
`
const Button= styled.button`
    margin:15rem 3rem;
    padding:1.2rem 1.7rem;
    border-radius:3rem; 
    background-color:#B61627;
    border:none;
    font-weight:600;
    font-size:1.2rem;
    &:hover{
      background-color: black;
    color:white;
    transition:all 1s ease;
  }
`
const AngleArrowL = styled.div`
    position:absolute;
    top:50%;
    color:rgb(0, 0, 0);
    font-size:3rem;  
    left:2%; 
    z-index:16;
    transform: translate(0, -50%);
    &:hover{
      color:rgb(66, 66, 66);
      cursor: pointer;
    }
`
const AngleArrowR = styled.div`
    position:absolute;
    top:50%;
    color:black;
    font-size:3rem;  
    right:2%; 
    z-index:16;
    transform: translate(0, -50%);
    &:hover{
      color:rgb(66, 66, 66);
      cursor: pointer;
    }
`
const DotContainer = styled.div`
    position:absolute; 
    top:90%; 
    margin:0px auto; 
    z-index:16;
`
const Dot = styled.span<{background: string}>`
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    border: 3px solid rgb(0, 0, 0);
    margin: 0 0.4rem;
    border-radius: 50%;
    cursor: pointer;
    background: ${(props) => props.background};
`

const HomeSlider = () =>{
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageSrc = imageList.map(image => image.src);
  const imageSrcLength = imageSrc.length

  const goToPrevious = () => {
    const isFirstSlide = currentImageIndex === 0;
    const newImageIndex = isFirstSlide ? imageSrcLength - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newImageIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentImageIndex === imageSrcLength - 1
    const newImageIndex = isLastSlide ? 0 : currentImageIndex + 1
    setCurrentImageIndex(newImageIndex)
  }

  return (
    <Container>
      <SlideContainer>
        {imageList.map((item, index) => (
          <Slide key={index}>
            <SlideImage src={item.src} alt={"slider"} translate={`${-100 * currentImageIndex}%`} />
            <SlideContent translate={`${-100 *currentImageIndex}%`}>
                <Title >{item.title}</Title>
                <Button >View Details</Button>
            </SlideContent>
          </Slide>
        ))}
      </SlideContainer>
      <AngleArrowL onClick={goToPrevious} >
        <ChevronDoubleLeft />
      </AngleArrowL>

      <AngleArrowR onClick={goToNext}>
        <ChevronDoubleRight />
      </AngleArrowR>
      <DotContainer >
        {imageSrc.map((item, index) => (
          <Dot background={index === currentImageIndex ? "#B61627" : "#fff"} key={index} onClick={() => setCurrentImageIndex(index)}></Dot>
        ))}
      </DotContainer>
    </Container>
  )
}
export default HomeSlider;