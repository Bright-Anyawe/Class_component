import { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ["write todo down", "improve the code"],
      inputValue: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
    console.log(this.state.inputVal);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  handleDelete(e) {
    const clickList = e.target.dataset.index;
    console.log(clickList);
  }

  handleReturnState() {
    return this.state.todos;
  }

  
}

export default ClassInput;
