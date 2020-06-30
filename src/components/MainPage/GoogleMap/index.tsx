import React from "react";
import styled from "@emotion/styled";
import {Map, Marker, IInfoWindowProps, GoogleApiWrapper, GoogleAPI} from 'google-maps-react';

interface IProps
{
    google: GoogleAPI
}

export default class GoogleMap extends React.Component<IProps> {
    render() {
        return <Root>
            <Map google={this.props.google}
                 style={{width: '100%', height: '100%', position: 'relative'}}
            >
                <Marker name={'Your position'} position={{lat: 45.0254292, lng: 38.970973}}/>
            </Map>
        </Root>
    }
}
const Root = styled.div``