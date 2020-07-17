/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import {css, jsx} from '@emotion/core'
import Carousel from './Carousel'
import AboutCompany from "./AboutCompany";
import OurPossibilities from "./OurPossibilities";
import Fertilizers from "./Fertilizers";
import OurPartners from './OurPartners';
import GoogleMap from "./GoogleMap";
import {Parallax} from "react-parallax";
import bg from '../../assets/back.jpg'
import Navigation from "../ReusableComponents/Navigation";

export default class MainPage extends React.Component {
    render() {
        return <Root>
            <Wrapper>
                <Carousel/>
                <Navigation currentPath={'/'}/>
                <Parallax bgImage={bg} strength={500} css={css`width: 100vw; display: flex; justify-content: center;`}>
                    <AboutCompany/>
                    <Fertilizers/>
                    <OurPossibilities/>
                </Parallax>
                <OurPartners/>
                <GoogleMap/>
            </Wrapper>
        </Root>
    }
}

const Root = styled.div`
display: flex;
`

const Wrapper = styled.div`
width: 100%;
max-width: 1170px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
.react-parallax-content{
display: flex;
flex-direction: column;
align-items: center;
}
`