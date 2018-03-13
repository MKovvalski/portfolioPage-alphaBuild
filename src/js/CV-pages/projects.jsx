import React from 'react';
import Project from "./project.jsx";

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          pokemonLogos: ["react", "redux", "js", "sass"],
          portfolioLogos: ["react", "js", "sass"],
          sitOnChairLogos: ["js", "html", "cssd"]
        }
    }
    render () {
        return <div className = "container">
                    <div className = "projects">
                        <div className = "col-3">
                            <Project logos = {this.state.pokemonLogos}/>
                        </div>
                        <div className = "col-3">
                            <Project logos = {this.state.portfolioLogos}/>
                        </div>
                        <div className = "col-3">
                            <Project logos = {this.state.sitOnChairLogos}/>
                        </div>
                    </div>
            </div>
    }
}

export default Projects;