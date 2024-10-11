import { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
  }

  handleDelete(e, index) {
    console.log(index);
    if (index !== -1) {
      let todos = [...this.state.todos];
      todos.splice(index, 1);
      this.setState({ todos: todos });
      console.log(todos)
    }
    // const clickListName = e.currentTarget.dataset.index
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
        <ul>
          {this.state.todos.map((todo, index) => (
            <div
              className="itemContainer"
              data-index={index}
              key={todo}
              onClick={this.handleDelete}
            >
              <li> {todo}</li>
              <button className="deleteBtn" onClick={(e) => this.handleDelete()}>
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
