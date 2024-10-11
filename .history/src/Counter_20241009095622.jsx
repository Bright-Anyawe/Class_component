import { useState } from "react";


export default function ToDoCounter({todos}) {

     const [countTodo, setCount] = useState({
          count: '0',
     })

    function   handleTodoCount() {

    setCount((prevState) => ({
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