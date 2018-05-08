import React from 'react';

class Skills extends React.Component {
    render () {
        return <article className = "info-category">
            <h3 className = "info-category-title">Skills</h3>
            <ul className = "category-elements-list">
               <li className = "skill">
                   <h4 className = "skill-title">Programming Languages</h4>
                   <span className = "skill-content">JavaScript, ES6, HTML5, CSS3</span>
               </li>
                <li className = "skill">
                    <h4 className = "skill-title">Frameworks/Libraries</h4>
                    <span className = "skill-content">React, Redux, JQuery</span>
                </li>
                <li className = "skill">
                    <h4 className = "skill-title">Toolkits/Module-bundlers</h4>
                    <span className = "skill-content">Gulp,Webpack</span>
                </li>
                <li className = "skill">
                    <h4 className = "skill-title">IDE</h4>
                    <span className = "skill-content">WebStorm</span>
                </li>
                <li className = "skill">
                    <h4 className = "skill-title">Others</h4>
                    <span className = "skill-content">Sass, RWD</span>
                </li>
            </ul>
        </article>
    }
}

export default Skills;