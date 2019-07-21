import React, { Component } from "react";
import Number from "./Number";

interface IState {
  count: number;
}

class App extends Component<{}, IState> {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <Number number={this.state.count} />
        <button onClick={this.add}>add</button>
      </div>
    );
  }
  add = () => {
    this.setState(prev => {
      return {
        count: prev.count + 1
      };
    });
  };
}

export default App;
