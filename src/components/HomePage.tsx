import { useNavigate } from "react-router";
import "./HomePage.css";
import { KeyboardEventHandler, useState } from "react";

const Homepage = () => {
  const navigate = useNavigate();
  const [placeName, setPlaceName] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceName(e.target.value);
  };

  const searchLocation: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      navigate("/location/" + placeName);
    }
  };
  const header = () => {
    return (
      <div className="header_div">
        <h1>MEZEG</h1>
        <label>
          Temperature:
          <select name="selectedFruit">
            <option value="C">C°</option>
            <option value="F">F°</option>
          </select>
        </label>
        <input
          className="searchbar"
          type={"text"}
          autoFocus={true}
          placeholder={"Enter Location"}
          onKeyDown={searchLocation}
          onChange={handleInputChange}
        />
      </div>
    );
  };
  return <div>{header()}</div>;
};

export default Homepage;
