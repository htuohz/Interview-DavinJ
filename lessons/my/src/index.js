import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import Greeting from './Greeting';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; //a higher order component
import { createStore } from 'redux';
import rootReducer from './reducers';

let initialStore = {

};
const store = createStore(rootReducer, initialStore )
ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);



// const CurrentTime = (props) => <h1>{props.time}</h1>

// function displayTime(){
//   ReactDOM.render(
//     <CurrentTime time={new Date().toLocaleTimeString()} />,
//     document.getElementById('root')
//   );
// }


// setInterval(displayTime, 1000);
//functional component 没有state所以需要调用setInterval来每一秒调用一次



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
