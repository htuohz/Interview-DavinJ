import  React, {Component}  from "react";
const api = "http://jsonplaceholder.typicode.com/posts/1";
class Weather extends Component {
    state = {
        isLoading: false,
        temperature: null,
     }

     async componentDidMount() {
         const result = await fetch(api);
         console.log(result);
     }


    render(){
        const { isLoading, temperature } = this.state;
        if(isLoading) return<>...</>;

        return <div>
            {temperature}
        </div>;
    }
}

export default Weather;