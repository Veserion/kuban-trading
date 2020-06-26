import React from "react";
import styled from '@emotion/styled';

type TProps = {
    src: string,
    text: string
}

const Item: React.FC<TProps> = (props) => {
    return <Root>
        <Image src={props.src}/>
        <Text>
            {props.text}
        </Text>
    </Root>
}
export default Item

const Root = styled.div`
width: 19vw;
display: block;
border-radius: 0px 0px 5px 5px;
`

const Image = styled.img`
width: 100%;
`
const Text = styled.div`
height: 7vw;
display: flex;
align-items: center;
text-align: center;
font-size: 16px;
color: #00a0e3;
background: white;
padding: 0 10px;
border-radius: 0px 0px 5px 5px;
border: 2px solid #00a0e3;
box-sizing: border-box;
`