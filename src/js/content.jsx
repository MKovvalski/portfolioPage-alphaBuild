//presets
import React from 'react';

//importing components
import AboutMe from "./CV-pages/AboutMe/about-me.jsx";
import Projects from "./CV-pages/Projects/projects.jsx";
import PersonalInfo from "./CV-pages/PersonalInfo/personal-info.jsx";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuDisplay: "none",
            titlesArray: ["AboutMe", "Projects", "PersonalInfo"]
        }

    }

    handleMenuClick = (page) => {
      if (typeof this.props.MenuClick === "function") {
          this.props.MenuClick(page);
      }
      this.setState ({
         menuDisplay: "none"
      })
    };

    handleMenuDisplay = () => {
      switch (this.state.menuDisplay) {
          case "none":
              this.setState({
                  menuDisplay: "block"
              });
              break;
          case "block":
              this.setState({
                  menuDisplay: "none"
              });
              break;
      }
    };

    generateMenuList = () => {
        return this.state.titlesArray.map((page) => {
            return <li className = "mobile-menu-list-position" key = {page} onClick={() => this.handleMenuClick(page)}>{page}</li>
        })
    };

    handleRender = (renderScreen) => {
        switch(renderScreen) {
            case "AboutMe":
                return <AboutMe/>;
                break;
            case "Projects":
                return <Projects/>;
                break;
            case "PersonalInfo":
                return <PersonalInfo/>;
                break;
            default:
                return <AboutMe/>;
        }
    };

    render () {
       return <div className = "content">
           <nav className = "mobile-menu">
               <div className = "mac-circles">
                   <div className = "circle-1"/>
                   <div className = "circle-2"/>
                   <div className = "circle-4"/>
               </div>
               <h3>{this.props.renderScreen}</h3>
               <div className = "menu-burger" onClick = {() => this.handleMenuDisplay()}>
                   <div className = "menu-bar"/>
                   <div className = "menu-bar"/>
                   <div className = "menu-bar"/>
               </div>
           </nav>
           <ul className = "mobile-menu-list" style = {{display: this.state.menuDisplay}}>
               {this.generateMenuList()}
           </ul>
           <header>
               <div className = "circle-1"/>
               <div className = "circle-2"/>
               <div className = "circle-4"/>
               <h1>{this.props.renderScreen}</h1>
           </header>
           <div className = "main-content">
               {this.handleRender(this.props.renderScreen)}
           </div>
       </div>
    }
}

export default Content;