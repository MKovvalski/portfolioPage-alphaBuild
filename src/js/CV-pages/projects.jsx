import React from 'react';
import Project from "./project.jsx";

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          pokemonLogos: ["react", "redux", "js", "sass"],
          portfolioLogos: ["react", "js", "sass"],
          sitOnChairLogos: ["js", "html", "css"],
          pokemonDesc: "The Pokemon-Game recreates turn based battles of Pokemon, including all attack mechanics. The game bases on JS and was build in react framework with support of redux library. In the future, I am palnning to add more seperate animations for all pokemon moves.",
          portfolioDesc: "My Portfolio Page serves dual purpose - to allow potential employer to know be better as well as showcase my skills and projects. Site's navigation revolves around Website was build with React framework and Sass style sheet language.",
          sitOnChairDesc: ""

        }
    }
    render () {
        return <div className = "container">
                    <div className = "projects">
                        <div className = "col-3">
                            <Project desc = {this.state.pokemonDesc} project = "Pokemon-Game" logos = {this.state.pokemonLogos}/>
                        </div>
                        <div className = "col-3">
                            <Project desc = {this.state.portfolioDesc} project = "portfolio-Page" logos = {this.state.portfolioLogos}/>
                        </div>
                        <div className = "col-3">
                            <Project project = "sitOnChair" logos = {this.state.sitOnChairLogos}/>
                        </div>
                    </div>
            </div>
    }
}

export default Projects;