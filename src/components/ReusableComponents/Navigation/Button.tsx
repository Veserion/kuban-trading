/**@jsx jsx*/
import React from "react";
import styled from "@emotion/styled";
import {css, jsx} from "@emotion/core";

type TProps = {
    active: boolean,
    href: string,
    text: string,
}
const Button: React.FC<TProps> = (props) => {
    return <Root css={css(props.active
        ? `background: #00a0e3;`
        : `background: darkgrey;`)}
                 href={props.href}>
        {props.text}
    </Root>
}

export default Button

const Root = styled.a`
height: 6vw;
width: calc(100% - 10px);
padding: 0 5px;
min-width: 125px;
flex-basis: 22%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
text-decoration: none;
color: white;
font-size: 18px;
font-weight: bold;
border-radius: 2px;
:hover {
  background: #00a0e3;
}
@media(max-width: 1050px){
  font-size: 16px;
}
@media(max-width: 650px){
  font-size: 18px;
  margin: 5px 0;
  padding: 10px 0px;
  width: 100%;
}
`