import { useState } from "react";

export default function Form() {

const [todoList, setTodoList] = useState({
  toDos: [],
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

  }: ""
});


 }

  handleInputChange(e) {
   setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
   

  }



}
