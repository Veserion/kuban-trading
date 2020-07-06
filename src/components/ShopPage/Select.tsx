import React from "react";
import styled from "@emotion/styled";
import RCSelect from 'rc-select';
import 'rc-select/assets/index.css'


const Root = styled.div`
width: 100%;
font-family: inherit;

.rc-select{
width: 100%;
height: 35px;
font-weight: normal;
font-size: 14px;
line-height: 138.2%;
border: 1px solid darkgray;
box-sizing: border-box;
>div {
  :hover{
    border: unset;
    mso-border-shadow: no;
  }
}
}
.rc-select-selection{
border-color: white;
background: white;
}
.rc-select-selection__rendered{
    display: flex;
    flex-direction: row;
    align-items: center;
}
`;

interface IProps {
    value?: string
    placeholder?: string
    onChange?: (e: any) => void
    css?: any
}

interface IState {
}


export default class Select extends React.Component<IProps, IState> {

    render() {
        const { css: style, children, value, onChange, placeholder } = this.props;
        return (
            <Root css={style}>
                <RCSelect
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    showArrow={true}

                >
                    {children}
                </RCSelect>
            </Root >
        );
    }
}

const Placeholder = styled.div`
margin-top: 3.5px;
font-weight: normal;
font-size: 14px;
line-height: 138.2%;
color: #9D998E;
`

