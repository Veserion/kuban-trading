import React from "react";
import styled from "@emotion/styled";
import RCSelect from 'rc-select';
import 'rc-select/assets/index.css'


const Root = styled.div`
width: 100%;
font-family: 'Roboto';
.rc-select{
width: 100%;
height: 35px;
font-weight: normal;
font-size: 14px;
line-height: 138.2%;
border: 1px solid darkgray;
box-sizing: border-box;
>div {
  box-shadow: unset;
  :hover{
    border: unset;
    box-shadow: unset;
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
    defaultValue?: string
}

interface IState {
}


export default class Select extends React.Component<IProps, IState> {

    render() {
        const { css: style, children, value, onChange, placeholder, defaultValue } = this.props;
        return (
            <Root css={style}>
                <RCSelect
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    showArrow={true}
                    defaultValue={defaultValue}

                >
                    {children}
                </RCSelect>
            </Root >
        );
    }
}


