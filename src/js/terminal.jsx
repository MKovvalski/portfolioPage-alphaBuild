import React from 'react';

class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderScreen: "",
            listOfCommands: [],
            animation: "none",
            test: "terminal"
        }
    }

    handleTerminalSize = () => {
        switch(this.state.renderScreen) {
            case "cd AboutMe":
                this.setState({
                    test: "terminal1"  //lepiej zrobić osobne klasy i je dodawać
                    // animation: "swoosh 0.3s linear 1 forwards"
                });
                break;
            case "clear":
                this.setState({
                    animation: "swoosh 0.3s linear 1 forwards"
                });
        }
    };

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
            default:
                return this.props.titleText;
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
                   this.handleTerminalSize()
               );
               this.displayText();
               this.setState({
                   renderScreen: ""
               })
           }
       }
    };

    displayFiles = (currentPage) => {
        const files = ["AboutMe", "Projects", "PersonalInfo"];
        switch(currentPage) {
            case "AboutMe":
                return <div>mateusz-kowalski: {this.props.titleText} <br/> {files[1]} <br/> {files[2]}</div>;
                break;
            case "Projects":
                return <div>mateusz-kowalski: {this.props.titleText} <br/> {files[0]} <br/> {files[2]}</div>;
                break;
            case "PersonalInfo":
                return <div>mateusz-kowalski: {this.props.titleText} <br/> {files[0]} <br/> {files[1]}</div>;
                break;
            default:
                return <div>mateusz-kowalski: {this.props.titleText} <br/> {files[0]} <br/> {files[1]} <br/> {files[2]}</div>;
        }
    };

    setCommand = (command) => {
        this.setState ({
            listOfCommands: [...this.state.listOfCommands, "mateusz-kowalski:" + this.props.titleText + " " + command]
        });
    };

    displayText = () => {
    const command = this.state.renderScreen;
        switch(command) {
            case "cd AboutMe":
               this.setCommand(command);
                break;
            case "cd Projects":
                this.setCommand(command);
                break;
            case "cd PersonalInfo":
                this.setCommand(command);
                break;
            case "":
                this.setCommand(command);
                break;
            case "clear":
                this.setState({
                    listOfCommands: []
                });
                break;
            case "ls":
                    this.setState({
                        listOfCommands: [...this.state.listOfCommands, this.displayFiles(this.props.titleText)]
                    });
                break;
            default:
                if (this.state.renderScreen.indexOf("cd") === -1) {
                    this.setState({
                        listOfCommands: [...this.state.listOfCommands, "-bash:" + this.state.renderScreen + ": command not found" ]
                    })
                } else {
                    this.setState ({
                        listOfCommands: [...this.state.listOfCommands, "-bash: cd:" + this.state.renderScreen.substring("cd".length) + " no such file or directory"]
                    })
                }
        }
    };

    render () {
        return <div className = {this.state.test}>
                <div className = "terminal-header">MateuszKowalski -- bash --80x24</div>
                <ul>
                    {this.state.listOfCommands.map((command, i) => {
                        return <li key = {i}>{command}</li>
                    })}
                </ul>
                <div>mateusz-kowalski:{this.props.titleText} <input className = "terminal-input" type="text" value = {this.state.renderScreen} onChange={this.handleChange} onKeyUp = {e => this.handleInfoTransfer(e)}/></div>
                {/*<div>//input "cd" and "name of the file" and confirm with "enter"<br/>*/}
                    {/*//example: cd AboutMe <br/>*/}
                    {/*//type in "ls" to display available files*/}
                {/*</div>*/}
        </div>
    }
}

export default Terminal;