//presets
import React from 'react';

//importing components
import AboutMe from "./about-me.jsx";
import Projects from "./projects.jsx";
import PersonalInfo from "./personal-info.jsx";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: []
        }

    }

    render () {
        switch(this.props.renderScreen) {
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
                return null
        }
    }
}

export default Content;