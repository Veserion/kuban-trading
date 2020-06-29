/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import {css, jsx} from '@emotion/core'
import logo from '../../../assets/navbar/logo.png'
import Menu from "./Menu";
import Contacts from "./Contacts";
import BurgerIcon from "./BurgerIcon";

interface IProps {

}

interface IState {
    isOpenedMenu: boolean
}

export default class Navbar extends React.Component<IProps, IState> {

    state: IState = {isOpenedMenu: false}

    toggleMenu = () => this.setState({isOpenedMenu: !this.state.isOpenedMenu})


    render() {
        const {isOpenedMenu} = this.state;
        const screenWidth = window.innerWidth
        return <Root>
            <WrapperRoot>
                <WrapperLogo>
                    <Logo src={logo}/>
                </WrapperLogo>
                <Wrapper>
                    <Contacts/>
                    {screenWidth > 640
                        ? <Menu/>
                        : isOpenedMenu && <Menu/>}
                </Wrapper>
                <div onClick={this.toggleMenu}>
                    <BurgerIcon/>
                </div>
            </WrapperRoot>
        </Root>
    }
}

const Root = styled.div`
width: 100vw;
border-bottom: 2px solid rgb(0,161,233);
box-sizing: border-box;
`
const WrapperRoot = styled.div`
width: 82vw;
padding: 0 9vw;
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Roboto', sans-serif;
position: relative;
`
const WrapperLogo = styled.a`
width: 20vw;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Logo = styled.img`
max-width: 90%;
max-height: 80%;
z-index: 10;
`
const Wrapper = styled.div`
@media(min-width: 641px){
  width: 62vw
}
width: auto;
display: flex;
flex-direction: column;
align-items: flex-end;
z-index: 0;
position: relative;
`
