import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  nums = [1, 2, 3, 4, 5];

  render() {
    return (
      <div className="App">
        {this.nums.map((n) => {
          return <span>{n + 3}</span>;
        })}
      </div>
    );
  }
}

export default App;
