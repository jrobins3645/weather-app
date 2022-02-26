import WeatherResponse from "../models/WeatherResponse";
import "./Result.css";

interface Props {
  weather: WeatherResponse | null;
}

const Result = ({ weather }: Props) => {
  return (
    <div className="Result">
      <img
        src={`http://openweathermap.org/img/wn/${weather?.current.weather[0].icon}@2x.png`}
        alt={weather?.current.weather[0].description}
      />
    </div>
  );
};

export default Result;
