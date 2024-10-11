import { useState } from "react";

export default function Form() {

const [todoList, setTodoList] = useState({
  toDos: [],
  InputValue: ""
});


 }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));

  }

}
