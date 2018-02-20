import React from 'react';

class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderScreen: "input cd of the page"
        }
    }

    // screenToDisplay = (input) => {
    //   if (input === "screen1") {
    //   }
    // };

    handleChange = (event) => {
      this.setState ({
          renderScreen: event.target.value
      })
    };

    render () {
        console.log(this.props.renderInfo);
        return <div>
            <input type="text" value = {this.state.renderScreen} onChange={this.handleChange}/>
        </div>
    }
}

export default Terminal;