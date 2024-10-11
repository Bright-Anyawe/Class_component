import { useState } from 'react';
import Form from './Form'
import ToDoCounter from "./Counter.jsx"


function App() {
const [toDoCount, handleTodoCount] = useState('')
  return (
    <>
      <ToDoCounter handleTodoCount={handleTodoCount} />
      <Form data={data}  />
    </>
  );
}

export default App
