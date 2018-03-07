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
            justifyContent: "none",
        }
    }



   handleInput = (screen, title, terminal) => {
            this.setState ({
                screenToRender: screen,
                title: title,
                justifyContent: terminal
            })
    };

    render () {
        return <div className = "main-container">
            <Terminal style ={{animation: this.state.justifyContent}} titleText = {this.state.title} renderInfo = {this.handleInput}/>
            {/*<Content renderScreen = {this.state.title}/>*/}
        </div>
    }
}

export default Container;