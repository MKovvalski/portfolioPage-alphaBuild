import React from 'react';

class Skill extends React.Component {
    render () {
        return <div className = "category-skill">
            <h3>{this.props.skillName}</h3>
            <p>{this.props.skillText}</p>
        </div>
    }
}

export default Skill;