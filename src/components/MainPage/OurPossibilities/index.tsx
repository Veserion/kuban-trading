import React from "react";
import styled from '@emotion/styled';
import Item from './Item';
import pic1 from '../../../assets/ourPossibilities/n_v_item1.png';
import pic2 from '../../../assets/ourPossibilities/n_v_item2.jpg';
import pic3 from '../../../assets/ourPossibilities/n_v_item3.jpg';
import pic4 from '../../../assets/ourPossibilities/n_v_item4.jpg';

const items = [
    {
        src: pic1,
        text: 'География работы компании "Кубаньтрейдинг": Краснодарский край, Ростовская область и Ставропольский край'
    },
    {src: pic2, text: 'Поставки удобрений железнодорожным и авто - транспортом'},
    {src: pic3, text: 'Возможности хранения на крупных узловых точках до 50 тысяч тонн'},
    {src: pic4, text: 'Собственные линии фасовки удобрений'}
]

const OurPossibilities: React.FC = () => {
    return <Root id={'our_possibilities'}>
        <Body>
            <Title>
                Наши возможности
            </Title>
            <Wrapper>
                {items.map((item, i) =>
                    <Item src={item.src} text={item.text} key={i}/>)
                }
            </Wrapper>
        </Body>
    </Root>
}

export default OurPossibilities

const Root = styled.div`
width: 100vw;
display: flex;
justify-content: center;
margin-top: 40px;
`
const Body = styled.div`
width: 82vw;

`
const Title = styled.div`
width: calc(19vw - 20px);
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
  width: calc(36.9vw - 20px);
}
@media(max-width: 900px){
  width: calc(100% - 20px);
}
`
const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
@media(max-width: 900px){
  flex-direction: column;
}
`