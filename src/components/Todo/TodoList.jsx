import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todoList = useSelector((state) => state.todos.todoList);
  const { status, color } = useSelector((state) => state.todoFilter);

  const filterdTodos = todoList
    .filter((todo) => {
      if (status === "incomplete") {
        return todo.complete === false;
      } else if (status === "complete") {
        return todo.complete === true;
      }

      return todo;
    })
    .filter((todo) => {
      if (color.length) {
        return color.includes(todo.color);
      }

      return todo;
    });

  return (
    <>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {filterdTodos.map((todo) => {
          return <TodoItem key={todo.id} data={todo} />;
        })}
      </div>
      <hr className="mt-4" />
    </>
  );
}
