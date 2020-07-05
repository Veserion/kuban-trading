import React, {useState} from "react";
import styled from "@emotion/styled";
import {TDataTable} from "./index";
import Form from './Form';
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

        <Dialog open={isOpenDialog}>
            <DialogTitle>My Dialog</DialogTitle>
            <DialogContent>
                {/*<MyDialogContent />*/}
            </DialogContent>
            <DialogFooter>
                <DialogButton onClick={handleCloseDialog} action='dismiss' >Dismiss</DialogButton>
                <DialogButton onClick={handleCloseDialog} action='accept' isDefault >Accept</DialogButton>
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