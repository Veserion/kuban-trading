import React from 'react'
import styled from '@emotion/styled'
import Carousel from './Carousel'
import AboutCompany from "./AboutCompany";
import OurPossibilities from "./OurPossibilities";
import Fertilizers from "./Fertilizers";
import OurPartners from './OurPartners';
import GoogleMap from "./GoogleMap";

export default class MainPage extends React.Component {
    render() {
        return <Root>
            <Carousel/>
            <AboutCompany/>
            <OurPossibilities/>
            <Fertilizers/>
            <OurPartners/>
            <GoogleMap/>
        </Root>
    }
}

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`