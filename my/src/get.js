import  React, {Component}  from "react";
import axios from 'axios';
//import Delete from './delete';
class Get extends Component {
    state = {
       items:[]
     }

     async componentDidMount() {
        console.log("lifecycle-componentDidMount");
         axios.get('http://localhost:8081/order/1:/20')
            .then(json => {
                //console.log(json);
                this.setState({
                    items:json.data.results
                })
                // for (let i=0; i<json.data.results.length; i++){
                   
                //             this.setState({
                //                 ids:  json.data.results[i]._id,
                //             })
                //         // prices:json.data.results[i].price,
                //         // status: json.data.results[i].status
                        
                // }
             
            
            })
            .catch(error =>{
                console.log(error);
            });           
       
     }

     componentDidUpdate() {
        console.log("lifecycle-componentDidUpdate");
            axios.get('http://localhost:8081/order/1:/20')
            .then(json => {
                //console.log(json);
                this.setState({
                    items:json.data.results
                }) 
            })
        }
      


    render(){
        console.log("lifecycle-render")
      const { items } = this.state;
        
        return (
            <div>
                {/* <Delete items={items}/> */}
             
                <ul>
                    {items.map(item => (
                        <li key={item._id}>
                          {item._id}  {item.price}  {item.status}  
                        </li>
                    ))}
                </ul>
           
            </div>
        )
    }
}

export default Get;