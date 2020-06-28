import React from "react";
import styled from "@emotion/styled";
import bg from '../../../assets/fertilizers/block3_background.jpg'

const items = [
    {url: '', text: 'Азотные удобрения'},
    {url: '', text: 'Фосфорные удобрения'},
    {url: '', text: 'Калийные удобрения'},
    {url: '', text: 'Комплексные удобрения'}
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
                <Links>

                </Links>
            </Wrapper>
        </Root>
    }
}

const Root = styled.div`
//width: 100vw;
margin-top: 40px;
display: block;
//justify-content: flex-start;
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
`
const Wrapper = styled.div`
width: calc(100vw - 9vw);
padding-left: 9vw;
//height: 400px;
background-image: url(${bg});
`
const Text = styled.div`
width: calc(40vw - 30px);
padding: 40px 15px;
background: white;
p{
  margin: 0;
}
`
const Links = styled.div`

    `