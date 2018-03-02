//presets
import React from 'react';

//importing components
import AboutMe from "./about-me.jsx";
import Projects from "./projects.jsx";
import PersonalInfo from "./personal-info.jsx";

class Content extends React.Component {
    render () {
        switch(this.props.renderScreen) {
            case "cd AboutMe":
                return <AboutMe/>;
            break;
            case "cd Projects":
                return <Projects/>;
            break;
            case "cd PersonalInfo":
                return <PersonalInfo/>;
            break;
            default:
                return <div>base output</div>
        }
    }
}

export default Content;