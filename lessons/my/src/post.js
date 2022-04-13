import  React, {Component}  from "react";
import axios from 'axios';
class Post extends Component {
    state = {
       price:[],
       status:[]
     }
    handleChange = event =>{
        this.setState({ 
            [event.target.name]: event.target.value,
         });
    }
    handleSubmit = event =>{
        event.preventDefault();
        const product = {
            "price": this.state.price,
            "status": this.state.status,
        }
        let axiosConfig = {
            headers: {
                'accept': '*/*', 
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
          };
        axios.post('https://booking-demo-ha.herokuapp.com/order', product, axiosConfig)
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
                    Product Price:
                    <input type="text" name="price" onChange={this.handleChange}></input>
                </label>
                <label>
                    Product status:
                    <input type="text" name="status" onChange={this.handleChange}></input>
                </label>
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default Post;