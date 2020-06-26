import React from "react";
import styled from "@emotion/styled"
import bg from '../../../assets/aboutCompany/c_z_back.png'
import gif from '../../../assets/aboutCompany/c_z.gif'

const AboutCompany: React.FC = () => {
    return <Root>
        <Title>
            О компании
        </Title>
        <Wrapper>
            <LeftColumn>
                <WrapperGif>
                    <Gif/>
                </WrapperGif>
            </LeftColumn>
            <RightColumn>
                Команда специалистов «Кубаньтрейдинг» работает в сфере поставок минеральных удобрений предприятиям
                сельского хозяйства юга России с 2013 года. В 2015 году мы вошли в рынок под брендом «Кубаньтрейдинг».
                Благодаря глубокому пониманию сельскохозяйственного сегмента, нюансов рынка, наши специалисты смогли
                разработать наиболее оптимальные логистические решения. А эксклюзивные условия сотрудничества с
                производителями дают неоспоримое преимущество компании на конкурентном рынке минеральных удобрений
                гибкой ценовой политикой и условиями сотрудничества.
            </RightColumn>
        </Wrapper>
    </Root>
}
export default AboutCompany

const Root = styled.div`
width: 82vw;
margin-top: 40px;
display: block;
`
const Wrapper = styled.div`
display: flex;
`
const LeftColumn = styled.div`
width: 20vw;
display: block;
`
const Title = styled.div`
width: calc(20vw - 10px);
height: 44px;
padding-left: 10px;
display: flex;
align-items: center;
font-size: 24px;
color: white;
background: #00a0e3;
border-radius: 5px 5px 0px 0px;
`
const WrapperGif = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-size: cover;
background: url(${bg});
width: 100%;
height: 300px;
`
const Gif = styled.div`
width: 171px;
height: 171px;
border: 2px solid #00a0e3;
border-radius: 50%;
box-sizing: border-box;
background-image: url(${gif});
background-color: #ffffff;
background-repeat: no-repeat;
background-position: center;
`
const RightColumn = styled.div`
width: calc(62vw - 10%);
display: flex;
padding: 40px 5% 0 5%;
`