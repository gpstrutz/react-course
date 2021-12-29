import React from "react";

import First from "./components/fundamentals/BasicComponent";
import Greeting from "./components/fundamentals/WithParameters";
import Fragments from "./components/fundamentals/Fragments";

import './index.css'

// export default function App() {
//     return (
//         <div id="fundamentals-react">
//             <h1>Fundamentals ReactJS</h1>
//             <First />
//             <Greeting firstName="Giovanni" lastName="Strutz" age={ 24 } />
//             <Fragments />
//         </div>
//     )
// }

// Refactoring with Arrow Function

export default () => {
  return (
    <div id="fundamentals-react">
      <h1>Fundamentals React</h1>
      <First />
      <Greeting firstName="Giovanni" lastName="Strutz" age={24} />
      <Fragments />
    </div>
  );
};