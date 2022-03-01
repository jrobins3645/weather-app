import WeatherResponse from "../models/WeatherResponse";
import "./Result.css";

interface Props {
  weather: WeatherResponse | null;
}

const Result = ({ weather }: Props) => {
  return (
    <div className="Result">
      <h1>{weather?.main.temp}</h1>
    </div>
  );
};

export default Result;
