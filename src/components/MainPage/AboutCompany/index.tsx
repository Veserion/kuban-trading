import React from "react";
import styled from "@emotion/styled"
import bg from '../../../assets/aboutCompany/c_z_back.png'
import gif from '../../../assets/aboutCompany/c_z.gif'

const AboutCompany: React.FC = () => {
    return <Root id={'about_company'}>
        <Body>
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
                    сельского хозяйства юга России с 2013 года. В 2015 году мы вошли в рынок под брендом
                    «Кубаньтрейдинг».
                    Благодаря глубокому пониманию сельскохозяйственного сегмента, нюансов рынка, наши специалисты смогли
                    разработать наиболее оптимальные логистические решения. А эксклюзивные условия сотрудничества с
                    производителями дают неоспоримое преимущество компании на конкурентном рынке минеральных удобрений
                    гибкой ценовой политикой и условиями сотрудничества.
                </RightColumn>
            </Wrapper>
        </Body>
    </Root>
}
export default AboutCompany

const Root = styled.div`
width: 100vw;
display: flex;
justify-content: center;
`
const Body = styled.div`
width: 82%;
max-width: 1170px;
margin-top: 40px;
display: block;
`
const Wrapper = styled.div`
display: flex;
width: 100%;
`
const LeftColumn = styled.div`
width: 25.64102564%;
display: block;
background-color: white;
border-radius: 0 0 0 4px;
@media(max-width: 900px){
  width: 40vw;
}
@media(max-width: 900px){
  display: none;
}
`
const Title = styled.div`
width: calc(25.64102564% - 20px);
height: 38px;
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
@media(max-width: 640px){
  margin-left: 0;
  width: calc(100% - 20px);
}
`
const WrapperGif = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: url(${bg});
background-size: 100%;
width: 100%;
height: 300px;
@media(max-width: 900px){
  width: 40vw;
  height: 100%;
}
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
width: calc(74.35897436% - 10%);
display: flex;
padding: 40px 5% 0 5%;
border-radius: 0 4px 4px 0;
background-color: white;
@media(max-width: 900px){
  width: auto;
  padding: 20px 5% 20px 5%;
  border-radius: 0 4px 4px 0;
  color: #00a0e3;
}
`