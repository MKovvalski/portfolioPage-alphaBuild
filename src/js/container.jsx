//presets
import React from 'react';

//importing components
import Terminal from "./terminal.jsx";
import Content from "./content.jsx";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenToRender: "",
            title: "MainPage",
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
            <Content renderScreen = {this.state.title}/>
            <Terminal style ={{animation: this.state.justifyContent}} titleText = {this.state.title} renderInfo = {this.handleInput}/>
        </div>
    }
}

export default Container;