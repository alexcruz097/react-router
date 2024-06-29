import { Link } from "react-router-dom";
import "./App.css";
import jsonData from "./db.json";
function App() {
  // dog data
  const dogData = jsonData.dogs;
  return (
    <div className="App">
      {dogData.map((dog) => {
        return (
          <div>
            <h1> "Name": {dog.name}</h1>
            <p> Age: {dog.age}</p>
            <p>Fact: {dog.facts}</p>
            <Link to={`/dogs/${dog.name}`}>View Dog</Link>
          </div>
        );
      })}
    </div>
  );
}

export default App;
