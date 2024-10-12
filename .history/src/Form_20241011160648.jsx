import { useState } from "react";
import ToDoCounter from "./Counter.jsx";

export default function Form({ increaseToDos, decreaseToDos, onTodoCount }) {
  const [toDoList, setTodoList] = useState({
    toDos: [],
    inputValue: "",
  });
  const [editClickCount, setEditClickCount] = useState(0);
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
    increaseToDos();
  }

  function handleDelete(index) {
    console.log(index);
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

  // function handleItemDisplay(e) {
  //   const deleteBtn = document.querySelector(".deleteBtn");
  //   const toDoList = deleteBtn.previousElementSibling;
  //   console.log(toDoList);
  // }

   function handleInputEditDisplay(e) {
      const editBtn = e.target;
    editBtn.textContent = 'Resubmit'
      
      const deleteBtn = editBtn.previousElementSibling;
      const toDoItem = deleteBtn.previousElementSibling;
      console.log(toDoItem);
      console.log(toDoItem.textContent);

      let taskInput;

      taskInput = document.createElement("input");
      taskInput.type = "text";
      taskInput.value = toDoItem.textContent;
      taskInput.onChange = { handleInputChange };

      toDoItem.style.display = "none";
      toDoItem.parentNode.insertBefore(taskInput, toDoItem.nextSibling);

      console.log(taskInput);

      setEditClickCount
    // if(editText === "Edit") {
    //   setIsEditted(true);
    //   console.log(e)
    //   handleInputChange(e)

    // }
    // else if(editText === 'Resubmit') {
    //   console.log(e)
    //   // handleSubmit(e)
    //   setIsEditted(false)

    // }
   }

  function handleEdit(e, index, todo) {
     handleInputEditDisplay(e);
    //  const deleteBtn = document.querySelector(".deleteBtn");
    //  console.log(deleteBtn)
    // console.log(e.index);

    //  const toDoList = deleteBtn.previousElementSibling;
    // //  let toDoListDataSet = toDoList.dataset.list;
    //  console.log(toDoList);

    //  toDoList.style.display = "none";
    //  data - list;
   
    // console.log(index)
    // console.log(todo)
    // handleItemDisplay(e);

    // handleInputEditDisplay(e);
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
                <li className="todoListEl" data-list={todo}>
                  {" "}
                  {todo}
                </li>
              )}

              <button
                className="deleteBtn"
                data-btn={todo}
                onClick={(e) => handleDelete(e, index)}
              >
                {" "}
                Delete
              </button>
              <button
                className="editBtn"
                onClick={(e) => handleEdit(e, index, todo)}
              >
             Edit
              </button>
            </div>
          ))}
        </ul>
      </section>
    </>
  );
}
