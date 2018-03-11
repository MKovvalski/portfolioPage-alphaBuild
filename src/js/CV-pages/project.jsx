import React from 'react';

class Project extends React.Component {

    renderLogos = () => {
      return this.props.logos.map((logo) => {
          const a = "small-logo " + logo;
          return <div key = {logo} className = {a}></div>
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
                        <ul className = "test">
                            {this.renderLogos()}
                        </ul>
                    </div>
        </div>
    }
}

export default Project