import { Component } from "react";

export class Clock extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
