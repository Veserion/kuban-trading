import React from 'react'
import styled from '@emotion/styled'
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

    componentDidMount(): void {
        document.addEventListener('mousedown', this.handleCloseMenu)
    }

    componentWillUnmount(): void {
        document.removeEventListener('mousedown', this.handleCloseMenu);
    }

    handleCloseMenu = (event: any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (this.state.isOpenedMenu && !(path.some((element: any) => element.dataset && element.dataset.owner === 'menu'))) {
            this.setState({isOpenedMenu: false})
        }
    }

    render() {
        const {isOpenedMenu} = this.state;
        const screenWidth = window.innerWidth
        return <Root data-owner='menu'>
            <WrapperRoot>
                <WrapperLogo href={'/'}>
                    <Logo src={logo}/>
                </WrapperLogo>
                <Wrapper>
                    <Contacts/>
                    {screenWidth > 990
                        ? <Menu/>
                        : isOpenedMenu && <Menu/>}
                </Wrapper>
                <BurgerIcon onClick={this.toggleMenu}/>
            </WrapperRoot>
        </Root>
    }
}

const Root = styled.div`
width: 100vw;
border-bottom: 2px solid rgb(0,161,233);
box-sizing: border-box;
z-index: 10;
`
const WrapperRoot = styled.div`
width: 82vw;
height: 100%;
padding: 0 9vw;
display: flex;
justify-content: space-between;
align-items: flex-end;
font-family: 'Roboto', sans-serif;
position: relative;
@media(max-width: 990px){
  align-items: center ;
}
`
const WrapperLogo = styled.a`
width: calc(20vw - 16px);
height: calc(100% - 16px);
padding: 8px;
display: flex;
align-items: center;
justify-content: center;
@media(max-width: 642px){
  width: 100px;
  height: auto;
}
`
const Logo = styled.img`
max-width: 90%;
max-height: 80%;
@media(max-width: 642px){
  max-width: unset;
  max-height: unset;
  width: 100px;
}
`
const Wrapper = styled.div`
@media(min-width: 991px){
  width: 62vw;
}
width: auto;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-end;
z-index: 0;
position: relative;
@media(max-width: 990px){
  align-items: flex-end;
  width: 40vw;
}
`
