import React from 'react';

class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderScreen: ""
        }
    }

    handleTerminalTitle = (input) => {
        switch (input) {
            case "cd AboutMe":
                return "AboutMe";
            break;
            case "cd Projects":
                return "Projects";
            break;
            case "cd PersonalInfo":
                return "PersonalInfo";
            break;
            default:
                return "PortfolioPage"
        }
    };

    handleChange = (event) => {
      this.setState ({
          renderScreen: event.target.value
      })
    };

    handleInfoTransfer = (e) => {
       if (e.keyCode === 13) {
           if (typeof this.props.renderInfo === "function") {
               this.props.renderInfo(
                   this.state.renderScreen,
                   this.handleTerminalTitle(this.state.renderScreen),
               );
           }
       }
    };

    displayFiles = (lsText) => {
        if (lsText === "ls") {
            return <div>AboutMe <br/> Projects <br/> PersonalInfo</div>
        } else {
            return null
        }
    };

    render () {
        return <div>
                <div>MateuszKowalski -- bash --80x24</div>
                <div>mateusz-kowalski:{this.props.titleText} <input type="text" value = {this.state.renderScreen} onChange={this.handleChange} onKeyUp = {e => this.handleInfoTransfer(e)}/></div>
                <div>//input "cd" and "name of the file" and confirm with "enter"<br/>
                    //example: cd AboutMe <br/>
                    //type in "ls" to display available files
                </div>
            {this.displayFiles(this.props.lsInfo)}
        </div>
    }
}

export default Terminal;