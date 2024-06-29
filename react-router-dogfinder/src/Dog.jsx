import React from "react";
import { Link, useParams } from "react-router-dom";
import jsonData from "./db.json";

const Dog = () => {
  const dogData = jsonData.dogs;
  const params = useParams();
  // remove colon from param

  return (
    <div className="App">
      {dogData.map((dog) => {
        // check if param name is equal to this
        if (params.name.replace(":", "") === dog.name) {
          return (
            <div>
              <h1> "Name": {params.name}</h1>
              <p> Age: {dog.age}</p>
              <p>Fact: {dog.facts}</p>
              <p>
                <Link to={"/"}> Go Home</Link>
              </p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Dog;
