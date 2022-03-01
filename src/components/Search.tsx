import { FormEvent, useState } from "react";
import "./Search.css";

interface Props {
  setLocation: (location: string) => void;
}

const Search = ({ setLocation }: Props) => {
  const [city, setCity] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setLocation(city);
  };

  return (
    <div className="Search">
      <form className="search-bar" onSubmit={submitHandler}>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter a City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label htmlFor="unit">Select F or C</label>
        <select name="unit" id="">
          <option value="f">F</option>
          <option value="c">C</option>
        </select>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
