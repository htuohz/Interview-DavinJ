export function fetchWeather(city) {
    return function (dispatch) {
        fetch(`http://api.weatherstack.com/current
        ?access_key=decebe4cf0647c3a75505908640cfaeb
        &query=${city}`)
        .then(res => {
            return res.json();
        })
        .then(JSONres => {
            //dispatch the action
            dispatch({type:"FETCH_WEATHER", payload:JSONres});
        }).catch(err=>{
            console.log(err);
        })
    }
}