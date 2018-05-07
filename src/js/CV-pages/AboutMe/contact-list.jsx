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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum cumque fugit in voluptatem. Alias consequatur deleniti doloremque, dolores ea fuga inventore itaque, nisi officia provident, quod temporibus vitae voluptate?
            </p>
        </section>
    }

}

export default ContactList;