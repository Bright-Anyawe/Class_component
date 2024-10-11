import { useState } from 'react';
import Form from './Form'
import ToDoCounter from "./Counter.jsx"


function App() {
  const [incrementTodoCount, setCount] = useState(0)



      function decreaseToDos() {
        setCount(incrementTodoCount - 1);
      }
  return (
    <>
      <ToDoCounter onTodoCount={incrementTodoCount} />
      <Form
        setIncrementCount={setIncrementCount}
        decreaseToDos={decreaseToDos}
        onTodoCount={incrementTodoCount}
      />
    </>
  );
}

export default App
