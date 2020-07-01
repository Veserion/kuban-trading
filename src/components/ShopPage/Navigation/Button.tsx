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
    return <Root css={props.active
        ? css`background: #00a0e3;`
        : css`background: darkgrey;`}>

    </Root>
}
const Root = styled.div`

`