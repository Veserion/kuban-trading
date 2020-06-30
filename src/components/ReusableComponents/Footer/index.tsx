import React from "react";
import styled from "@emotion/styled";
import logo from '../../../assets/footer/f_logo.png'
import address from '../../../assets/footer/f_adress.png'
import mail from '../../../assets/footer/f_mail.png'
import tel from '../../../assets/footer/f_tel.png'

const Footer: React.FC = () => {
    return <Root>
        <Body>
            <Logo/>
        </Body>
    </Root>
}
export default Footer

const Root = styled.div`
width: 100vw
background: #00a0e3;
border-top: 3px solid rgb(0,125,190);
`
const Body = styled.div`
width: 82vw;

`
const Logo = styled.a`
background-image: ${logo};
background-size: 100% 100%;
width: 6vw;
height: 2.4315789474vw;
`