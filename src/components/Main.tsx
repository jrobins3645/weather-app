import { useEffect, useState } from "react";
import WeatherResponse from "../models/WeatherResponse";
import {
  getImperialByCity,
  getImperialByCoords,
  getMetrictByCoords,
} from "../services/WeatherService";
import "./Main.css";
import Result from "./Result";
import Search from "./Search";
// import Search from "./Search";

const Main = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    if (!location) {
      navigator.geolocation.getCurrentPosition((response) => {
        let lat = response.coords.latitude;
        let lon = response.coords.longitude;
        getImperialByCoords(lat, lon).then((response) => {
          setWeather(response);
        });

      });
    } else {
      getImperialByCity(location).then((response) => {
        setWeather(response);
      });
    }
  }, [location]);

  return (
    <div className="Main">
      <Search setLocation={setLocation}/>
      <Result weather={weather} />
    </div>
  );
};

export default Main;
