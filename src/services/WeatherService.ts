import axios from "axios";
import WeatherResponse from "../models/WeatherResponse";

const key = process.env.REACT_APP_WEATHER_KEY || "";

export const getMetrictWeather = (lat: number, lon: number): Promise<WeatherResponse> => {
    // return a weather response using axios
    return axios
      .get("http://api.weatherapi.com/v1/current.json", {
        params: {
          lat: lat,
          lon: lon,
          AP: key,
          units: "metric",
        },
      })
      .then((response) => {
        return response.data; 
      });
  };