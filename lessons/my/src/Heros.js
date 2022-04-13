import React from 'react';
import App from './App';

class HeroList extends React.Component {
    constructor(){
        super();
        this.state = {
            heros: ["hero1","hero2","hero3","hero4","hero5","hero6"]
        }
    }

    render(){
        //业务逻辑不要写在渲染里面
        return(
            <ul>
              {this.state.heros.map(
                  (item, index)=>
                  <li key={index}>{item}</li>
                

                  )}
            </ul>
        )
    }
}

export default HeroList;