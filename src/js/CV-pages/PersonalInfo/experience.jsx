import React from 'react';

class Experience extends React.Component {
    render () {
        return <article className = "info-category">
            <h3 className = "info-category-title">experience</h3>
            <ul className = "category-elements-list">
                <li className = "career-step">
                    <h4 className = "step-title">Tajemnice Imprez</h4>
                    <span className = "step-data">Event Manager | January, 2017 - Current</span>
                    <p className = "step-description">Managing events alongside other managers while maintaining previous responsibilities</p>
                </li>
                <li className = "career-step">
                    <h4 className = "step-title">Tajemnice Imprez</h4>
                    <span className = "step-data">Event Manager Assistant | October,2014 – December,206</span>
                    <p className = "step-description">In charge of assembling event team and assigning tasks given by event manager</p>
                </li>
            </ul>
        </article>
    }
}

export default Experience;