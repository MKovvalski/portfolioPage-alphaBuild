import React from 'react';

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animateId: "",
            animateIdGmail: ""
        }
    }

    expandCvText = () => {
        this.setState({
            animateId: "expand"
        })
    };

    shrinkCVText = () => {
        this.setState({
            animateId: "shrink"
        })
    };


    expandTextGmail = () => {
        this.setState({
            animateIdGmail: "expand"
        })
    };

    shrinkTextGmail = () => {
        this.setState({
            animateIdGmail: "shrink"
        })
    };

    copyEmailAddress = () => {
        let range = document.createRange();
        range.selectNode(document.querySelector(".mail-text"));
        window.getSelection().addRange(range);
        try {
            let successful = document.execCommand('copy');
            let msg = successful ? 'successful' : 'unsuccessful';
        } catch(err) {
            console.log('Oops, unable to copy');
        }
        window.getSelection().removeAllRanges();
    };

    render () {
        return <section className = "main-contact-list">
            <ul className = "contact-list">
                <li className = "header-gmail-logo" onClick={()=> this.copyEmailAddress()} onMouseLeave={() => this.shrinkTextGmail()} onMouseEnter={() =>this.expandTextGmail()}>
                    <span className = "visually-hidden mail-text">matt.kowalski.public@gmail.com</span>
                    <img className = "gmail-logo" src="imgs/svg/gmail.svg" alt="gmail"/>
                    <div className = "mail-expand" id = {this.state.animateIdGmail}>click to copy my email address</div>
                </li>
                <li className = "contact-logo"><a target = "_blank" href="http://www.linkedin.com/in/mateusz-kowalski-62b758113/"><img src="imgs/svg/linkedin.svg" alt="linkedin"/></a></li>
                <li className = "contact-logo"><a target = "_blank" href="http://github.com/MateuszKowalskiCL"><img src="imgs/svg/github.svg" alt="github"/></a></li>
                <li className = "header-cv-logo" onMouseLeave={() => this.shrinkCVText()} onMouseEnter={() =>this.expandCvText()}>
                    <a target = "_blank" href="Mateusz-Kowalski-Resume.pdf" download="mateusz-kowalski-resume">
                        <img className = "cv-logo" src="imgs/svg/cv.svg" alt="resume"/>
                        <div className = "cv-expand" id = {this.state.animateId}>click to download my resume</div>
                    </a>
                </li>
            </ul>
            <p className = "short-bio">
                My name is Mateusz and I am an enterprise management graduate from Warsaw, who currently works as a event manager. I enjoy facing projects that challenge me and force me to develop. When writing code, I focus on creating solutions that may not be the simplest to understand but solve the problem in most elegant and maintainable way.
            </p>
        </section>
    }

}

export default ContactList;