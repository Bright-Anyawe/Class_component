import { useState } from 'react';
import Form from './Form'
import ToDoCounter from "./Counter.jsx"


function App() {
  const [countTodo, setCount] = useState(9
    
  )


    function increaseToDos() {

setCount(countTodo + 1)

    }

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
