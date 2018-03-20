//presets
import React from 'react';

//importing components
import AboutMe from "./CV-pages/AboutMe/about-me.jsx";
import Projects from "./CV-pages/Projects/projects.jsx";
import PersonalInfo from "./CV-pages/PersonalInfo/personal-info.jsx";

class Content extends React.Component {

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