import React from 'react';
import Skills from './skills.jsx';
import Education from "./education.jsx";
import Experience from "./experience.jsx";

class PersonalInfo extends React.Component {
    render () {
        return <div className = "container">
                <div className = "personalInfo">
                    <div className = "col-3">
                        <Skills/>
                    </div>
                    <div className = "col-3">
                        <Education/>
                    </div>
                    <div className = "col-3">
                       <Experience/>
                    </div>

                </div>
        </div>
    }
}

export default PersonalInfo;