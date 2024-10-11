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
         // console.log(clickListName)}
    //    if(window.confirm("Are you sure you want to delete this task?")) {
    // }
  }
}

 return (
     <>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <Count
          stateVariable={this.state.todos}
          handleChildCallBack={this.handleChildCallBack}
        />

        <ul>
          {this.state.todos.map((todo, index) => (
            <div
              className="itemContainer"
              data-index={index}
              key={todo}
              onClick={this.handleDelete}
            >
              <li> {todo}</li>
              <button
                className="deleteBtn"
                onClick={() => this.handleDelete(index)}
              >
                {" "}
                Delete
              </button>
            </div>
          ))}
        </ul>
      </section>>
 )
}
