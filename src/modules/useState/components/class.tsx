import { Component } from "react";

interface State {
  click: number;
}

export class UseStateClassPage extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      click: 0,
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState((prev) => ({ click: prev.click + 1 }))}
        >
          Increment with class
        </button>
        <div>{this.state.click}</div>
      </div>
    );
  }
}
