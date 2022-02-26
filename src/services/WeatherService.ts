import axios from "axios";
import WeatherResponse from "../models/WeatherResponse";

const key = process.env.REACT_APP_WEATHER_KEY || "";

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
