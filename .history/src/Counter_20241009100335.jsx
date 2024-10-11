

export default function ToDoCounter({ onTodoCount }) {
  console.log(onTodoCount.count)
  return (
    <>
      <h3>You have {onTodoCount.count} items in your todo </h3>;
    </>
  );
}