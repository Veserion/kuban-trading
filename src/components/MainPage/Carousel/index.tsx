import React from "react";
import styled from "@emotion/styled";
import Slider from 'react-slick';
import background from '../../../assets/carousel/b1l.jpg';
import slide1 from '../../../assets/carousel/glav_slide1.jpg'
import slide2 from '../../../assets/carousel/glav_slide2.jpg'
import slide3 from '../../../assets/carousel/glav_slide3.jpg'

export default class Carousel extends React.Component {
    render() {
        return <Root>
            <Image/>
            <Slider
                centerMode={false}
                dots={false}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={2000}
                speed={900}
                pauseOnDotsHover={true}
                arrows={false}
                infinite
            >
                {[slide1, slide2, slide3]
                    .map((url, ind) => <CarouselImage src={url} key={ind}/>)}
            </Slider>
        </Root>
    }
}

const Root = styled.div`
width: 100vw;
display: flex;
justify-content: center;
.slick-slider {
    width: 62vw;
}
`
const Image = styled.div`
width: 20vw;
min-height: calc(100% - 40px);
background: rgb(245,247,246) url(${background});
`
const CarouselImage = styled.img`
width: 62vw !important;
min-height: 100%;
`