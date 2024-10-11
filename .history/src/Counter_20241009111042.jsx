

export default function ToDoCounter({ onTodoCount }) {
  console.log(onTodoCount)
  return (
    <>
      <h3>You have {onTodoCount} items in your todo </h3>;
    </>
  );
}