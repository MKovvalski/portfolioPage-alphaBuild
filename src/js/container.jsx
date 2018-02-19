//presets
import React from 'react';

//importing components
import Terminal from "./terminal.jsx";
import Content from "./CV-pages/content.jsx";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render () {
        return <div>
            <Terminal/>
            <Content/>
        </div>
    }
}

export default Container;