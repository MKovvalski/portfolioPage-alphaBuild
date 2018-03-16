import React from 'react';
import TimeStep from './category-content.jsx';

class Education extends React.Component {
    render () {
        return <div className = "category">
                    <h2>Education</h2>
                    <div className = "category-info-border">
                        <div className = "category-info-inner-border">
                            <div className = "category-info">
                                <div className = "category-info-wrapper">
                                    <TimeStep class = "category-step" skillName = "Kozminski University" skillName2 = "Project Management | September,2018 – June,2020" skillText = "Master in Project Management will be of great use as I hope to progress in my career"/>
                                    <TimeStep class = "category-step" skillName = "Coders Lab" skillName2 = "JavaScript Developer: React | December,2017 – January,2018" skillText = "Warsaw based programming Boot-Camp containing of 320 hours of coding through 9 weeks"/>
                                    <TimeStep class = "category-step" skillName = "Kozminski Universtiy" skillName2 = "Enterprise Management | September,2014 – June,2017" skillText = "Licentiate in risk in project management in event industry"/>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    }
}

export default Education;