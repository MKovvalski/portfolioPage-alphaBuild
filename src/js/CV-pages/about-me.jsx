import React from 'react';

class AboutMe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mailDisplay: "none",
            animationID: "none",
        }
    }

    handleAnimationLaunch = () => {
       if (this.state.animationID === "slide-out-animation") {
           this.setState({
               animationID: "slide-in-animation",
               mailDisplay: "none"
           });
       } else {
           this.setState({
               animationID: "slide-out-animation"
           });
           setTimeout(() => {
               this.setState ({
                   mailDisplay: "block"
               })
           },300)
       }
    };

    render () {
        return <div className = "container">
                    <div className = "bio">
                        <div className = "col-1">
                            <div className = "bio-data">
                                <div className = "bio-picture">
                                    <div className = "picture"/>
                                </div>
                                <div className = "bio-contact">
                                    <h1>Mateusz Kowalski</h1>
                                    <h3>contact</h3>
                                    <div className = "contact-list">
                                        <div onClick = {() => this.handleAnimationLaunch()} className = "contact-logo gmail" id = {this.state.animationID}>
                                            <div className = "mail-expander" style = {{display: this.state.mailDisplay}}>
                                                <div className = "logo-gmail-doubler"/>
                                                <div className = "test4">matt.kowalski.public@gmail.com</div>
                                            </div>
                                        </div>
                                        <a target = "_blank" href="https://www.linkedin.com/in/mateusz-kowalski-62b758113/">
                                            <div className = "contact-logo linkedin"/>
                                        </a>
                                        <a target = "_blank" href="https://github.com/MateuszKowalskiCL">
                                            <div className = "contact-logo github"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "col-2">
                            <div className = "bio-description">
                                <h1>Junior Front-End Developer</h1>
                                <div className = "bio-text">
                                    <p>
                                        During last three years my time was mostly occupied by working toward obtaining my business management bachelor, as well as working as a personal assistant of an event manager and lately as an event manager myself. The idea of becoming a Web- Dev came to my mind during the last year of studying, when I had my first contact with HTML and CSS at one of extra courses offered by University. Structuring information and shaping their design got me hooked immediately. Since then, I knew that someday I want to combine my managerial education with perfected knowledge of programming into position of Project Manager/Senior Developer. I believe that my work in Your company will be a stepping stone in that direction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    }
}

export default AboutMe;