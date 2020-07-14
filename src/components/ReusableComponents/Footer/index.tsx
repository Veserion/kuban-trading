/**@jsx jsx*/
import React from "react";
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/core'
import logo from '../../../assets/footer/f_logo.png'
import address from '../../../assets/footer/f_adress.png'
import tel from '../../../assets/footer/f_tel.png'
import mail from '../../../assets/footer/f_mail.png'
import Contacts from './Contacts'
import Link from './Link'

const contacts = [
    {img: address, text: 'г. Краснодар ул.Гимназическая, д.65/68, оф.204', href: '/'},
    {img: tel, text: '8(861)245-85-55', href: 'tel:+78612458555'},
    {img: mail, text: 'kubantreidind@mail.ru', href: 'mailto:kubantreidind@mail.ru'}
]
const links = [{href: 'about_company', text: 'О компании'},
    {href: 'our_possibilities', text: 'Наши возможности'},
    {href: 'fertilizers', text: 'Реализация удобрений'},
    {href: 'partners', text: 'Наши партнеры'},
    {href: 'contacts', text: 'Контакты'}
]

const Footer: React.FC = () => {
    return <Root>
        <Body>
            <Column>
                <Logo href={'/'}/>
            </Column>
            <Column css={css`justify-content: space-evenly;`}>
                {contacts.map((item, i) =>
                    <Contacts key={i} img={item.img} text={item.text} href={item.href}/>)
                }
            </Column>
            <Column
                css={css`${styles}`}>
                {links.map((item, i) =>
                    <Link key={i} href={item.href} text={item.text}/>)}
            </Column>
        </Body>
    </Root>
}
export default Footer

const Root = styled.div`
width: 100vw;
padding: 10px 0;
background: #00a0e3;
border-top: 3px solid rgb(0,125,190);
display: flex;
justify-content: center;
`
const Body = styled.div`
width: 82vw;
display: flex;
@media(max-width: 750px){
flex-wrap: wrap;
}
max-width: 1170px;
`
const Column = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex: 1;
`
const Logo = styled.a`
background-image: url(${logo});
background-size: 100% 100%;
width: 150px;
height: 60.789473685px;
@media(max-width: 750px){
width: 30vw;
height: 12.157894737vw;
}
`
const styles = css`
flex: 2;
flex-wrap: wrap;
justify-content: flex-start;
@media(max-width: 750px){
width: 100%;
min-width: 270px;
flex-direction: row;
justify-content: flex-start;
}
`