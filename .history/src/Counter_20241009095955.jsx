import { useState } from "react";


export default function ToDoCounter({onCountTodo}) {



     return (
       <>
         <h3>You have {onCountTodo.count} items in your todo </h3>;
       </>
     );
}