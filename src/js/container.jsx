//presets
import React from 'react';

//importing components
import Terminal from "./terminal.jsx";
import Content from "./CV-pages/content.jsx";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenToRender: ""
        }
    }

   handleInput = (screen) => {
            this.setState ({
                screenToRender: screen
            })
    };

    render () {
        console.log(this.state.screenToRender);
        return <div>
            <Terminal renderInfo = {this.handleInput}/>
            <Content renderScreen = {this.state.screenToRender}/>
        </div>
    }
}

export default Container;