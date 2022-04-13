import  React, {Component}  from "react";
import axios from 'axios';
class Server extends Component {
    state = {
        id: [],
        price: [],
        status: []
     }

     async componentDidMount() {
         axios.get('https://booking-demo-ha.herokuapp.com/order/1:/20')
            .then(response =>{
               // console.log(response);
                const results = response.data.results;
                // console.log(results);
                const data = results.map(result =>{
                    const container = result.price;
                    console.log(container);
                    return {
                        ...container
                    }
                   // const id = Object.values(result._id);
                    //const price = Object.values(result.price);
                  //  const status = Object.values(result.status);
                   // console.log(id);
                //   return this.setState({
                //        // id: id,
                //         price:  [...result.price]
                //         //status: status
                //     });
                })
                this.setState({
                           // id: id,
                            price:  data
                            //status: status
                        });
                //console.log(data);
             
            }).catch(error =>{
                console.log(error);
            });           
       
     }


    render(){
      //const { id, price, status } = this.state;
     
        return <div>
                <ul>
              {()=>this.state.price.map(
                  (item, index)=>
                  <li key={index}>{item}</li>
                

                  )}
            </ul>
        </div>;
    }
}

export default Server;