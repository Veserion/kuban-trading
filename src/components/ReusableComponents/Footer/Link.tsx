import React from "react";
import styled from "@emotion/styled";

type TProps = {
    href: string,
    text: string
}

const Link: React.FC<TProps> = (props) => {
    return <Root>
        <Circle/>
        <Text href={`#${props.href}`}>
            {props.text}
        </Text>
    </Root>
}
export default Link
const Root = styled.div`
width: calc(50% - 22px);
margin: 3px 10px;
display: flex;
align-items: center;
justify-content: flex-start;
height: 27%;
`
const Circle = styled.div`
height: 5px;
width: 5px;
border-radius: 50%;
background-color: white;
`
const Text = styled.a`
margin-left: 10px;
font-size: 90%;
text-decoration: none;
color: white;
`