/**@jsx jsx*/
import React from "react";
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/core';
import Slider from 'react-slick';
import background from '../../../assets/carousel/b1l.jpg';
import slide1 from '../../../assets/carousel/glav_slide1.jpg'
import slide2 from '../../../assets/carousel/glav_slide2.jpg'
import slide3 from '../../../assets/carousel/glav_slide3.jpg'

export default class Carousel extends React.Component {
    render() {
        return <Root>
            <Image/>
            <Image2 src={background}/>
            <Slider
                css={css`@media(max-width: 758px){display: none;}`}
                centerMode={false}
                dots={false}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={3000}
                speed={999}
                pauseOnDotsHover={true}
                arrows={false}
                infinite
            >
                {[slide1, slide2, slide3]
                    .map((url, ind) => <CarouselImage src={url} key={ind}/>)}
            </Slider>
            <Image3 src={slide1}/>

        </Root>
    }
}

const Root = styled.div`
width: 100vw;
display: flex;
justify-content: center;
margin-bottom: -5px;
.slick-slider {
    width: 62vw;
}
`
const Image = styled.div`
width: 20vw;
min-height: calc(100% - 40px);
background: rgb(245,247,246) url(${background}) no-repeat;
background-size: 100%;
@media(max-width: 758px){
  display: none;
}
`
const Image2 = styled.img`
display: none;
@media(max-width: 758px){
  display: block;
  width: 20vw;
}
`
const Image3 = styled.img`
display: none;
@media(max-width: 758px){
  display: block;
  width: 62vw;
}
`
const CarouselImage = styled.img`
width: 62vw;
height: 154%;
`