import { useState } from "react";


function ToDoCounter() {

     const [countTodo, setCount] = useState({
          count: '0',
     })

    function   handleTodoCount() {

    setState((prevState) => ({
      ...prevState,
      count: prevState.todos.length,
    }));
}

     return (
       <>
         <h3>You have {countTodo.count} items in your todo </h3>;
       </>
     );
}