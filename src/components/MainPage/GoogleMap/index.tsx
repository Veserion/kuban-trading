import React from "react";
import styled from "@emotion/styled";


export default class GoogleMap extends React.Component {
    render() {
        return <Root>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.975000005767!2d38.96878431516636!3d45.025432970634355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04fba428ebb75%3A0xd11deaa01dd8650f!2z0JPQuNC80L3QsNC30LjRh9C10YHQutCw0Y8g0YPQuy4sIDY1LCAyMDQsINCa0YDQsNGB0L3QvtC00LDRgCwg0JrRgNCw0YHQvdC-0LTQsNGA0YHQutC40Lkg0LrRgNCw0LksIDM1MDAwMA!5e0!3m2!1sru!2sru!4v1593535744463!5m2!1sru!2sru"
                width="600" height="450" frameBorder="0" style={{border: 'none'}} allowFullScreen={true}
                aria-hidden="false"
                title={'GoogleMaps'}
                tabIndex={0}></iframe>
        </Root>
    }
}

const Root = styled.div`
width: 82vw;
max-width: 1170px;
>iframe {
  width: 100%;
}
`