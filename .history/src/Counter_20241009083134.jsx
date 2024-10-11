import { useState } from "react";


export default function ToDoCounter({todos}) {

     const [countTodo, setCount] = useState({
          count: '',
     })

    function handleTodoCount() {

    setCount((prevState) => ({
      ...prevState,
      count: todos.length,
    }));

}

     return (
       <>
         <h3>You have {countTodo.count} items in your todo </h3>;
       </>
     );
}