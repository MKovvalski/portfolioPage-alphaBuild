import React from 'react';

class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderScreen: "",
            listOfCommands: [],
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
                return this.props.titleText;
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
        return <div className = "terminal">
                <header>
                    <div className = "circle-1"/>
                    <div className = "circle-2"/>
                    <div className = "circle-3"/>
                    MateuszKowalski -- bash --80x24</header>
                    <div className = "terminal-body">
                        <ul>
                            {this.state.listOfCommands.map((command, i) => {
                                return <li key = {i}>{command}</li>
                            })}
                        </ul>
                        <div>mateusz-kowalski:{this.props.titleText} <input type="text" value = {this.state.renderScreen} onChange={this.handleChange} onKeyUp = {e => this.handleInfoTransfer(e)}/></div>
                        <p>//input "cd" and "name of the file" and confirm with "enter"<br/>
                            //example: cd AboutMe <br/>
                            //type in "ls" to display available files <br/>
                            //type in "clear to clear Terminal history
                        </p>
                    </div>

        </div>
    }
}

export default Terminal;