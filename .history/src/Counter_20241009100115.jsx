import { useState } from "react";


export default function ToDoCounter({ onTodoCount }) {
  return (
    <>
      <h3>You have {onTodoCount.count} items in your todo </h3>;
    </>
  );
}