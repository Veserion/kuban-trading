import React from "react";
import styled from "@emotion/styled";
import mail from '../../../assets/navbar/mail.png'
import tel from '../../../assets/navbar/tel.png'

const WrapperInfo = styled.div`
width: calc(100% - 31px);
display: flex;
justify-content: flex-end;
align-items: flex-end;
>a:first-child{
  margin-right: 30px;
}
@media(max-width: 642px){
flex-direction: column;
align-items: flex-start;
}
`
const Info = styled.a`
padding: 10px 0;
display: flex;
align-items: center;
font-family: 'Roboto', sans-serif;
text-decoration: none;

`
const Icon = styled.img`
//height: 20px;
//width: auto;
margin-right: 10px;
`
const Text = styled.div`
color: black;
white-space: nowrap;
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