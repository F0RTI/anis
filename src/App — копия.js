import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Info from './components/App.info';
// TODO: Бар на котором будут кнопки и можно будет открывать виджет или просто линия виджетов и комбинировано
import Form from './components/form';
// import WeatherApp from './components/weather/app/WeatherApp';
import WeatherShow from './components/weather/show/WeatherShow';

// main vars App
let AboutUser = require('./components/settings/users/About.user');
let AppConfig = require('./components/App.config');
let API_KEY = AppConfig.infoText.API_KEY;
// const renderAppName = <App />;

let configurations = {
  lang: AboutUser.infoText.language
}

// import ReactDOM from 'react-dom';

// var options = {
//   method: 'get',
//   headers: {
//       "Access-Control-Request-Headers": "*",
//       "Access-Control-Request-Method": "*"
//   }
// }

class App extends React.Component {

  state = {
    // vars temp
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined,
    // vars
    loading: true
  }
  
  gettingWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    
    if(city)  {
      const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await API_URL.json();

      let sunset = data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      let sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: 'error'
      });

      console.log(data);
    }
  }

  render() {
    return (
      <div>
        <Info {...configurations}/>
        <Form 
        {...configurations}
        weatherMethod = {this.gettingWeather} 
        />
        <WeatherShow 
        {...configurations}
        {...this.state} 
        />
        {/* <WeatherApp /> */}
      </div>
    );
  }
}


export default App;