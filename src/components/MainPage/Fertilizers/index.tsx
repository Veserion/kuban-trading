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
                        Международная Товарно-сырьевая Биржа» (АО «СПбМТСБ»)» в секции «Минеральное сырье и химическая
                        промышленность», что дает нам право на участие в биржевых торгах и полномочие на оказание
                        брокерских
                        услуг юридическим лицам.
                    </p>
                    <p>
                        Большой опыт работы в сфере торговли минеральными удобрениями и обширная география поставок
                        позволяют успешно и своевременно удовлетворять потребности различных групп потребителей.
                    </p>
                    <p>
                        Тарифы на брокерское обслуживание – от 200 рублей за тонну – ставки варьируются в зависимости от
                        объемов поставки и периодичности закупок.
                    </p>
                    <p>
                        По всем имеющимся вопросам, обращайтесь по телефону 8(861)245-85-55 или пишите на почту
                        info@kuban-trading.ru
                    </p>
                </Text>
            </Wrapper>
            <Links>
                {items.map((item, i) =>
                    <Link key={i} url={item.url} text={item.text}/>)
                }
            </Links>
        </Root>
    }
}

const Root = styled.div`
margin-top: 40px;
display: block;
@media(max-width: 640px){
  width: 82vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
`
const Title = styled.div`
width: calc(40vw - 10px);
height: 44px;
margin-left: 9vw;
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
const Wrapper = styled.div`
width: calc(100vw - 9vw);
padding-left: 9vw;
background-image: url(${bg});
background-repeat:  no-repeat;
background-size: 100% 100%;
@media(max-width: 640px){
  width: 82vw;
  background-image: none;
  padding-left: 0;
}
`
const Text = styled.div`
width: calc(40vw - 30px);
padding: 40px 15px;
background: white;
opacity: .85;
p{
  margin: 0;
}
@media(max-width: 640px){
  padding: 20px 0px 10px 0;
  width: 100%;
}
`
const Links = styled.div`
margin-top: -200px;
margin-right: 4vw;
position: absolute;
right: 0;
>div:nth-child(1){
  margin-left: -40px;
}
>div:nth-child(2){
  margin-left: -80px;
}
>div:nth-child(3){
  margin-left: -120px;
}
>div:nth-child(4){
  margin-left: -160px;
}
@media(max-width: 640px){
  margin-top: 1vw;
  padding: 20px 0;
  width: 100%;
  background-image: none;
  color: black;
  background-repeat: no-repeat;
  background-origin: content-box;
  position: unset;
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