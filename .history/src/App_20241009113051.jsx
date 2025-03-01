import { useState } from 'react';
import Form from './Form'
import ToDoCounter from "./Counter.jsx"


function App() {
  const [incrementTodoCount, setCount] = useState(0)

   function increaseToDos() {
     setCount(incrementTodoCount + 1);
   }

      function decreaseToDos() {
        setCount(incrementTodoCount - 1);
      }
  return (
    <>
      <ToDoCounter onTodoCount={incrementTodoCount} />
      <Form
        setIncrementCount={increaseToDos}
        decreaseToDos={decreaseToDos}
        onTodoCount={incrementTodoCount}
      />
    </>
  );
}

export default App
