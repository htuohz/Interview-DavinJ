import React from 'react';

//render a username input and password input and a submit button
class SignUpForm extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.handleEventChange = this.handleEventChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEventChange(e){
        
        this.setState({
            [e.target.name]: e.target.value,
        })

    }


    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }

  
    render(){
        return(
            <form>
            {this.state.showForm&&<div>
            <label htmlFor="username">username: </label>   
            <input 
            type="text" 
             name="username" 
            id="username" 
            value={this.state.username}
            onChange={this.handleEventChange}
            />
            <label htmlFor="password">password: </label>   
            <input 
            type="password" 
            name="password" 
            id="password" 
            value={this.state.password}
            onChange={this.handleEventChange}
            />   
            <button type="submit" onClick={this.handleSubmit}>Submit1</button>
            </div>}
            </form>
        )
    }
}


export default SignUpForm;