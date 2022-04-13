import React, { Component } from 'react';

class Greeting extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        alert("hello world" + " " + this.props.name);
    }

    render() {
        return (
            <button onClick={this.handleClick}>Greeting</button>
        )
    }
}

export default Greeting;