import { useState } from "react";


function ToDoCounter() {

     const [count, setCount] = useState({
          count: '0';
     })

       handleTodoCount() {
    setState((prevState) => ({
      ...prevState,
      count: prevState.todos + 1,
    }));

     return (
          <>
          
          
          
          </>
     )
}