import axios from "axios";
import WeatherResponse from "../models/WeatherResponse";

const key = process.env.REACT_APP_WEATHER_KEY || "";


// get metric weather data by lat and lon
export const getMetrictByCoords= (
  lat: number,
  lon: number
): Promise<WeatherResponse> => {
  return axios
    .get("api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: lon,
        appi: key,
        units: "metric",
      },
    })
    .then((response) => {
      return response.data;
    });
};


//get imperial weather data by lat and lon
export const getImperialByCoords = (
  lat: number,
  lon: number
): Promise<WeatherResponse> => {
  return axios
    .get("api.openweathermap.org/data/2.5/weather", {
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

//get imperial weather data by city 
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

//get metric weather data by city
export const getMetricByCity = (city: string): Promise<WeatherResponse> => {
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
