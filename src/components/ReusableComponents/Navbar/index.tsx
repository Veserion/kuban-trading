/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import {css, jsx} from '@emotion/core'
import logo from '../../../assets/navbar/logo.png'
import mail from '../../../assets/navbar/mail.png'
import tel from '../../../assets/navbar/tel.png'

export default class Navbar extends React.Component {

    menu = [{href: 'about_company', text: 'о компании'},
        {href: 'nashi_vozmojnosti', text: 'наши возможности'},
        {href: 'celi_perspektivi', text: 'цели и перспективы'},
        {href: 'perspektivi', text: 'наши партнеры'},
        {href: 'contacts', text: 'контакты'}]

    render() {
        return <Root>
            <WrapperRoot>
            <Logo/>
            <Wrapper>
                <WrapperInfo>
                    <Info href="tel:+78612458555">
                        <Icon src={tel}/>
                        <Text>8(861)245-85-55</Text>
                    </Info>
                    <Info href="mailto:info@kuban-trading.ru">
                        <Icon src={mail}/>
                        <Text>info@kuban-trading.ru</Text>
                    </Info>
                </WrapperInfo>
                <Menu>
                    {this.menu.map(point =>
                        <MenuElement id={point.href} href={`#${point.href}`} key={point.href}>
                            {point.text}
                        </MenuElement>)
                    }
                </Menu>
            </Wrapper>
            </WrapperRoot>
        </Root>
    }
}

const Root = styled.div`
width: 100vw;
border-bottom: 2px solid rgb(0,161,233);
box-sizing: border-box;
`
const WrapperRoot = styled.div`
width: 86vw;
padding: 0 7vw;
display: flex;
justify-content: space-between;
align-items: center;
font-family: sans-serif;
`
const Logo = styled.a`
width: 200px;
height: 69px;
background: transparent url(${logo}) no-repeat;
z-index: 100;
`
const Wrapper = styled.div`
width: auto;
display: flex;
flex-direction: column;
align-items: flex-end;
z-index: 0;
`
const WrapperInfo = styled.div`
width: calc(100% - 31px);
display: flex;
justify-content: flex-end;
align-items: flex-end;
>a:first-child{
  margin-right: 30px;
}
`
const Info = styled.a`
padding: 10px 0;
display: flex;
align-items: center;
font-family: sans-serif;
text-decoration: none;

`
const Icon = styled.img`
//height: 20px;
//width: auto;
margin-right: 10px;
`
const Text = styled.div`
color: black;
`
const Menu = styled.div`
height: 32px;
display: flex;
align-items: center;
background: rgb(0,161,233);
`
const MenuElement = styled.a`
height: 90%;
padding: 0 20px;
display: flex;
align-items: center;
text-decoration: none;
color: white;
border-right: 2px solid rgb(0,125,190);
`