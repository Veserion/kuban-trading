import React from 'react'
import styled from '@emotion/styled'
import Carousel from './Carousel'
import AboutCompany from "./AboutCompany";
import OurPossibilities from "./OurPossibilities";
import Fertilizers from "./Fertilizers";

export default class MainPage extends React.Component {
    render() {
        return <Root>
            <Carousel/>
            <AboutCompany/>
            <OurPossibilities/>
            <Fertilizers/>
        </Root>
    }
}

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`