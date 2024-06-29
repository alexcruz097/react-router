import React, { useState } from "react";
import { Link } from "react-router-dom";

const ColorApp = () => {
  const [colors, setColors] = useState(["red", "green", "blue"]);
  document.body.style.backgroundColor = "white";
  return (
    <div>
      <div className="hero">
        <h1>Welcome to the color factory.</h1>

        <Link to={"/colors/addcolor"}><p className="add-color-link">Add Color</p></Link>
      </div>
      <div className="colors-container">
        <p>Please Select a color</p>
        {colors.map((color) => {
          return (
            <>
              <Link to={"/colors/" + color}><p className="color-list">{color}</p></Link>
              <br></br>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ColorApp;
