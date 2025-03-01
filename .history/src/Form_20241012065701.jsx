import { useState } from "react";
import ToDoCounter from "./Counter.jsx";
// import PropTypes from "prop-types";

export default function Form({ increaseToDos, decreaseToDos, onTodoCount }) {
  const [toDoList, setTodoList] = useState({
    toDos: [],
    inputValue: "",
  });
  const [editClickCount, setEditClickCount] = useState(0);
  const [isEditted, setIsEditted] = useState("");

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

  function handleItemResuit(e,index) {
    let editBtn = e.target;
    let taskInput = document.querySelector(".editInput");
    console.log(isEditted);
    taskInput.value = isEditted;

    let itemToDo = toDoList.toDos[index];

    toDoList.toDos[index] = isEditted;

    const deleteBtn = editBtn.previousElementSibling;
    const toDoItem = deleteBtn.previousElementSibling;

    let itemElement = toDoItem.previousElementSibling;
    itemElement.textContent = isEditted;

    itemElement.style.display = "block";

    taskInput.remove();

    editBtn.textContent = "Edit";
    console.log(itemElement);
  }

  function handleInputEditDisplay(e) {
    const editBtn = e.target;

    const deleteBtn = editBtn.previousElementSibling;
    const toDoItem = deleteBtn.previousElementSibling;
    console.log(toDoItem);
    console.log(toDoItem.textContent);

    let taskInput;

    taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.value = toDoItem.textContent;
    taskInput.className = "editInput";
    toDoItem.style.display = "none";
    toDoItem.parentNode.insertBefore(taskInput, toDoItem.nextSibling);

    taskInput.addEventListener("change", () => {
      setIsEditted(taskInput.value);
      console.log(taskInput.value);
    });
    console.log(taskInput.value);

    editBtn.textContent = "Resubmit";
  }

  function handleEdit(e, index, todo) {
    let editBtn = e.target;

    if (editBtn.textContent === "Edit") {
      handleInputEditDisplay(e);
    } else if (editBtn.textContent === "Resubmit") {
      handleItemResumbit(e, index);
      console.log(itemToDo);
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
              <li className="todoListEl" data-list={todo}>
                {" "}
                {todo}
              </li>

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
                data-edit={todo}
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

// Form.PropTypes = {
//   increaseToDos: PropTypes.func().isRequired,
//   decreaseToDos: PropTypes.func().isRequired,
// };
