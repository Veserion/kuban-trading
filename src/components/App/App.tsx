import React from 'react';
import styled from '@emotion/styled'
import Navbar from '../ReusableComponents/Navbar';

export default class App extends React.Component {
  render(){
      return <Root>
          <Navbar/>
      </Root>
  }
}

const Root = styled.div`
display: flex;
justify-content: center;
`