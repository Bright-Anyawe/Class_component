import { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
     todo: [],
     inputValue: '',
    }

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

  handleDelete(e) {
    const clickList = e.target.dataset.index;
    console.log(clickList)
  }

  handleRe


  render() {
    return (
      <>
        <section>
          <h3>this.props.name</h3>
            {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input type="text" 
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
/>
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        {this.state.todos.map((todo, index) => {
<ul className={`${todo} container`}>
  <li data-index={index} key={todo} >{todo}</li>
<button key={todo} onClick={this.handleDelete} >delete</button>
</ul>        })}
        <ul></ul>
        </section>
      </>
    );
  }
}

export default ClassInput;
