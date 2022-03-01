import axios from "axios";
import WeatherResponse from "../models/WeatherResponse";

const key = process.env.REACT_APP_WEATHER_KEY || "";

export const getImperialWeatherOneCall = (
  lat: number,
  lon: number
): Promise<WeatherResponse> => {
  // return a weather response using axios
  return axios
    .get("https://api.openweathermap.org/data/2.5/weather", {
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


// export const getImperialWeatherByCity = (
//   city: string
// ): Promise<WeatherResponse> => {
//   // return a weather response using axios
//   return axios
//     .get("api.openweathermap.org/data/2.5/weather", {
//       params: {
//         q: city,
//         appid: key,
//         units: "imperial",
//       },
//     })
//     .then((response) => {
//       return response.data;
//     });
// };
