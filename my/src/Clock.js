import { render } from '@testing-library/react';
import React, { Component } from 'react';
//functional component
//const Clock = (props)=> <h1>{props.time}</h1>
// class component
class Clock extends Component {
    //Lifecycle 1
    constructor(){
        super();
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    //Lifecycle 3
    componentDidMount(){
        this.updateTime();
    }
    //Lifecycle 4
    updateTime(){
       setInterval(()=>{
            this.setState({
                time: new Date().toLocaleTimeString(),
            })
        }, 1000)
    }

//Lifecycle 2
    render(){
        const { time } = this.state;
        return <h1>{time}</h1>
    }

}

export default Clock;
