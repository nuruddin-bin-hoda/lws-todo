import {
  ADDTASK,
  DELETE,
  COMPLETE,
  ADDCOLOR,
  COMPLETEALLTASK,
  CLEARCOMPLETEDTASK,
} from "./actionType";

export function addTask(value) {
  return {
    type: ADDTASK,
    payload: value,
  };
}

export function deleteTask(value) {
  return {
    type: DELETE,
    payload: value,
  };
}

export function completeTask(value) {
  return {
    type: COMPLETE,
    payload: value,
  };
}

export function addColor(value) {
  return {
    type: ADDCOLOR,
    payload: value,
  };
}

export function completeAllTask() {
  return {
    type: COMPLETEALLTASK,
  };
}

export function clearCompletedTask() {
  return {
    type: CLEARCOMPLETEDTASK,
  };
}
