import { useState } from "react";

export default function Form() {

const [todoList, setTodoList] = useState({
  toDos: [],
  inputValue: ""
});


 }

  handleInputChange(e) {

   setState((prevState) => ({
      ...prevState,
      inputValue: e.target.value,
    }));
  }

  handleSubmit(e) {
   e.preventDefault()
setState((prevState) => ({
      todos: prevState.todos.concat(prevState.inputValue),
      inputValue: "",
    }))

  }

    handleDelete(e) {
    console.log(e.currentTarget);
    const clickListName = e.currentTarget.dataset.index;
    console.log(clickListName);
    if (clickListName !== -1) {
      let todos = [...this.state.todos];
      todos.splice(clickListName, 1);
      this.setState({ todos: todos });
      console.log(todos);
    }
  



}
