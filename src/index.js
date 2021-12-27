import { React } from "react";
import ReactDOM from "react-dom";

import First from './components/fundamentals/BasicComponent';

import './index.css'

const element = document.getElementById("root");

ReactDOM.render(
  <div>
    <First></First>
  </div>,
  element
);
