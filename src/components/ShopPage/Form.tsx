import React from "react";
import styled from "@emotion/styled";



interface IProps {
    isOpen: boolean
}
interface IState extends IProps{
}

export default class Form extends React.Component<IProps, IState> {
    state = {isOpen: this.props.isOpen};

    render() {
        const {isOpen} = this.state
        return <div></div>
    }
}
