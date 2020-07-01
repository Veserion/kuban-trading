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
min-width: 265px
display: block;
border-radius: 0px 0px 5px 5px;
@media(max-width: 1300px){
  width: 45%;
}
@media(max-width: 900px){
  width: 100%;
  display: flex;
  >img{
    width: 40vw;
  }
  margin-bottom: 20px;
}
`

const Image = styled.img`
width: 100%;
border-radius: 4px 4px 0 0;
`
const Text = styled.div`
height: 7vw;
margin-top: -5px;
display: flex;
align-items: center;
text-align: center;
font-size: 16px;
color: #00a0e3;
background: white;
padding: 0 10px;
border-radius: 0px 0px 5px 5px;
@media(max-width: 1030px){
  font-size: 14px;
}
@media(max-width: 900px){
  width: 50%;
  height: inherit;
  justify-content: center;
  font-size: 16px;
}
`