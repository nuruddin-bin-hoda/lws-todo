import { UPDATESTATUS, ADDCOLOR, REMOVECOLOR } from "./actionType";

export function updateStatus(value) {
  return {
    type: UPDATESTATUS,
    payload: value,
  };
}

export function addColorOnState(value) {
  return {
    type: ADDCOLOR,
    payload: value,
  };
}

export function removeColorFromState(value) {
  return {
    type: REMOVECOLOR,
    payload: value,
  };
}
