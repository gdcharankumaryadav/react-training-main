import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
