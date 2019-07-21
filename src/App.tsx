import React, { Component } from "react";
import Number from "./Number";
import { Input, Form } from "./Input";

interface IState {
  count: number;
  value: string;
}

class App extends Component<{}, IState> {
  state = {
    count: 0,
    value: ""
  };

  render() {
    const { count, value } = this.state;
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Input value={value} onChange={this.onChange} />
        </Form>
        <Number number={count} />
        <button onClick={this.add}>add</button>
      </div>
    );
  }

  onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(e.target);
    // this.setState(prev => {
    //   return {
    //     value: prev.value
    //   };
    // });
  };

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  add = () => {
    this.setState(prev => {
      return {
        count: prev.count + 1
      };
    });
  };
}

export default App;
