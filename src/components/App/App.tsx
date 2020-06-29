import React from 'react';
import styled from '@emotion/styled'
import Navbar from '../ReusableComponents/Navbar';
import MainPage from "../MainPage";
import {Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

export default class App extends React.Component {
    render() {
        return <Router history={history}>
            <Root>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    {/*<Route exact path="/"*/}
                </Switch>
            </Root>
        </Router>
    }
}

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
font-family: 'Roboto', sans-serif;
`