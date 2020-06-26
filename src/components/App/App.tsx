import React from 'react';
import styled from '@emotion/styled'
import Navbar from '../ReusableComponents/Navbar';
import MainPage from "../MainPage";

export default class App extends React.Component {
  render(){
      return <Root>
          <Navbar/>
          <MainPage/>
      </Root>
  }
}

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
font-family: sans-serif;
`