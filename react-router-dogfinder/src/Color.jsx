import React from "react";
import { Link, useParams } from "react-router-dom";

const Color = () => {
  const params = useParams();
  console.log(params.name);
  document.body.style.backgroundColor = params.name;
  return (
    <div className="color-container">
      <h1>This is {params.name}</h1>
      ISN'T IT BEAUTIFUL?
      <br></br>
      <Link style={{ textDecoration: 'none' }} to={"/colors"}>
        <p>GO BACK</p>
      </Link>
    </div>
  );
};

export default Color;
