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
    
    test1 = () => {
        console.log("działam");
       if (typeof this.props.renderInfo === "function") {
           this.props.renderInfo(this.state.renderScreen);
       }
    };

    test2 = (e) => {
       if (e.key === 13) {
         console.log("enter")
       }
    };

    render () {
        return <div onKeyUp = {e => this.test2(e)}>
                <input type="text" value = {this.state.renderScreen} onChange={this.handleChange}/>
                <div onKeyPress = {this.test1}>ddd</div>
        </div>
    }
}

export default Terminal;