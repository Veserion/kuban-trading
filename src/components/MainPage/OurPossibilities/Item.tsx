import React from "react";
import styled from '@emotion/styled';

type TProps = {
    src: string,
    text: string,
    handleOpenDialog?: () => void
}

const Item: React.FC<TProps> = (props) => {
    return <Root>
        <Image src={props.src} onClick={props.handleOpenDialog}/>
        <Text onClick={props.handleOpenDialog}>
            {props.text}
        </Text>
    </Root>
}
export default Item

const Root = styled.div`
width: 19vw;
min-width: 275px;
min-width: 265px;
margin-bottom: 30px;
display: block;
border-radius: 0px 0px 5px 5px;
@media(max-width: 1390px){
  width: 45%;
  margin-bottom: 20px;
}
@media(max-width: 900px){
  width: 100%;
  border-radius: 0;
  display: flex;
  >img{
    width: 40vw;
  }
  margin-bottom: 20px;
}
@media(min-width: 1426px){
  width: 271px;
}
`

const Image = styled.img`
width: 100%;
border-radius: 4px 4px 0 0;
cursor: pointer;
height: 10.7214285714vw;
@media(max-width: 1390px){
  height: 22.14vw;
}
@media(max-width: 900px){
  height: unset;
  border-radius: 5px 0px 0px 5px;
}
@media(min-width: 1426px){
  width: 271px;
  height: 153px;
}
`
const Text = styled.div`
height: 8vw;
margin-top: -5px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-size: 16px;
color: #00a0e3;
background: white;
padding: 5px 10px;
border-radius: 0px 0px 5px 5px;
cursor: pointer;

@media(max-width: 1030px){
  font-size: 14px;
}
@media(max-width: 900px){
  border-radius: 0px 5px 5px 0px;
  margin-top: 0;
  width: calc(50% - 10px);
  height: inherit;
  justify-content: center;
  font-size: 16px;
}
@media(min-width: 1426px){
  width: 251px;
}
`