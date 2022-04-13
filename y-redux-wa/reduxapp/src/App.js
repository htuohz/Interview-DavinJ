import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
//action
import { fetchWeather } from "./actions/fetchWeather"; 



function App() {
 //set city
  const [city, setCity] = useState("");

  const weatherSelector = useSelector((state) => state.WeatherInfo);

  const getWeatherInfo = (e) => {
    e.preventDefault();
    if(city === ""){
      console.log("please enter a city name");
    } else {
      console.log(city);
    }
  }

  return (
  <React.Fragment>
      <div className="App">
          <header>
            <h1>React Redux WeatherApp</h1>
          </header>
      </div>

      <main>
        <form onSubmit={getWeatherInfo}>
          <div className="control">
              <input type="text" name="name" placeholder="city" onChange={e => setCity(e.target.value)}></input>
          </div>
          <input type="submit" value="check weather"/>
        </form>

        {console.log(weatherSelector)}
      </main>
      </React.Fragment>
  );
}

export default App;
