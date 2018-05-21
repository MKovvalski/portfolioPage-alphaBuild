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
            title: "AboutMe",
            mobileNavWidth: "main-nav"
        }
    }

    handleInput = (screen, title) => {
            this.setState ({
                screenToRender: screen,
                title: title,
            })
    };

    onClickMenu = (e) => {
        switch(e.target.innerHTML) {
            case "About Me":
                this.setState({
                    title: "AboutMe"
                });
                break;
            case "Projects":
                this.setState({
                    title: "Projects"
                });
                break;
            case "Personal Info":
                this.setState({
                    title: "PersonalInfo"
                });
                break;
            default:
                return null
        }
        this.setState({
            mobileNavWidth: "main-nav"
        });
    };

    toggleMenu = () => {
        switch (this.state.mobileNavWidth) {
            case "main-nav":
            this.setState({
                mobileNavWidth: this.state.mobileNavWidth +" main-nav-expanded"
            });
            break;
            case "main-nav main-nav-expanded":
                this.setState({
                    mobileNavWidth: "main-nav"
                });
                break;
            default:
                return null
        }
    };

    render () {
        return <div className = "container">
            <nav className = {this.state.mobileNavWidth}>
                <button onClick={() => this.toggleMenu()} className = "nav-button">
                    <span className ="visually-hidden">menu</span>
                    <span className = "burger-bar"/>
                    <span className = "burger-bar"/>
                    <span className = "burger-bar"/>
                </button>
                <ul className = "nav-list">
                    <li><a className = "nav-link" onClick={(e) => this.onClickMenu(e)} href="#">About Me</a></li>
                    <li><a className = "nav-link" onClick={(e) => this.onClickMenu(e)} href="#">Projects</a></li>
                    <li><a className = "nav-link" onClick={(e) => this.onClickMenu(e)} href="#">Personal Info</a></li>
                </ul>
            </nav>
            <Content MenuClick = {this.handleMenuClick} renderScreen = {this.state.title}/>
            <Terminal titleText = {this.state.title} renderInfo = {this.handleInput}/>
        </div>
    }
}

export default Container;