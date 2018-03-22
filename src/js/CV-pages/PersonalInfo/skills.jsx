import React from 'react';
import Skill from "./category-content.jsx";

class Skills extends React.Component {
    render () {
        return <div className = "category">
                    <h2>Skills</h2>
                    <div className = "category-info-border">
                        <div className = "category-info-inner-border">
                            <div className = "category-info">
                                <div className = "category-info-wrapper">
                                    <Skill class = "category-skill" skillName = "Programming Languages" skillText = "JavaScript, ES6, HTML5, CSS3"/>
                                    <Skill class = "category-skill" skillName = "Frameworks/Libraries" skillText = "React, Redux, JQuery"/>
                                    <Skill class = "category-skill" skillName = "Toolkits/Module-bundlers" skillText = "Gulp,Webpack"/>
                                    <Skill class = "category-skill" skillName = "IDE" skillText = "WebStorm"/>
                                    <Skill class = "category-skill" skillName = "Others" skillText = "Sass, RWD"/>
                                    <Skill class = "category-skill" skillName = "Currently Learning" skillText = "React-Morph,VUE.JS "/>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    }
}

export default Skills;