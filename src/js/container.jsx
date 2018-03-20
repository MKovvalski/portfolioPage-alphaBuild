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
            titlesArray: ["AboutMe", "Projects", "PersonalInfo"]
        }
    }

    handleMenuClick = (page) => {
      switch(page) {
          case "AboutMe":
              this.setState({
                  title: page
              });
          break;
          case "Projects":
              this.setState({
                  title: page
              });
              break;
          case "PersonalInfo":
              this.setState({
                  title: page
              });
              break;
          default:
              return null
      }
    };

    generateMenuList = () => {
     return this.state.titlesArray.map((page) => {
         return <li key = {page} onClick = {() => {this.handleMenuClick(page)}}>{page}</li>
     })
   };

    handleInput = (screen, title) => {
            this.setState ({
                screenToRender: screen,
                title: title,
            })
    };

    render () {
        return <div className = "main-container">
                <ul className = "mobile-menu">
                    {this.generateMenuList()}
                </ul>
            <Content renderScreen = {this.state.title}/>
            <Terminal titleText = {this.state.title} renderInfo = {this.handleInput}/>
        </div>
    }
}

export default Container;