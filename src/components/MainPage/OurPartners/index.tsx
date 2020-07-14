import React from "react";
import styled from "@emotion/styled";
import agr from '../../../assets/logos/agrohimcentr_logo.jpg'
import amm from '../../../assets/logos/ammoni_logo.jpg'
import ctk from '../../../assets/logos/ctk.jpg'
import np2 from '../../../assets/ourPartners/n_p2.jpg'
import np5 from '../../../assets/ourPartners/n_p5.jpg'
import np6 from '../../../assets/ourPartners/n_p6.jpg'
import np8 from '../../../assets/ourPartners/n_p8.jpg'
import phos from '../../../assets/ourPartners/phosagro_logo.jpg'

const images = [agr, amm, ctk, np2, np5, np6, np8, phos]

const OurPartners: React.FC = () => {
    return <Root>
        <Title>
            Наши партнеры
        </Title>
        <Body>
            {images.map((logo, i) => <Logo src={logo} key={i}/>)}
        </Body>
    </Root>
}

export default OurPartners

const Root = styled.div`
width: 82vw;
max-width: 1170px;
margin-top: 40px;
display: block;
`
const Title = styled.div`
width: calc(19vw - 10px);
min-height: 38px;
padding: 3px 10px;
display: flex;
align-items: center;
font-size: 24px;
color: white;
background: #00a0e3;
border-radius: 5px 5px 0px 0px;
@media(max-width: 1300px){
  font-size: 20px;
}
@media(max-width: 900px){
  width: calc(100% - 20px);
}
`

const Body = styled.div`
width: 100%;
margin-top: 20px;
display: flex;
justify-content: center;
@media(max-width: 640px){
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3vw;
  align-self: center;
  align-items: center;
}
`
const Logo = styled.img`
display: unset;
width: 100%;
height: unset;
vertical-align: middle;
@media(min-width: 900px){
  
}
`
