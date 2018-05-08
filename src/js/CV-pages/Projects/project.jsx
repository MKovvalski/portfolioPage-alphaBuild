import React from 'react';

class Project extends React.Component {

    renderTechList = () => {
      return this.props.techList.map( (tech, i) => {
          switch (tech) {
              case "html":
                  return <li className = "tech-logo" key = {i}><img className = "tech-img" src = "imgs/svg/html-5.svg" alt= "html"/></li>;
                  break;
              case "css":
                  return <li className = "tech-logo" key = {i}><img className = "tech-img" src = "imgs/svg/css-3.svg" alt= "css"/></li>;
                  break;
              case "js":
                  return <li className = "tech-logo" key = {i}><img className = "tech-img" src = "imgs/svg/logo-javascript.svg" alt= "js"/></li>;
                  break;
              case "sass":
                  return <li className = "tech-logo" key = {i}><img className = "tech-img" src = "imgs/svg/sass-logo-2.svg" alt= "sass"/></li>;
                  break;
              case "react":
                  return <li className = "tech-logo" key = {i}><img className = "tech-img" src = "imgs/svg/logo.svg" alt= "react"/></li>;
                  break;
              case "redux":
                  return <li className = "tech-logo" key = {i}><img className = "tech-img" src = "imgs/svg/redux.svg" alt= "redux"/></li>;
                  break;
              default:
                  return null
          }
      })
    };

    render () {
        return <article className = "project">
                    <h3 className = "project-title">{this.props.projectTitle}</h3>
                    <a href = {this.props.projectLiveLink}>
                        <img className = "project-peek" src= {this.props.projectImgSrc} alt= ""/>
                    </a>
                    <a href= {this.props.projectGithubLink}><img className = "project-github-link" src = "imgs/svg/github.svg" alt= "github-logo" target = "_blank"/></a>
                    <ul className = "project-tech-list">
                        {this.renderTechList()}
                    </ul>
                    <p className = "project-description">
                        {this.props.description}
                    </p>
        </article>
    }
}

export default Project