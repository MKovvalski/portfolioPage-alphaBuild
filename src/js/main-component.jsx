//presets
import React from 'react';

//importing components
import Container from "./container.jsx"

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render () {
        return <div className = "main-component">
                <Container/>
        </div>
    }
}

export default MainComponent;

