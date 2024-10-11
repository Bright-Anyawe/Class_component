import { useState } from "react";

export default function Form() {

  const [todoList, setTodoList] = useState({
    toDos: [],
    inputValue: "",
  });

  function handleInputChange(e) {
    setTodoList((prevState) => ({
      ...prevState,
      inputValue: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodoList((prevState) => ({
      toDos: prevState.toDos.concat(prevState.inputValue),
      inputValue: "",
    }));
  }

}
