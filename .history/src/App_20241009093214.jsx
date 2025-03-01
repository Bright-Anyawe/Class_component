import { useState } from 'react';
import Form from './Form'
import ToDoCounter from "./Counter.jsx"


function App() {
const [toDoCounter, handleTodoCount] = useState('')
  return (
    <>
      <ToDoCounter handleTodoCount={handleTodoCount} />
      <Form data={toDoCounter} />
    </>
  );
}

export default App
