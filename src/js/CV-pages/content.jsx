//presets
import React from 'react';

//importing components
import AboutMe from "./about-me.jsx";
import Projects from "./projects.jsx";
import PersonalInfo from "./personal-info.jsx";
import MainPage from "./main-page.jsx";

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
                return <MainPage/>;
        }
    };

    render () {
       return <div className = "content">
           {this.handleRender(this.props.renderScreen)}
       </div>
    }
}

export default Content;