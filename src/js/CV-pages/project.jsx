import React from 'react';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    renderLogos = () => {
      return this.props.logos.map((logo) => {
          const a = "small-logo " + logo;
          return <li key = {logo} className = {a}></li>
      })
    };

    projectSlider = (counter) => {
        switch (counter) {
            case 0:
                return <div className = ""></div>
            break;
        }
    };
    
    render () {
        return <div className = "project">
                    <div className = "project-preview">
                        {this.projectSlider(this.state.counter)}
                    </div>
                    <div className = "project-technologies">
                        <ul className = "project-list-of-tech">
                            {this.renderLogos()}
                        </ul>
                    </div>
                    <p className = "project-description">
                    </p>
        </div>
    }
}

export default Project