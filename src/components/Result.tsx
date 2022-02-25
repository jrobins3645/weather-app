import WeatherResponse from "../models/WeatherResponse";
import "./Result.css";

interface Props {
  weather: WeatherResponse | null;
}

const Result = ({weather}: Props) => {
  return <div className="Result">Result works</div>;
};

export default Result;
