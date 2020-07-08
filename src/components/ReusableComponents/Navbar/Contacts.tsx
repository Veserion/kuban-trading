import React from "react";
import styled from "@emotion/styled";
import mail from '../../../assets/navbar/mail.png'
import tel from '../../../assets/navbar/tel.png'

const WrapperInfo = styled.div`
width: calc(100% - 31px);
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
>a:first-child{
  margin-right: 30px;
}
@media(max-width: 642px){
width: auto;
flex-direction: column;
}
`
const Info = styled.a`
height: 100%;
padding: 10px 0;
display: flex;
align-items: center;
font-family: 'Roboto', sans-serif;
text-decoration: none;

`
const Icon = styled.img`
margin-right: 10px;
@media(max-width: 642px){
font-size: 14px;
}
`
const Text = styled.div`
color: black;
white-space: nowrap;
@media(max-width: 642px){
font-size: 14px;
}
`


export default class Contacts extends React.Component{

    render(){
        return <WrapperInfo>
            <Info href="tel:+78612458555">
                <Icon src={tel}/>
                <Text>8(861)245-85-55</Text>
            </Info>
            <Info href="mailto:info@kuban-trading.ru">
                <Icon src={mail}/>
                <Text>info@kuban-trading.ru</Text>
            </Info>
        </WrapperInfo>
    }

}