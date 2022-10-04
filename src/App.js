import "./App.css";
import data from "./data.json";

function App() {
  const name = data.name;
  return (
    <div className="App">
      <p>{name}</p>
    </div>
  );
}

export default App;
