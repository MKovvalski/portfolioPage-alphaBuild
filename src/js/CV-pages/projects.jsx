import React from 'react';
import Project from "./project.jsx";

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          pokemonLogos: ["react", "redux", "js", "sass"],
          portfolioLogos: ["react", "js", "sass"],
          sitOnChairLogos: ["js", "html", "css"],
          pokemonDesc: "a"
        }
    }
    render () {
        return <div className = "container">
                    <div className = "projects">
                        <div className = "col-3">
                            <Project project = "pokemonGame" logos = {this.state.pokemonLogos}/>
                        </div>
                        <div className = "col-3">
                            <Project project = "portfolioPage" logos = {this.state.portfolioLogos}/>
                        </div>
                        <div className = "col-3">
                            <Project project = "sitOnChair" logos = {this.state.sitOnChairLogos}/>
                        </div>
                    </div>
            </div>
    }
}

export default Projects;