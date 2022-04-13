import React from 'react';

class StopWatch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: 0,
            isRunning: false
        };
        this.startCounting = this.startCounting.bind(this);
        this.stopCounting = this.stopCounting.bind(this);
       
    }


    startCounting(){
        //reset time
        this.setState({
            time: 0,
            isRunning: true
        })
        this.timer = setInterval(()=>{
            this.setState({
                time: this.state.time + 1
            })
        },1)
    }

    stopCounting(){
        this.setState({
            isRunning: false
        })
        if(this.timer) {
            clearInterval(this.timer);
        }

    }

    render(){
        const { time, isRunning  } = this.state;
        return(
            <>
                <h1>{time}</h1>
                <button onClick={this.startCounting} disabled={isRunning}>Start</button>
                <button onClick={this.stopCounting}>Stop</button>
            </>
        )
    }
}


export default StopWatch;