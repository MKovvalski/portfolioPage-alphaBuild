import React from 'react';
import Project from "./project.jsx";

const projects = [
    {
        title: "Pokemon Game",
        liveLink: "https://mateuszkowalskicl.github.io/PokemonGame-simplified/",
        projectImgSrc: "../../../../imgs/previews/Logo-Pokemon.png",
        projectImgAlt: "pokemon game",
        githubLink: "https://github.com/MateuszKowalskiCL/PokemonGame-simplified",
        techList: ["react", "redux", "js", "sass"],
        description: "My first take on combining React with Redux. Sass requires rework. App simulates Pokemon Battles and acurately recreated damage calculation mechanics.",
    },
    {
        title: "Old Portfolio Page",
        liveLink: "https://mateuszkowalskicl.github.io/portfolioPage-alphaBuild/",
        projectImgSrc: "../../../../imgs/previews/portfolio.png",
        projectImgAlt: "",
        githubLink: "https://github.com/MateuszKowalskiCL/portfolioPage",
        techList: ["react", "js", "sass"],
        description: "Website was my first real encounter with RWD and Sass. Usual navigation was replaced by mock up of terminal with most of its functionality. Currently, design is being changed to more modern one",
    },
    {
        title: "New Portfolio Page",
        liveLink: "https://mateuszkowalskicl.github.io/PortfolioPage-finalBuild/#header",
        projectImgSrc: "../../../../imgs/previews/portfolio-final.png",
        projectImgAlt: "new portfolio page",
        githubLink: "https://github.com/MateuszKowalskiCL/PortfolioPage-finalBuild",
        techList: ["js", "html", "sass"],
        description: "Build to allow potential employers to get to know me and my projects better. Inspired with flat design. Written in ES6 and Sass.",
    },
    {
        title: "SitOnChair",
        liveLink: "https://mateuszkowalskicl.github.io/sitOnChairPrime/",
        projectImgSrc: "../../../../imgs/previews/tile.png",
        projectImgAlt: "sitOnChair",
        githubLink: "https://github.com/MateuszKowalskiCL/sitOnChairPrime",
        techList: ["js", "html", "css"],
        description: "Coded during Coders Lab boot camp. In future, will receive rework into ES6, Sass and proper RWD",
    }
];

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    renderProjects = () => {
        return projects.map ((i, e) => {
            return <Project projectLiveLink = {e.liveLink}
                            projectImgScr = {e.projectImgSrc}
                            projectAltImg = {e.projectImgAlt}
                            projectGitHubLink = {e.githubLink}
                            projectTitle = {e.title}
                            techList = {e.techList}
                            description = {e.description}/>
        })
    };

    render () {
        return <section className = "main-projects">
                    <h2 className = "visually-hidden">projects</h2>
                    <div className = "projects">
                        {this.renderProjects()}
                    </div>
        </section>
    }
}

export default Projects;