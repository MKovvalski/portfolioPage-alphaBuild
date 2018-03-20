import React from 'react';

class Project extends React.Component {

    renderLogos = () => {
      return this.props.logos.map((logo) => {
          const a = "small-logo " + logo;
          return <li key = {logo} className = {a}/>
      })
    };

    render () {
        return <div className = "project">
                    <div className = "project-preview">
                        <a href = {this.props.webLink} target = "_blank">
                            <div className = {this.props.project}/>
                        </a>
                    </div>
                    <div className = "wrapper">
                        <h2>
                            {this.props.project}
                            <a className = "github-link" href = {this.props.hubLink} target = "_blank">
                                <div className = "github-logo"/>
                            </a>
                        </h2>
                    </div>
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