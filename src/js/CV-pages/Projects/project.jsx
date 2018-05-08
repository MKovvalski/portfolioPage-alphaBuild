import React from 'react';

class Project extends React.Component {

    renderTechList = () => {
      this.props.techList.map( () => {

      })
    };

    render () {
        return <article className = "project">
                    <a href = {this.props.projectLiveLink}>
                        <img className = "project-peek" src= {this.props.projectImgSrc} alt= {this.props.projectImgAlt}/>
                    </a>
                    <a href= {this.props.projectGithubLink}><img src = "/" alt= "github-logo"/></a>
                    {/*github src będzie stałe dla wszystkich projektów - nie potrzebuje src*/}
                    <h3 className = "project-title">{this.props.projectTitle}</h3>
                    <ul className = "project-tech-list">
                        tutaj wyrenderować logo dać switch z odpowiednimi href dla img
                    </ul>
                    <p className = "project-description">
                        {this.props.description}
                    </p>
        </article>
    }
}

export default Project