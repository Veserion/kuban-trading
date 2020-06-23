import React from "react";
import styled from "@emotion/styled";

const Root = styled.div`
display: none;
@media(max-width: 640px){
  display: block;
  position: absolute;
  top: 10px;
  margin: -1px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  & > * {
    margin: 1px 0;
  }
}
`

const Line = styled.div`
flex: 1;
min-height: 3px;
width: 23px;
background-color: #00a0e3;
`

const BurgerIcon: React.FC<{ onClick?: () => void }> = ({onClick}) =>
    <Root onClick={onClick}>
        {Array.from({length: 3}, (_, i) =>
            <Line key={i}/>)}
    </Root>

export default BurgerIcon