import React from "react";
import styled from "@emotion/styled";
import agr from '../../../assets/logos/agrohimcentr_logo.jpg'
import amm from '../../../assets/logos/ammoni_logo.jpg'
import acr from '../../../assets/logos/acron.jpg'
import agrvis from '../../../assets/logos/agrvis.jpg'
import ctk from '../../../assets/logos/ctk.jpg'
import phos from '../../../assets/ourPartners/phosagro_logo.jpg'
import eurchem from '../../../assets/logos/eurochem.jpeg'
import belarkal from '../../../assets/logos/belaruskaliy.jpg'
import minud from '../../../assets/logos/minudobreniya.jpeg'

const images: string[] = [phos, belarkal, minud, agr, amm, ctk, eurchem, acr, agrvis,]
const hrefs: string[] = ['https://www.phosagro.ru/', 'https://kali.by/', 'http://www.minudo.ru/',
    'https://www.stavagroland.ru/', 'https://www.ammoni.ru/', '',
    'https://www.eurochemgroup.com/ru/', 'https://www.acron.ru/', 'https://www.zao-agrokomplex.ru',
]

interface ImgWithHrefs {
    img: string,
    href: string
}

const items = images.reduce((acc, img, i) =>
    [...acc, {img: img, href: hrefs[i]}], [] as Array<ImgWithHrefs>)

const OurPartners: React.FC = () => {
    return <Root>
        {console.log('items', items)}
        <Title>
            Наши партнеры
        </Title>
        <Body>
            {items.map((item, i) => <a href={item.href} key={i}>
                <Logo src={item.img} key={i}/>
            </a>)}
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
width: calc(2.43902439% + 23.17073171% * 2 - 20px);
min-height: 38px;
padding: 3px 10px;
display: flex;
align-items: center;
font-size: 24px;
color: white;
background: #00a0e3;
border-radius: 5px 5px 0px 0px;
@media(max-width: 1300px){
  width: calc(45% - 20px);
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
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
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
filter: grayscale(100%);
:hover {
  filter: unset;
}
@media(min-width: 640px){
  width: 240px;
  height: auto;
  margin: 30px;
}
`
