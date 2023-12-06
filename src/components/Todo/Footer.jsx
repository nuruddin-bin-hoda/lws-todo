import { useDispatch, useSelector } from "react-redux";
import {
  updateStatus,
  addColorOnState,
  removeColorFromState,
} from "../../redux/TodoFilter/action";

export default function Footer() {
  const { status, color } = useSelector((state) => state.todoFilter);
  const tasks = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();

  function handleStatus(status) {
    dispatch(updateStatus(status));
  }

  function addColor(color) {
    dispatch(addColorOnState(color));
  }

  function removeColor(color) {
    dispatch(removeColorFromState(color));
  }

  let tasksCount = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (!tasks[i].complete) tasksCount++;
  }

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{tasksCount} tasks left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleStatus("all")}
          className={`cursor-pointer ${status === "all" ? "font-bold" : ""}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatus("incomplete")}
          className={`cursor-pointer ${
            status === "incomplete" ? "font-bold" : ""
          }`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatus("complete")}
          className={`cursor-pointer ${
            status === "complete" ? "font-bold" : ""
          }`}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() =>
            color.includes("green") ? removeColor("green") : addColor("green")
          }
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            color.includes("green") ? "bg-green-500" : ""
          }`}
        ></li>
        <li
          onClick={() =>
            color.includes("red") ? removeColor("red") : addColor("red")
          }
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            color.includes("red") ? "bg-red-500" : ""
          }`}
        ></li>
        <li
          onClick={() =>
            color.includes("yellow")
              ? removeColor("yellow")
              : addColor("yellow")
          }
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            color.includes("yellow") ? "bg-yellow-500" : ""
          }`}
        ></li>
      </ul>
    </div>
  );
}
