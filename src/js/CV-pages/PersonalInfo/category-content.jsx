import React from 'react';

class Skill extends React.Component {
    render () {
        return <div className = {this.props.class}>
            <h3>{this.props.skillName}</h3>
            <h4>{this.props.skillName2}</h4>
            <p>{this.props.skillText}</p>
        </div>
    }
}

export default Skill;