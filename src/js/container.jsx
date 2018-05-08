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
            title: "Projects",
            titlesArray: ["AboutMe", "Projects", "PersonalInfo"],
            flexID: "container-animation-flex",
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

    // timeoutID = setTimeout(() => {
    //     this.setState ({
    //         flexID: "container-website-flex"
    //     })
    // },8500);

    // ContainerRender = () => {
    //     if (this.state.flexID === "container-animation-flex") {
    //         return  <div className = "animation-wrapper">
    //                 <div className = "line"/>
    //                 <h1 className = "name" >mateusz kowalski</h1>
    //                 <h1 className = "title">Junior Front-End Developer</h1>
    //                 <div className = "animation-circles">
    //                     <div className = "S1"/>
    //                     <div className = "S2"/>
    //                     <div className = "S3"/>
    //                 </div>
    //             </div>
    //     } else {
    //         return <div className = "container-wrapper" id ={this.state.flexID}>
    //             <Content MenuClick = {this.handleMenuClick} renderScreen = {this.state.title}/>
    //             <Terminal titleText = {this.state.title} renderInfo = {this.handleInput}/>
    //         </div>
    //     }
    // };

    render () {
        return <div className = "container" id = {this.state.flexID}>
                <Content MenuClick = {this.handleMenuClick} renderScreen = {this.state.title}/>
                <Terminal titleText = {this.state.title} renderInfo = {this.handleInput}/>
        </div>
    }
}

export default Container;