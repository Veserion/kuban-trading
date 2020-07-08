/**@jsx jsx*/
import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import {jsx, css} from '@emotion/core';
import {TDataTable} from "../index";
import CustomForm from './CustomForm';
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter
} from '@material/react-dialog';

type TProps = {
    data: TDataTable
}
const Row: React.FC<TProps> = (props) => {
    const [isOpenDialog, setOpenDialog] = useState(false)
    const handleOpenDialog = () => setOpenDialog(true)
    const handleCloseDialog = () => setOpenDialog(false)
    const handleCloseDialog2 = (event: any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (isOpenDialog && !(path.some((element: any) => element.dataset && element.dataset.owner === 'dialog'))) {
            handleCloseDialog()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleCloseDialog2)
        return () => document.removeEventListener('mousedown', handleCloseDialog2)
    })

    return <Root>
        <Wrapper>
            <Label>
                {props.data.label}
            </Label>
            <Description>
                {props.data.description}
            </Description>
        </Wrapper>
        <ButtonWrapper>
            <Button onClick={handleOpenDialog}>
                {'ЗАКАЗАТЬ'}
            </Button>
        </ButtonWrapper>
        <Dialog open={isOpenDialog} data-owner='dialog' css={css`${styles}`}>
            <DialogTitle>Отправить заявку на расчет стоимости / доставки</DialogTitle>
            <DialogContent>
                <CustomForm label={props.data.label} handleCloseDialog={handleCloseDialog}/>
            </DialogContent>
        </Dialog>
    </Root>
}
export default Row

const Root = styled.div`
width: 100%;
display: flex;
border-left: 1px solid darkgrey;
border-right: 1px solid darkgrey;
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
.mdc-dialog--content{
@media(max-width: 990px){ 
  height: 90vh;
  width: 82vw;
}
}
@media(max-width: 834px){
  flex-direction: column;
  align-items: flex-start;
}
`
const Wrapper = styled.div`
flex: 4;
display: flex;
@media(max-width: 834px){
  width: 100%;
  flex: unset;
}
`
const Label = styled.div`
flex: 1;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid darkgrey;
box-sizing: border-box;
`
const Description = styled.div`
flex: 3;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid darkgrey;
box-sizing: border-box;
`
const ButtonWrapper = styled.div`
width: 100%;
flex: 1;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid darkgrey;
 box-sizing: border-box;
@media(max-width: 834px){
  flex: 1;
  padding: 10px;
}
`
const Button = styled.div`
width: 80%;
min-width: 90px;
height: 40px;
background: #00a0e3;
display: flex;
align-items: center;
justify-content: center;
user-select: none;
cursor: pointer;
color: white;
font-weight: bold;
@media(max-width: 834px){
  min-width: unset;
  width: 100px;
  padding: 5px 10px;
  border-radius: 2px;
}
`
const styles = css`
@media(max-width: 798px){
.mdc-dialog__surface{
  width: 100vw;
  height: 100vh;
  }
}
`