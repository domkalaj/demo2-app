import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Hero from "./components/Hero";

import data from "./CardData";

function App() {
  //any js code before return and within return you have jsx code
  //code wrapped in {} is js
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
