import  React, {Component}  from "react";
import axios from 'axios';
//import Get from './get';
class Delete extends Component {
    constructor(){
        super();

        this.state = {
            id:[]
        }
 
    }
  
    handleChange = event =>{
        this.setState({ 
            [event.target.name]: event.target.value,
         });
    }
    handleSubmit = event =>{
        event.preventDefault();
  
 
        axios.delete(`https://booking-demo-ha.herokuapp.com/order/${this.state.id}`)
        .then(response =>{
            console.log(response);
          //  console.log(response.data); 
        })
        .catch(error =>{
            console.log(error);
        });    
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Product ID:
                    <input type="text" name="id" onChange={this.handleChange}></input>
                </label>
                <button type="submit">Delete</button>
            </form>
        );
    }
}

export default Delete;