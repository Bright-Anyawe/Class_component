import { useState } from "react";

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setTodoList] = useState({
    toDos: [],
    inputValue: inputValue,
  });

  


function handleInputChange(e) {

  const updateInputVAlue = e.target.value;
  setInputValue(updateInputVAlue);
handleToDoList(updateInputVAlue)
}

function handleToDoList(updateInputValue) {
console.log(updateInputValue)
  setTodoList((prevState) => ({
    ...prevState, toDos: updateInputValue,
    inputValue: ''
  }))
}

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputValue)
    setTodoList((prevState) => ({
      ...prevState,
      toDos: inputValue,
      inputValue: "",
    }));
  }

  function handleDelete(e) {
    console.log(e.currentTarget);

    const clickListName = e.currentTarget.dataset.index;
    console.log(clickListName);

    if (clickListName !== -1) {
      let todos = [...toDoList.toDos];
      console.log(todos);

      todos.splice(clickListName, 1);
      setTodoList({ toDos: todos });
      console.log(todos);
      // console.log(clickListName)}
      //    if(window.confirm("Are you sure you want to delete this task?")) {
      // }
    }
  }

  return (
    <>
      <section>
        <h3>Todo List</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* <Count
          stateVariable={this.state.todos}
          handleChildCallBack={this.handleChildCallBack}
        /> */}

        <ul>
          {Object.keys(toDoList.toDos).map((todo, index) => (
            <div
              className="itemContainer"
              data-index={index}
              key={todo}
              onClick={handleDelete}
            >
              <li> {todo}</li>
              <button className="deleteBtn" onClick={handleDelete}>
                {" "}
                Delete
              </button>
            </div>
          ))}
        </ul>
      </section>
    </>
  );
}
