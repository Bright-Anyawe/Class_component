import { Component } from "react";
import Count from "./Count.jsx"


class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
      childProps: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChildCallBack = this.handleChildCallBack.bind(this)
  }

  handleChildCallBack(handleTodoCount) {
    
    this.setState({childProps: handleTodoCount})
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
    console.log(this.state.todos)
  }

  handleDelete(e) {
    console.log(e.currentTarget);
    const clickListName = e.currentTarget.dataset.index
    console.log(clickListName)
    if (clickListName !== -1) {
      let todos = [...this.state.todos];
      todos.splice(clickListName, 1);
      this.setState({ todos: todos });
      console.log(todos);
    }
    // console.log(clickListName)}
    //    if(window.confirm("Are you sure you want to delete this task?")) {
    // }
  }

  render() {
    return (
      <section>
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
      <Count stateVariable={this.state.todos}  />

       <ul>
          {this.state.todos.map((todo, index) => (
            <div
              className="itemContainer"
              data-index={index}
              key={todo}
              onClick={this.handleDelete}
            >
              <li> {todo}</li>
              <button className="deleteBtn" onClick={() => this.handleDelete(index)}>
                {" "}
                Delete
              </button>
            </div>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
