/**@jsx jsx*/
import React from "react";
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/core';
import Slider from 'react-slick';
import background from '../../../assets/carousel/b1l.jpg';
import slide1 from '../../../assets/carousel/glav_slide1.jpg'
import slide2 from '../../../assets/carousel/glav_slide2.jpg'
import slide3 from '../../../assets/carousel/glav_slide3.jpg'
import spb from '../../../assets/logos/spb.png'

export default class Carousel extends React.Component {
    render() {
        return <Root>
            <Wrapper>
                <Image/>
                <Image2 src={background}/>
                <Spb href={'https://spimex.com/'}/>
                <Slider
                    css={css`@media(max-width: 990px){display: none;}`}
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
            </Wrapper>
        </Root>
    }
}

const Root = styled.div`
width: 100vw;
display: flex;
justify-content: center;
`
const Wrapper = styled.div`
width: 82%;
max-width: 1170px;
display: flex;
justify-content: center;
margin-bottom: -5px;
.slick-slider {
    width: 74.35897436%;
}
`
const Image = styled.div`
width: 25.64102564%;
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
@media(max-width: 990px){
  display: block;
  width: 62vw;
}
`
const CarouselImage = styled.img`
width: 62vw;
height: 154%;
`
const Spb = styled.a`
position: absolute;
left: calc((82vw * 0.2564102564 - 13vw)/2 + 8vw);
top: 28vw;
width: 14vw;
height: 2.03vw;
background-image: url(${spb});
background-size: contain;
background-repeat: no-repeat;
@media(max-width: 650px){
  top: calc(20vw + 80px);
}
@media(min-width: 1427px){
  left: calc((100vw - 1170px) / 2 + 50px);
  top: 370px;
  width: 200px;
  height: 29px;
  background-size: contain;
}
`