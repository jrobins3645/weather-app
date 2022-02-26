import { useEffect, useState } from "react";
import WeatherResponse from "../models/WeatherResponse";
import { getImperialByCoords } from "../services/WeatherService";
import "./Main.css";
import Result from "./Result";

const Main = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    if (!location) {
      navigator.geolocation.getCurrentPosition((response) => {
        const coords = `${response.coords.latitude},${response.coords.longitude}`;
        let lat = response.coords.latitude;
        let lon = response.coords.longitude;
        setLocation(coords);
        getImperialByCoords(lat, lon).then((response) => {
          setWeather(response);
        });
      });
    } else {
      getImperialByCoords(51, 0).then((response) => {
        setWeather(response);
      });
    }
  }, [location]);

  return (
    <div className="Main">
      <Result weather={weather} />
      <h1>{location}</h1>
      <h1>{weather?.current.temp}</h1>
    </div>
  );
};

export default Main;
