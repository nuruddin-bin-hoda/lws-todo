import uniqid from "uniqid";
import {
  ADDTASK,
  COMPLETE,
  DELETE,
  ADDCOLOR,
  COMPLETEALLTASK,
  CLEARCOMPLETEDTASK,
} from "./actionType";

// todos state
const initialState = {
  todoList: [
    {
      id: uniqid(5),
      title: "learn redux",
      complete: false,
      color: "",
    },
  ],
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADDTASK:
      return {
        todoList: [
          ...state.todoList,
          {
            id: uniqid(),
            title: action.payload,
            complete: false,
            color: "",
          },
        ],
      };

    case DELETE:
      return {
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };

    case COMPLETE: {
      return {
        todoList: [...state.todoList].map((todo) => {
          if (todo.id === action.payload.id) {
            todo.complete = action.payload.isComplete;
          }
          return todo;
        }),
      };
    }

    case ADDCOLOR:
      return {
        todoList: [...state.todoList].map((todo) => {
          if (todo.id === action.payload.id) {
            todo.color = action.payload.color;
          }
          return todo;
        }),
      };

    case COMPLETEALLTASK:
      return {
        todoList: [...state.todoList].map((todo) => {
          todo.complete = true;
          return todo;
        }),
      };

    case CLEARCOMPLETEDTASK:
      return {
        todoList: state.todoList.filter((todo) => todo.complete === false),
      };

    default:
      return state;
  }
}
