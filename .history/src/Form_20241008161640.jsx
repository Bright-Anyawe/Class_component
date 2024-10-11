import { useState } from "react";

export default function Form() {

const [todoList, setTodoList] = useState({
  toDos: [],
  inputValue: ""
});


 }

function  handleInputChange(e) {

   setTodoList((prevState) => ({
      ...prevState,
      inputValue: e.target.value,
    }));
  }

 function handleSubmit(e) {
   e.preventDefault()
setTodoList((prevState) => ({
      todos: prevState.todos.concat(prevState.inputValue),
      inputValue: "",
    }))

  }

 function   handleDelete(e) {

    console.log(e.currentTarget);
    const clickListName = e.currentTarget.dataset.index;
    console.log(clickListName);
    if (clickListName !== -1) {
      let todos = [...this.state.todos];
      todos.splice(clickListName, 1);
      this.setTodoList({ todos: todos });
      console.log(todos);
         // console.log(clickListName)}
    //    if(window.confirm("Are you sure you want to delete this task?")) {
    // }
  }
}

 return (
     <>
     
        <h3>{this.props.name}</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={todoList.inputValue}
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
          {this.state.todos.map((todo, index) => (
            <div
              className="itemContainer"
              data-index={index}
              key={todo}
              onClick={handleDelete}
            >
              <li> {todo}</li>
              <button
                className="deleteBtn"
                onClick={() => handleDelete(index)}
              >
                {" "}
                Delete
              </button>
            </div>
          ))}
        </ul>
      </section>
     </>
 )
}
