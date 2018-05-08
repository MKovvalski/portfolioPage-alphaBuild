//presets
import React from 'react';

//importing components
import Terminal from "./terminal.jsx";
import Content from "./content.jsx";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animateId: "",
            screenToRender: "",
            title: "AboutMe",
            titlesArray: ["AboutMe", "Projects", "PersonalInfo"],
        }
    }

    MenuClickSetState = (page) => {
        this.setState({
            title: page,
        });
    };

    handleMenuClick = (page) => {
      switch(page) {
          case "AboutMe":
             this.MenuClickSetState(page);
          break;
          case "Projects":
              this.MenuClickSetState(page);
              break;
          case "PersonalInfo":
              this.MenuClickSetState(page);
              break;
          default:
              return null
      }
    };

    handleInput = (screen, title) => {
            this.setState ({
                screenToRender: screen,
                title: title,
            })
    };

    render () {
        return <div className = "container" id = {this.state.flexID}>
            <Content MenuClick = {this.handleMenuClick} renderScreen = {this.state.title}/>
            <Terminal animateId = {this.state.animateId} titleText = {this.state.title} renderInfo = {this.handleInput}/>
        </div>
    }
}

export default Container;