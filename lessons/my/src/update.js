import  React, {Component}  from "react";
import axios from 'axios';
class Update extends Component {
    state = {
       id:[],
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
        axios.put(`https://booking-demo-ha.herokuapp.com/order/${this.state.id}`, product, axiosConfig)
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
                <label>
                    Product Price:
                    <input type="text" name="price" onChange={this.handleChange}></input>
                </label>
                <label>
                    Product status:
                    <input type="text" name="status" onChange={this.handleChange}></input>
                </label>
                <button type="submit">Update</button>
            </form>
        );
    }
}

export default Update;