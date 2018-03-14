import React from 'react';

class Project extends React.Component {

    renderLogos = () => {
      return this.props.logos.map((logo) => {
          const a = "small-logo " + logo;
          return <li key = {logo} className = {a}></li>
      })
    };

    render () {
        return <div className = "project">
                    <div className = "project-preview">
                        <div className = {this.props.project}/>
                    </div>
                    <h2>{this.props.project}</h2>
                    <div className = "project-technologies">
                        <ul className = "project-list-of-tech">
                            {this.renderLogos()}
                        </ul>
                    </div>
                    <div className = "project-description">
                        <p>
                            {this.props.desc}
                        </p>
                    </div>
        </div>
    }
}

export default Project