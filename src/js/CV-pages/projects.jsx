import React from 'react';
import Project from "./project.jsx";

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          pokemonLogos: ["html", "css", "js", "sass", "react", "redux"],
          portfolioLogos: ["html", "css", "js", "sass", "react"]
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
                            <Project logos = {this.state.portfolioLogos}/>
                        </div>
                    </div>
            </div>
    }
}

export default Projects;