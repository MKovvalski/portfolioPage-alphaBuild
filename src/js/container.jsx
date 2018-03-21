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
            menuDisplay: "display-none"
        }
    }

    MenuClickSetState = (page) => {
        this.setState({
            title: page,
            menuDisplay: "display-none"
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

    generateMenuList = () => {
     return this.state.titlesArray.map((page) => {
         return <li className = "mobile-menu-list-position" key = {page} onClick = {() => {this.handleMenuClick(page)}}>{page}</li>
     })
   };

    handleInput = (screen, title) => {
            this.setState ({
                screenToRender: screen,
                title: title,
            })
    };

    handleMenuDisplay = () => {
      switch (this.state.menuDisplay) {
          case "display-none":
              this.setState({
                  menuDisplay: "display-block"
              });
              break;
          case "display-block":
              this.setState({
                  menuDisplay: "display-none"
              });
              break;

          default:
              return null;
      }
    };

    render () {
        return <div className = "main-container">
            <nav className = "mobile-menu">
                    <div className = "mac-circles">
                        <div className = "circle-1"/>
                        <div className = "circle-2"/>
                        <div className = "circle-4"/>
                    </div>
                    <h3>
                        {this.state.title}
                    </h3>
                    <div className = "menu-burger" onClick = {() => this.handleMenuDisplay()}>
                        <div className = "menu-bar"/>
                        <div className = "menu-bar"/>
                        <div className = "menu-bar"/>
                    </div>
            </nav>
            <ul className = "mobile-menu-list" id = {this.state.menuDisplay} >
                {this.generateMenuList()}
            </ul>
            <Content renderScreen = {this.state.title}/>
            <Terminal titleText = {this.state.title} renderInfo = {this.handleInput}/>
        </div>
    }
}

export default Container;