import { useState } from 'react';
import Form from './Form'
import ToDoCounter from "./Counter.jsx"


function App() {
  const [countTodo, setCount] = useState('')


    function increaseToDos() {
setCount(countTodo )

    }
  return (
    <>
      <ToDoCounter onTodoCount={countTodo} />
      <Form handleTodoCount={handleTodoCount} />
    </>
  );
}

export default App
