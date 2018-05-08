import React from 'react';

class Education extends React.Component {
    render () {
        return <article className = "info-category">
            <h3 className = "info-category-title">Education</h3>
            <ul className = "category-elements-list">
                <li className = "education-step">
                    <h4 className = "step-title">Kozminski University</h4>
                    <span className = "step-data">Project Management | September,2018 – June,2020</span>
                    <p className = "step-description">Master in Project Management will be of great use as I hope to progress in my career</p>
                </li>
                <li className = "education-step">
                    <h4 className = "step-title">Coders Lab</h4>
                    <span className = "step-data">JavaScript Developer: React | December,2017 – January,2018</span>
                    <p className = "step-description">Warsaw based programming Boot-Camp containing of 320 hours of coding through 9 weeks</p>
                </li>
                <li className = "education-step">
                    <h4 className = "step-title">Kozminski Universtiy</h4>
                    <span className = "step-data">Enterprise Management | September,2014 – June,2017</span>
                    <p className = "step-description">Licentiate in risk in project management in event industry</p>
                </li>
            </ul>
        </article>
    }
}

export default Education;