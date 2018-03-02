import React from 'react';

class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderScreen: "input cd of the page"
        }
    }

    handleChange = (event) => {
      this.setState ({
          renderScreen: event.target.value
      })
    };

    handleInfoTransfer = (e) => {
       if (e.keyCode === 13) {
           if (typeof this.props.renderInfo === "function") {
               this.props.renderInfo(this.state.renderScreen);
           }
       }
    };

    render () {
        return <div>
                <input type="text" value = {this.state.renderScreen} onChange={this.handleChange} onKeyUp = {e => this.handleInfoTransfer(e)}/>
        </div>
    }
}

export default Terminal;