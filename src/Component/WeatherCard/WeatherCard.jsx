import React from "react";
import Form from "./Form";
import Weather from "./Weather";
import "./css/WeatherCard.css";
import axios from "axios";

// git project https://github.com/erikflowers/weather-icons
import "weather-icons/css/weather-icons.css";

const Api_Key = "a6adae971d0eac8ba295fd8a768037a1";
const BaseURL = "http://api.openweathermap.org/data/2.5/weather?";

class WeatherCard extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: null,
      temp_min: null,
      description: "",
      error: false,
      latitude: null,
      longitude: null,
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };
  }

  //Get Weather Icons
  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  // convert to celsius
  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  // Get weather by city
  getWeatherByCity = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) {
      axios.get(`${BaseURL}q=${city}&appid=${Api_Key}`).then((res) => {
        const response = res.data;
        this.setState({
          city: `${response.name}, ${response.sys.country}`,
          main: response.weather[0].main,
          celsius: this.calCelsius(response.main.temp),
          temp_max: this.calCelsius(response.main.temp_max),
          temp_min: this.calCelsius(response.main.temp_min),
          description: response.weather[0].description,
          error: false,
        });

        // setting icons
        this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
        console.log(response);
        
      });
    } else {
      this.setState({
        error: true,
      });
    }
  };

  // get curent location weather
  getCurrentLocation = async () => {
    axios
      .get(
        `${BaseURL}lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${Api_Key}`
      )
      .then((res) => {
        const response = res.data;
        console.log(response);
        this.setState({
          city: `${response.name}, ${response.sys.country}`,
          main: response.weather[0].main,
          celsius: this.calCelsius(response.main.temp),
          temp_max: this.calCelsius(response.main.temp_max),
          temp_min: this.calCelsius(response.main.temp_min),
          description: response.weather[0].description,
          error: false,
        });
        // setting icons
        this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
      });
  };

  handleClick = () => {
    this.getCurrentLocation();
  };
  componentDidMount() {
    //get device location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        this.getCurrentLocation();
      });
    } else {
      alert("Geolocation is not supported by this browser");
    }
  }

  render() {
    return (
      <div className="WeatherCard">
        <button className="search"><i onClick={this.handleClick} className="fas fa-map-marker-alt"> Current Location</i></button>
        <Form loadweather={this.getWeatherByCity} error={this.state.error} />
        <Weather
          cityname={this.state.city}
          weatherIcon={this.state.icon}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default WeatherCard;
