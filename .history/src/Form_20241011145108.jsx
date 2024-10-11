import { useState } from "react";
import ToDoCounter from "./Counter.jsx";

export default function Form({ increaseToDos, decreaseToDos, onTodoCount }) {
  const [toDoList, setTodoList] = useState({
    toDos: [],
    inputValue: "",
  });
  const [editText, setEditText] = useState("Edit");
  const [isEditted, setIsEditted] = useState(false);

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
    increaseToDos()
  }

  function handleDelete( index) {
    
console.log(index)
    const clickListName = index;
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
      decreaseToDos();
    }
  }
  
  function handleItemDisplay(e) {
     const deleteBtn = document.querySelector(".deleteBtn");
     const toDoList = deleteBtn.previousElementSibling;
     console.log(toDoList);
  }

   function handleInputEditDisplay(e) {
     const editInput = document.querySelector(".editInput");
     console.log(editInput)

    if(editText === "Edit") {
      setEditText("Resubmit");
      setIsEditted(true);
      console.log(e)
      handleInputChange(e)

    } 
    else if(editText === 'Resubmit') {
      console.log(e)
      // handleSubmit(e)
      setIsEditted(false)

    }
   }

  function handleEdit(e, index) {
console.log(e.target)
const editBtn = e.target
    // handleItemDisplay(e);

    
    handleInputEditDisplay(e);

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
            value={toDoList.inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>

        {/* <ToDoCounter toDoList={toDoList} /> */}
        {/* <Count
          stateVariable={this.state.todos}
          handleChildCallBack={this.handleChildCallBack}
        /> */}

        <ul>
          {toDoList.toDos.map((todo, index) => (
            <div className="itemContainer" data-index={index} key={todo}>
              {isEditted ? (
                <input
                  className="editInput"
                  value={toDoList.inputValue}
                  onChange={handleInputChange}
                />
              ) : (
                <li className="todoListEl" data-list="list">
                  {" "}
                  {todo}
                </li>
              )}

              <button
                className="deleteBtn"
                onClick={(e) => handleDelete(e, index)}
              >
                {" "}
                Delete
              </button>
              <button className="editBtn" onClick={(e) => handleEdit(e, index)}>
                {editText}
              </button>
            </div>
          ))}
        </ul>
      </section>
    </>
  );
}

