import React from 'react';

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
        return <section className = "main-contact-list">
            <ul className = "contact-list">
                <li className = "contact-logo"><img src="" alt="gmail"/></li>
                <li className = "contact-logo"><img src="" alt="linkedin"/></li>
                <li className = "contact-logo"><img src="" alt="github"/></li>
                <li className = "contact-logo"><img src="" alt="resume"/></li>
            </ul>
            <p className = "short-bio">
                My name is Mateusz and I am an enterprise management graduate from Warsaw, who currently works as a event manager. I enjoy facing projects that challenge me and force me to develop. When writing code, I focus on creating solutions that may not be the simplest to understand but solve the problem in most elegant and maintainable way.
            </p>
        </section>
    }

}

export default ContactList;