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
        return <div className = "main-container">
            <div className = "animation-wrapper">
                <div className = "S1"/>
                <div className = "S2"/>
                <div className = "S3"/>
            </div>
            {/*<Content MenuClick = {this.handleMenuClick} renderScreen = {this.state.title}/>*/}
            {/*<Terminal titleText = {this.state.title} renderInfo = {this.handleInput}/>*/}
        </div>
    }
}

export default Container;