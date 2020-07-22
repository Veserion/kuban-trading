/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import {css, jsx} from '@emotion/core'
import Carousel from './Carousel'
import AboutCompany from "./AboutCompany";
import OurPossibilities from "./OurPossibilities";
import Fertilizers from "./Fertilizers";
import OurPartners from './OurPartners';
import GoogleMap from "./GoogleMap";
import {Parallax} from "react-parallax";
import bg from '../../assets/back.jpg'
import Navigation from "../ReusableComponents/Navigation";
import Dialog, {DialogContent, DialogTitle} from "@material/react-dialog";
import CustomForm from "../ShopPage/Table/CustomForm";
import {animateScroll as scroll} from 'react-scroll'
import toTop from '../../assets/logos/toTop.png'
import {NotificationContainer, NotificationManager} from 'react-notifications';

interface IState {
    isOpenDialog: boolean
}

export default class MainPage extends React.Component<{}, IState> {
    state = {isOpenDialog: false}

    scrollToTop() {
        scroll.scrollToTop()
    }

    handleCloseDialog = () => this.setState({isOpenDialog: false})
    handleCloseDialog2 = (event: any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (this.state.isOpenDialog && !(path.some((element: any) => element.dataset && element.dataset.owner === 'dialog'))) {
            this.handleCloseDialog()
        }
    }
    handleOpenDialog = () => this.setState({isOpenDialog: true})

    handleNotification = (type: string, message: string) => {
        return () => {
            switch (type) {
                case 'success':
                    NotificationManager.success(message, '');
                    console.log('success')
                    break;
                case 'error':
                    NotificationManager.error(message, 3000);
                    console.log('error')
                    break;
            }
            NotificationManager.error(message, 3000);
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleCloseDialog2)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleCloseDialog2)
    }

    render() {
        return <Root>
            <Wrapper>
                <Carousel/>
                <Navigation currentPath={'/'}/>
                <Button onClick={this.handleOpenDialog}>
                    {'ОТПРАВИТЬ ЗАЯВКУ'}
                </Button>
                <Parallax bgImage={bg} strength={500} css={css`width: 100vw; display: flex; justify-content: center;`}>
                    <AboutCompany/>
                    <Fertilizers handleOpenDialog={this.handleOpenDialog}/>
                    <OurPossibilities handleOpenDialog={this.handleOpenDialog}/>
                </Parallax>
                <OurPartners/>
                <GoogleMap/>
            </Wrapper>
            <Dialog open={this.state.isOpenDialog} data-owner='dialog' css={css`${styles}`}>
                <DialogTitle>Отправить заявку на расчет стоимости / доставки</DialogTitle>
                <DialogContent>
                    <CustomForm label={''} handleCloseDialog={this.handleCloseDialog}
                                handleNotification={this.handleNotification}/>
                </DialogContent>
            </Dialog>
            <GoTopButton src={toTop} onClick={this.scrollToTop}/>
            <NotificationContainer/>
        </Root>
    }
}

const Root = styled.div`
display: flex;
#mdc-dialog{
  z-index: 10;
}
.mdc-dialog__surface {
    width: 60vw;
    min-height: 60vh;
    max-width: unset !important;
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
  height: 100vh;
  width: 100vw;
}
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

const Wrapper = styled.div`
width: 100%;
max-width: 1170px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
.react-parallax-content{
display: flex;
flex-direction: column;
align-items: center;
}
`

const GoTopButton = styled.img`
position: fixed;
width: 44px;
height: 28px;
bottom: 4vw;
left: 4vw;
border-radius: 50%;
cursor: pointer;
background-color: #00a0e3;
border-radius: 5px 5px 0px 0px;
@media (max-width: 1074px){
    display: none;
}
`
const Button = styled.div`
width: 82vw;
height: 40px;
margin-top: 0px;
margin-bottom: 50px;
padding: 0;
background: #00a0e3;
display: flex;
align-items: center;
justify-content: center;
user-select: none;
color: white;
font-weight: bold;
cursor: pointer;
@media(max-width: 834px){
  min-width: unset;
  padding: 5px 10px;
  border-radius: 2px;
}
@media(min-width: 1427px){
  width: 1170px;
}
`