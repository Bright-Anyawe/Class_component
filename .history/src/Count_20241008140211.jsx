import { Component } from "react";

class Count extends Component {
  constructor({ handleChildCallBack, stateVariable }) {
    super(handleChildCallBack, stateVariable);
    this.state = {
      count: "0",
    };

    this.handleTodoCount = this.handleTodoCount.bind(this);
    this.sendDataToParent = this.sendDataToParent.bind(this);
  }

  handleTodoCount() {
    this.setState((state) => ({
      ...state,
      count: this.stateVariable.length,
    }));

    console.log(this.stateVariable);
  }

  handleChildCallBack() {
    this.handleTodoCount();
  }

  render() {
    return <h3>You have {this.state.count} items in your todo </h3>;
  }
}



export default Count