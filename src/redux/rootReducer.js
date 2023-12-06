import { combineReducers } from "redux";
import todosReducer from "./Todo/todosReducer";
import todoFilterReducer from "./TodoFilter/todoFilterReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  todoFilter: todoFilterReducer,
});

export default rootReducer;
