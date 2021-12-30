import React from "react";

import First from "./components/fundamentals/BasicComponent";
import Greeting from "./components/fundamentals/WithParameters";
import Fragments from "./components/fundamentals/Fragments";
import Card from './components/layout/Card';

// Challenge #1
import Random from './components/fundamentals/Random';

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
      <Card title="First Component">
        <First />
      </Card>

      <Card title="Component With Parameters">
        <Greeting firstName="Giovanni" lastName="Strutz" age={24} />
      </Card>

      <Card title="Using React Fragments">
        <Fragments />
      </Card>

      <Card title="Random Challenge">
        <Random min={1} max={100} />
      </Card>
    </div>
  );
};