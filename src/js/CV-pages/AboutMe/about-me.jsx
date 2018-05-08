import React from 'react';
import ContactList from "./contact-list.jsx";

class AboutMe extends React.Component {

    render () {
        return <header className = "main-about-me">
            <section className = "name-and-title">
                <img className = "big-icon" src="imgs/svg/light.svg" alt="logo"/>
                <div className = "name-wrapper">
                    <h1 className = "name-and-surname">Mateusz Kowalski</h1>
                    <span className = "position">Junior Front-End Developer</span>
                </div>
            </section>
            <ContactList/>
        </header>
    }
}

export default AboutMe;