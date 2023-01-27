import { Component } from "react";

type ClassProps = {
    message: string;
}
type ClassState = {
    count : number;
}

export class counter extends Component<ClassProps, ClassState> {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div>
        <h3>Class State</h3>
        <p>
          {this.state.count} {this.props.message}
        </p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default counter;
