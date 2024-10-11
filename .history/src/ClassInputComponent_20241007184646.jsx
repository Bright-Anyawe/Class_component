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
        {ClassInputComponent.jsx:56 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'map')
    at ClassInput.render (ClassInputComponent.jsx:56:27)
    at finishClassComponent (react-dom_client.js?v=5902120b:14697:39)
    at updateClassComponent (react-dom_client.js?v=5902120b:14662:32)this.state.todos.map((todo, index) => {
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
