import { Component } from "react";

class Count extends Component {
  constructor({ handleChildCallBack }) {
    super(parentCallBack);
    this.state = {
      count: "",
    };

    this.handleTodoCount = this.handleTodoCount.bind(this);
    this.sendDataToChild = this.sendDataToChild.bind(this);
  }

  handleTodoCount() {
    return this.setState((state) => ({
      ...state,
      count: this.props.stateVariable.length,
    }));
  }

  sendDataToChild() {
    this.handleChildCallBack(handleTodoCount);
  }

  render() {
    return <h3>You have {this.state.count} items in your todo </h3>;
  }
}



export default Count