import { React } from "react";
import ReactDOM from "react-dom";

// Components
import First from './components/fundamentals/BasicComponent';
import Greeting from "./components/fundamentals/WithParameters";
import Fragments from "./components/fundamentals/Fragments";

// Style
import './index.css'

const element = document.getElementById("root");

ReactDOM.render(
  <div id="fundamentals-react">
    <First/>
    <Greeting firstName="Giovanni" lastName="Strutz" age={ 25 }/>
    <Fragments />
  </div>,
  element
);
