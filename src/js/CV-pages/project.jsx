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
                        picture1
                    </div>
                    <p>
                    </p>
                    <div className = "project-technologies">
                        <ul className = "project-list-of-tech">
                            {this.renderLogos()}
                        </ul>
                    </div>
        </div>
    }
}

export default Project