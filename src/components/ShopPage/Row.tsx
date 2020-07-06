/**@jsx jsx*/
import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import {jsx, css} from '@emotion/core';
import {TDataTable} from "./index";
import CustomForm from './CustomForm';
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
} from '@material/react-dialog';

type TProps = {
    data: TDataTable
}
const Row: React.FC<TProps> = (props) => {
    const [isOpenDialog, setOpenDialog] = useState(false)
    const handleOpenDialog = () => setOpenDialog(true)
    const handleCloseDialog = () => setOpenDialog(false)
    // const handleCloseDialog2 = (event: any) => {
    //     const path = event.path || (event.composedPath && event.composedPath());
    //     if (isOpenDialog && !(path.some((element: any) => element.dataset && element.dataset.owner === 'dialog'))) {
    //         handleCloseDialog()
    //     }
    // }

    // useEffect(() => {
    //     document.addEventListener('mousedown', handleCloseDialog2)
    //     return () => document.removeEventListener('mousedown', handleCloseDialog2)
    // })

    return <Root>
        <Label>
            {props.data.label}
        </Label>
        <Description>
            {props.data.description}
        </Description>
        <ButtonWrapper>
            <Button onClick={handleOpenDialog}>
                {`ЗАКАЗАТЬ ${isOpenDialog}`}

            </Button>
        </ButtonWrapper>
        <Dialog open={isOpenDialog} data-owner='dialog' >
            <DialogTitle>Отправить заявку на расчет стоимости / доставки</DialogTitle>
            <DialogContent>
                <CustomForm label={props.data.label}/>
            </DialogContent>
            <DialogFooter>
                <DialogButton onClick={handleCloseDialog} action='dismiss'>Dismiss</DialogButton>
                <DialogButton onClick={handleCloseDialog} action='accept' isDefault>Accept</DialogButton>
            </DialogFooter>
        </Dialog>
    </Root>
}
export default Row

const Root = styled.div`
width: 100%;
display: flex;
border-top: 1px solid darkgrey;
box-sizing: border-box;
.mdc-dialog__surface {
    width: 60vw;
    height: 80vh;
    max-width: unset;
    min-width: unset;
    max-height: unset;
    min-height: unset;
    display: flex;
    align-items: center;
}
.mdc-dialog__content{
  width: 100%;
}
`
const Label = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
border-right: 1px solid darkgrey;
border-left: 1px solid darkgrey;
box-sizing: border-box;
`
const Description = styled.div`
flex: 3;
display: flex;
align-items: center;
justify-content: center;
border-right: 1px solid darkgrey;
box-sizing: border-box;
`
const ButtonWrapper = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
border-right: 1px solid darkgrey;
box-sizing: border-box;
`
const Button = styled.div`
width: 80%;
height: 80%;
background: #00a0e3;
display: flex;
align-items: center;
justify-content: center;
user-select: none;
cursor: pointer;
`