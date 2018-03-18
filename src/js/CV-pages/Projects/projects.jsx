import React from 'react';
import Project from "./project.jsx";

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          pokemonLogos: ["react", "redux", "js", "sass"],
          portfolioLogos: ["react", "js", "sass"],
          sitOnChairLogos: ["js", "html", "css"],
          pokemonDesc: "The Pokemon-Game recreates turn based battles of Pokemon, including all attack mechanics. The game bases on JS and was build in react framework with support of redux library. In the future, I am planning to add separate animations for all pokemon moves and expand battle mechanics.",
          portfolioDesc: "My Portfolio Page serves dual purpose - to allow potential employer to know be better as well as showcase my skills and projects. Site's navigation revolves around recreation of terminal and commands used in it. Main tech used in website was React framework and Sass style language.",
          sitOnChairDesc: "Sit-on-Chair was the first project during Coders-Lab Boot Camp. The Website was build entirely in HTML, pure CSS and JS. Despite it being so simple, it allowed me to, for the first time, used combine skills of all mentioned before languages. I was planning to rewrite site's JS script and implement Sass.",
          pokemonLink: "https://github.com/MateuszKowalskiCL/PokemonGame-simplified",
          portfolioLink: "https://github.com/MateuszKowalskiCL/portfolioPage",
          sitOnChairLink: "https://github.com/MateuszKowalskiCL/sitOnChairPrime",
          pokemonWebLink: "https://mateuszkowalskicl.github.io/PokemonGame-simplified/",
          portfolioWebLink: "none",
          sitOnChairWebLink: "https://mateuszkowalskicl.github.io/sitOnChairPrime/"
        }
    }
    render () {
        return <div className = "container">
                    <div className = "projects">
                        <div className = "col-3">
                            <Project webLink = {this.state.pokemonWebLink} hubLink = {this.state.pokemonLink} desc = {this.state.pokemonDesc} project = "Pokemon-Game" logos = {this.state.pokemonLogos}/>
                        </div>
                        <div className = "col-3">
                            <Project webLink = {this.state.portfolioWebLink} hubLink = {this.state.portfolioLink} desc = {this.state.portfolioDesc} project = "Portfolio-Page" logos = {this.state.portfolioLogos}/>
                        </div>
                        <div className = "col-3">
                            <Project webLink = {this.state.sitOnChairWebLink} hubLink = {this.state.sitOnChairLink} desc = {this.state.sitOnChairDesc} project = "Sit-On-Chair" logos = {this.state.sitOnChairLogos}/>
                        </div>
                    </div>
        </div>
    }
}

export default Projects;