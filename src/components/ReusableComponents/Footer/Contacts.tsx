import React from "react";
import styled from "@emotion/styled";

type TProps = {
    img: string,
    text: string,
    href: string
}
const Contacts: React.FC<TProps> = (props) => {
    return <Root>
        <Image src={props.img}/>
        {props.href === '/'
            ?
            <Text>
                {props.text}
            </Text>
            :
            <Text href={props.href}>
                {props.text}
            </Text>
        }
    </Root>
}
export default Contacts

const Root = styled.div`
width: calc(100% - 20px);
margin: 3px 10px 3px 10px;
display: flex;
justify-content: flex-start;
align-items: center;
//max-height: calc(23% - 4px);
`
const Image = styled.img`
height: 100%;
`
const Text = styled.a`
margin-left: 10px;
font-size: 90%;
text-decoration: none;
color: white;
`