import axios from "axios";
import WeatherResponse from "../models/WeatherResponse";

const key = process.env.REACT_APP_WEATHER_KEY || "";

export const getMetrictWeather = (
  lat: number,
  lon: number
): Promise<WeatherResponse> => {
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

export const getImperialByCoords = (
  lat: number,
  lon: number
): Promise<WeatherResponse> => {
  return axios
    .get("https://api.openweathermap.org/data/2.5/onecall", {
      params: {
        lat: lat,
        lon: lon,
        appid: key,
        units: "imperial",
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const getImperialByCity = (city: string): Promise<WeatherResponse> => {
  return axios
    .get("api.openweathermap.org/data/2.5/weather", {
      params: {
        q: city,
        appid: key,
        units: "imperial",
      },
    })
    .then((response) => {
      return response.data;
    });
};
