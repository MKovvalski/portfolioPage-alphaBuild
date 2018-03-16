import React from 'react';
import Skill from "./text.jsx";

class Skills extends React.Component {
    render () {
        return <div className = "category">
                    <h2>Skills</h2>
                    <div className = "category-info-border">
                        <div className = "category-info-inner-border">
                            <div className = "category-info">
                                <div className = "category-info-wrapper">
                                    <Skill skillName = "Programming Languages" skillText = "JavaScript, ES6, HTML5, CSS3"/>
                                    <Skill skillName = "Frameworks/Libraries" skillText = "React, Redux, JQuery"/>
                                    <Skill skillName = "Toolkits/Module-bundlers" skillText = "Gulp,Webpack"/>
                                    <Skill skillName = "IDE" skillText = "WebStorm"/>
                                    <Skill skillName = "Others" skillText = "Sass, RWD"/>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    }
}

export default Skills;