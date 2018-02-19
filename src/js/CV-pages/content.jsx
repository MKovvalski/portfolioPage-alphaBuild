//presets
import React from 'react';

//importing components
import AboutMe from "./about-me.jsx";
import Projects from "./projects.jsx";
import PersonalInfo from "./personal-info.jsx";

class Content extends React.Component {
    render () {
        return <div>
            <AboutMe/>
            <Projects/>
            <PersonalInfo/>
        </div>
    }
}

export default Content;