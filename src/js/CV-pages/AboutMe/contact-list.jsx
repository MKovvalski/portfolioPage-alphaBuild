import React from 'react';

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mailDisplay: "display-none",
            animationID: "none",
            mailTextDisplay: "display-none"
        }
    }

    handleAnimationLaunch = () => {
        if (this.state.animationID === "slide-out-animation") {
            this.setState({
                animationID: "slide-in-animation",
                mailDisplay: "display-none",
                mailTextDisplay: "display-none"
            });
        } else {
            this.setState({
                animationID: "slide-out-animation",
            });
            setTimeout(() => {
                this.setState ({
                    mailDisplay: "display-block"
                });
                setTimeout (() => {
                    this.setState ({
                        mailTextDisplay: "display-block"
                    });
                },400)
            },300)
        }
    };

    render () {
        return <div className = "contact-list">
            <div onClick = {() => this.handleAnimationLaunch()} className = "contact-logo gmail" id = {this.state.animationID}>
                <div className = "mail-expander" id = {this.state.mailDisplay}>
                    <div className = "logo-gmail-doubler">
                        <div className = "mail" id = {this.state.mailTextDisplay}>matt.kowalski.public@gmail.com</div>
                    </div>
                </div>
            </div>
            <a target = "_blank" href="http://www.linkedin.com/in/mateusz-kowalski-62b758113/">
                <div className = "contact-logo linkedin"/>
            </a>
            <a target = "_blank" href="http://github.com/MateuszKowalskiCL">
                <div className = "contact-logo github"/>
            </a>
        </div>
    }

}

export default ContactList;