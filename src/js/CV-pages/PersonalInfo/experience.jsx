import React from 'react';
import Job from './category-content.jsx';

class Experience extends React.Component {
    render () {
        return <div className = "category">
                    <h2>Exerience</h2>
                    <div className = "category-info-border">
                        <div className = "category-info-inner-border">
                            <div className = "category-info">
                                <div className = "category-info-wrapper">
                                    <Job class = "category-step" skillName = "Tajemnice Imprez" skillName2 = "Event Manager | January, 2017 - Current" skillText = "Managing events alongside other managers while maintaining previous responsibilities"/>
                                    <Job class = "category-step" skillName  = "Tajemnice Imprez" skillName2 = "Event Manager Assistant | October,2014 – December,206" skillText = "In charge of assembling event team and assigning tasks given by event manager"/>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    }
}

export default Experience;