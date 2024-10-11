import { useEffect, useState } from "react";


export default function ToDoCounter({todos, handleTodoCount}) {

     const [countTodo, setCount] = useState({
          count: '',
     })

   const toDoCount =  function handleTodoCount() {

    setCount((prevState) => ({
      ...prevState,
      count: todos.length,
    }));

}

useEffect(() => {
  export default function ToDoCounter({todos, handleTodoCount}) {
.(toDoCount)
})

     return (
       <>
         <h3>You have {countTodo.count} items in your todo </h3>;
       </>
     );
}