import React from "react";
import styled from "@emotion/styled";
import allPartners from '../../../assets/aourPartners/partners.png'


const OurPartners: React.FC = () => {
    return <Root>
        <Title>
            Наши партнеры
        </Title>
        <Body>
            <Image src={allPartners}/>
        </Body>
    </Root>
}

export default OurPartners

const Root = styled.div`
width: 82vw;
margin-top: 40px;
display: block;
`
const Title = styled.div`
width: calc(40vw - 10px);
height: 44px;
padding-left: 10px;
display: flex;
align-items: center;
font-size: 24px;
color: white;
background: #00a0e3;
border-radius: 5px 5px 0px 0px;
@media(max-width: 1300px){
  font-size: 20px;
}
@media(max-width: 640px){
  margin-left: 0;
  width: 40vw;
}
`

const Body = styled.div`
width: 100%;
margin-top: 20px;
display: flex;
justify-content: center;
`
const Image = styled.img`
width: 80%;
`