import { Component } from "react";

class Count extends Component {
  constructor({ handleChildCallBack }) {
    super(handleChildCallBack);
    this.state = {
      count: 0,
    };

    this.handleTodoCount = this.handleTodoCount.bind(this);
  }

  handleTodoCount() {
    // this.setState((state) => ({
    //   ...state,
    //   count: state.count + 1,
    // }));
this.setState()
    console.log(this.state.count);
  }

  handleChildCallBack() {
  return  this.handleTodoCount();
  }

  render() {
    return <h3>You have {this.state.count} items in your todo </h3>;
  }
}



export default Count