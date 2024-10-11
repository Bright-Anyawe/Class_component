import { useState } from 'react';
import Form from './Form'
import ToDoCounter from "./Counter.jsx"


function App() {

  return (
    <>
      <ToDoCounter handleTodoCount={handleTodoCount} />
      <Form toDoCounter={toDoCounter} />
    </>
  );
}

export default App
