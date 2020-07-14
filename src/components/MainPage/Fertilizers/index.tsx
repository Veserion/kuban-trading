import React from "react";
import styled from "@emotion/styled";
import bg from '../../../assets/fertilizers/block3_background.jpg'
import Link from './Link'

const items = [
    {url: 'nitrogen_fertilizers', text: 'Азотные удобрения'},
    {url: 'phosphoric_fertilizers', text: 'Фосфорные удобрения'},
    {url: 'potash_fertilizer', text: 'Калийные удобрения'},
    {url: 'complex_fertilizers', text: 'Комплексные удобрения'}
]
export default class Fertilizers extends React.Component<any, any> {
    render() {
        return <Root id={'fertilizers'}>
            <Body>
                <Title>Реализация удобрений</Title>
                <Wrapper>
                    <Text>
                        <p>
                            Предлагаем следующие виды удобрений:
                            Удобрения с доставкой автотранспортом, ж/д транспортом, отгрузка со складов.
                            Поставляем удобрения по России. Минимальная партия с автодоставкой - 20 тонн.
                        </p>
                        <p>
                            ООО «Кубаньтрейдинг» является Брокером на бирже Акционерное общество «Санкт-Петербургская
                            Международная Товарно-сырьевая Биржа» (АО «СПбМТСБ»)» в секции «Минеральное сырье и
                            химическая
                            промышленность», что дает нам право на участие в биржевых торгах и полномочие на оказание
                            брокерских
                            услуг юридическим лицам.
                        </p>
                        <p>
                            Большой опыт работы в сфере торговли минеральными удобрениями и обширная география поставок
                            позволяют успешно и своевременно удовлетворять потребности различных групп потребителей.
                        </p>
                        <p>
                            Тарифы на брокерское обслуживание – от 200 рублей за тонну – ставки варьируются в
                            зависимости от
                            объемов поставки и периодичности закупок.
                        </p>
                        <p>
                            По всем имеющимся вопросам, обращайтесь по телефону 8(861)245-85-55 или пишите на почту
                            info@kuban-trading.ru
                        </p>
                    </Text>
                <Links>
                    {items.map((item, i) =>
                        <Link key={i} url={item.url} text={item.text}/>)
                    }
                </Links>
                </Wrapper>
            </Body>
        </Root>
    }
}

const Root = styled.div`
width: 100vw;
margin-top: 40px;
display: flex;
justify-content: center;
`
const Body = styled.div`
display: block;
width: 82%;
max-width: 1170px;
@media(max-width: 900px){
  width: 82vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
`
const Title = styled.div`
width: calc(2.43902439% + 23.17073171% * 2 - 20px);
height: 38px;
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
  margin-left: 0;
  width: calc(100% - 20px);
}
`
const Wrapper = styled.div`
width: 100%;
background-image: url(${bg});
background-repeat:  no-repeat;
background-size: 100% 100%;
@media(max-width: 900px){
  width: 82vw;
  background-image: none;
  padding-left: 0;
}
`
const Text = styled.div`
width: calc(2.43902439% + 23.17073171% * 2 - 30px);
padding: 40px 15px 30px 15px;
background: white;
opacity: .85;
p{
  margin: 0;
}
@media(max-width: 1300px){
  width: calc(45% - 30px);
}
@media(max-width: 900px){
  padding: 20px 15px 10px 15px;
  width: calc(100% - 30px);
}
`
const Links = styled.div`
margin-top: -200px;
padding-bottom: 30px;
width: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
position: relative;
right: 0;
@media(max-width: 1200px){
  margin-top: -230px;
  padding-bottom: 60px;
  >div{
    margin-right: 5% !important;
  }
}
>div:nth-child(1){
  margin-right: 40px;
}
>div:nth-child(2){
  margin-right: 80px;
}
>div:nth-child(3){
  margin-right: 120px;
}
>div:nth-child(4){
  margin-right: 160px;
}
@media(max-width: 900px){
  width: 100%;
  margin-top: 3vw;
  margin-bottom: 4vw;
  padding-bottom: 30px;
  position: unset;
  display: flex;
  align-items: center;
  color: black;
  background-image: none;
  background-repeat: no-repeat;
  background-origin: content-box;
  >div:nth-child(1){
    margin-left: 0px;
  }
  >div:nth-child(2){
    margin-left: 0px;
  }
  >div:nth-child(3){
    margin-left: 0px;
  }
  >div:nth-child(4){
    margin-left: 0px;
  }
}
`