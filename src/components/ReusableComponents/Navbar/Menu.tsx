import React from "react";
// import {jsx} from "@emotion/core";
import styled from "@emotion/styled";

const Root = styled.div`
height: 32px;
display: flex;
align-items: center;
width: 62vw;
background: rgb(0,161,233);
@media(max-width: 640px){
  width: auto;
  flex-direction: column;
  position: absolute;
  right: 0px;
  align-items: flex-start;
}
`
const MenuElement = styled.a`
height: 34px;
padding: 0 20px;
//flex: 1;
display: flex;
align-items: center;
text-decoration: none;
color: white;
border-right: 2px solid rgb(0,125,190);
background: rgb(0,161,233);
@media(max-width: 640px){
  //background: rgb(0,161,233);
  width: 170px;
  padding: 8px 20px;
  border-right: 0;
}
`


export default class Menu extends React.Component {
    render() {
        return <Root>
            {menu.map(point =>
                <MenuElement href={`#${point.href}`} key={point.href}>
                    {point.text}
                </MenuElement>)
            }
        </Root>
    }
}


const menu = [{href: 'about_company', text: 'о компании'},
    {href: 'our_possibilities', text: 'наши возможности'},
    {href: 'fertilizers', text: 'реализация удобрений'},
    {href: 'partners', text: 'наши партнеры'},
    {href: 'contacts', text: 'контакты'}]
