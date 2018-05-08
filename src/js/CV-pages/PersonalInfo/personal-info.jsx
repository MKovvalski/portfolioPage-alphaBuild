import React from 'react';
import Skills from './skills.jsx';
import Education from "./education.jsx";
import Experience from "./experience.jsx";

class PersonalInfo extends React.Component {
    render () {
        return <section className = "main-personal-info">
            <h2 className = "visually-hidden">personalInfo</h2>
            <div className = "information">
                <Skills/>
                <Education/>
                <Experience/>
            </div>
        </section>
    }
}

export default PersonalInfo;