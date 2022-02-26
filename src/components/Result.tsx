import WeatherResponse from "../models/WeatherResponse";
import "./Result.css";

interface Props {
  weather: WeatherResponse | null;
}

const Result = ({ weather }: Props) => {
  return (
    <div className="Result">
      {/* <img
        src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
        alt={weather?.weather[0].description}
      /> */}
      <h1>{weather?.name}</h1>
    </div>
  );
};

export default Result;
