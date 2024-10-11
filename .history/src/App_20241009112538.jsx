import { useState } from 'react';
import Form from './Form'
import ToDoCounter from "./Counter.jsx"


function App() {
  const [incrementTodoCount, setIncrementCount] = useState(0)



      function decreaseToDos() {
        setCount(countTodo - 1);
      }
  return (
    <>
      <ToDoCounter onTodoCount={incrementTodoCount} />
      <Form
        setIncrementCount={setIncrementCount}
        setdecrementCount
        onTodoCount={incrementTodoCount}
      />
    </>
  );
}

export default App
