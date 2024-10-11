

export default function ToDoCounter({ onTodoCount }) {
  console.log(onTodoCount)
  return (
    <>
      <h3>You have entered {onTodoCount} items in your todo </h3>;
    </>
  );
}