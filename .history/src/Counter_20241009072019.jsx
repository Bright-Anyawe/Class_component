import { useState } from "react";


function ToDoCounter() {

     const [count, setCount] = useState({
          count: '0'
     })

    function   handleTodoCount() {

    setState((prevState) => ({
      ...prevState,
      count: prevState.todos.length,
    }));
}

     return (
          <>
          
          
          
          </>
     )
}