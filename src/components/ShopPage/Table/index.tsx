import React from "react";
import styled from "@emotion/styled";
import {TDataTable} from '../index'
import Row from './Row'

type TProps = {
    data: TDataTable[],
    handleNotification: (type: string, message: string) => void

}
const Table: React.FC<TProps> = (props) => {
    return <Root>
        {props.data.map((item, i) =>
            <Row key={i} data={item} handleNotification={props.handleNotification}/>
        )}
    </Root>
}
export default Table

const Root = styled.div`
display: flex;
flex-direction: column;
border-bottom: 1px solid darkgray;
margin-bottom: 3vw;
background: white;
`
