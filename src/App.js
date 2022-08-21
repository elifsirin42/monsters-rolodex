import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "12e1231e",
        },
        {
          name: "Frank",
          id: "12e1232e",
        },
        {
          name: "Jacky",
          id: "12e1233e",
        },
        {
          name: "Elif",
          id: "12e1234e",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
