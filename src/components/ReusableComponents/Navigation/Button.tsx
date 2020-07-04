/**@jsx jsx*/
import React from "react";
import styled from "@emotion/styled";
import {css, jsx} from "@emotion/core";

type TProps = {
    active: boolean,
    href: string,
    text: string,
    // color: string
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
//flex-grow: 0.9;
height: 6vw;
flex-basis: 23%;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
color: white;
font-size: 16px;
font-weight: bold;
@media(max-width: 1050px){
  font-size: 14px;
}
`