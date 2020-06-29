import React from "react";
import styled from "@emotion/styled";

type TProps = {
    url: string,
    text: string
}
const Link: React.FC<TProps> = (props) => {
    return <Root>
        <Circle/>
        <Text href={`/${props.url}`}>{props.text}</Text>
    </Root>
}

export default Link

const Root = styled.div`
margin-top: 20px;
width: 300px;
height: 20px;
display: flex;
`
const Circle = styled.div`
margin-top: 10px;
//top: -40px;
width: 15px;
height: 15px;
border-radius: 50%;
background: white;
@media(max-width: 640px){
  background: black;
}
`
const Text = styled.a`
width: 250px;
margin-left: 5px;
padding-left: 10px;
padding-bottom: 3px;
border-bottom: 2px solid white;
font-size: 17px;
color: white;
//text-align: center;
text-decoration: none;
@media(max-width: 640px){
  color: black;
  border-bottom: 2px solid black;
}
`