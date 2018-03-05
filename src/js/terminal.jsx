import React from 'react';

class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderScreen: "",
            listOfCommands: []
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
            case "clear":
                return "PortfolioPage";
            break;
            case "cd ..":
                if (this.state.renderScreen === "cd AboutMe" || "cd Projects" || "cd PersonalInfo") {
                    return "PortfolioPage";
                }
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
                   this.displayText(),
                   this.setState({
                       renderScreen: ""
                   })
               );
           }
       }
    };

    displayFiles = () => {
        return <div>mateusz-kowalski: {this.props.titleText} <br/>AboutMe <br/> Projects <br/> PersonalInfo</div>
    };

    checkForRightCd = (title) => {
      if (this.props.titleText === title) {
          this.setState({
              listOfCommands: [...this.state.listOfCommands, this.displayFiles()]
          });
      }
    };

    displayText = () => {
    const command = this.state.renderScreen;
        switch(command) {
            case "AboutMe":

            break;
            case "clear":
                this.setState({
                    listOfCommands: []
                });
            break;
            case "ls": {
                if (this.props.titleText === "PortfolioPage") {
                    this.setState({
                        listOfCommands: [...this.state.listOfCommands, this.displayFiles()]
                    });
                }
            }
            break;
            default:
                this.setState ({
                    listOfCommands: [...this.state.listOfCommands, "mateusz-kowalski:" + this.props.titleText + " " + command]
                })
        }
    };

    render () {
        console.log(this.props.titleText);
        console.log(this.state.renderScreen);
        return <div>
                <div>MateuszKowalski -- bash --80x24</div>
                <ul>
                    {this.state.listOfCommands.map((command, i) => {
                        return <li key = {i}>{command}</li>
                    })}
                </ul>
                <div>mateusz-kowalski:{this.props.titleText} <input type="text" value = {this.state.renderScreen} onChange={this.handleChange} onKeyUp = {e => this.handleInfoTransfer(e)}/></div>
                {/*<div>//input "cd" and "name of the file" and confirm with "enter"<br/>*/}
                    {/*//example: cd AboutMe <br/>*/}
                    {/*//type in "ls" to display available files*/}
                {/*</div>*/}
        </div>
    }
}

export default Terminal;