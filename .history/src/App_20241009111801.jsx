import { useState } from 'react';
import Form from './Form'
import ToDoCounter from "./Counter.jsx"


function App() {
  const [countTodo, setInCount] = useState(0)



setCount(countTodo + 1)


      function decreaseToDos() {
        setCount(countTodo - 1);
      }
  return (
    <>
      <ToDoCounter onTodoCount={countTodo} />
      <Form handleTodoCount={increaseToDos}  />
    </>
  );
}

export default App
