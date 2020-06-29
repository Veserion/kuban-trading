import React from "react";
// import {jsx} from "@emotion/core";
import styled from "@emotion/styled";

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

const Root = styled.div`
@media(min-width: 641px){
  width: 100%;
  >a:nth-child(1){
    flex: 1;
  }
  >a:nth-child(2){
    flex: 1.5
  }
  >a:nth-child(3){
    flex: 1.7;
  }
  >a:nth-child(4){
    flex: 1.1;
  }
  >a:nth-child(5){
    flex: 1;
  }
}
height: 32px;
display: flex;
align-items: center;
background: rgb(0,161,233);
@media(max-width: 640px){
  width: auto;
  height: auto;
  flex-direction: column;
  position: absolute;
  right: -10vw;
  align-items: flex-start;
  z-index: 100000000;
}
`
const MenuElement = styled.a`
height: 34px;
padding: 0 20px;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
color: white;
border-right: 2px solid rgb(0,125,190);
background: rgb(0,161,233);
@media(max-width: 867px){
  font-size: 13px;
}
@media(max-width: 640px){
  width: 170px;
  padding: 8px 20px;
  border-right: 0;
  z-index: 100000000;
  border-bottom: 2px solid rgb(0,125,190);
}
`