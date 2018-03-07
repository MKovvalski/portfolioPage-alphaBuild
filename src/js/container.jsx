//presets
import React from 'react';

//importing components
import Terminal from "./terminal.jsx";
import Content from "./CV-pages/content.jsx";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenToRender: "",
            title: "PortfolioPage",
        }
    }

   handleInput = (screen, title) => {
            this.setState ({
                screenToRender: screen,
                title: title,
            })
    };

    render () {
        return <div className = "main-container">
            <Terminal titleText = {this.state.title} renderInfo = {this.handleInput}/>
            <Content renderScreen = {this.state.title}/>
        </div>
    }
}

export default Container;