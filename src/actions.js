import assert from "assert";
export const TASK_ACTIONS = {
  ADD: 'TASK_ADD',
  REMOVE: 'TASK_REMOVE',
  EDIT: 'TASK_EDIT',
  REORDER: 'TASK_REORDER',
  TOGGLE: 'TASK_TOGGLE'
}
export function addTask(task) {
  assert(task.id, "task missing id");
  assert(task.groupId, "task missing group id");
  return {type: TASK_ACTIONS.ADD, task};
}
export function removeTask(id, groupId) {
  return {type: TASK_ACTIONS.REMOVE, payload: {id, groupId}}
}
export function editTask(fields, id) {
  return {type: TASK_ACTIONS.EDIT, payload: {fields, id} }
}
export function reorderTask(groupId, sourceIndex, destinationIndex) {
  return {type: TASK_ACTIONS.REORDER, payload: {groupId, sourceIndex, destinationIndex}}
}
export function toggleTask(id, groupId) {
  return {type: TASK_ACTIONS.TOGGLE, payload: {id, groupId}};
}

export const GROUP_ACTIONS = {
  ADD: 'GROUP_ADD',
  REMOVE: 'GROUP_REMOVE',
  EDIT: 'GROUP_EDIT',
  SELECT: 'GROUP_SELECT',
}

export function addGroup(group) {
  return {type: GROUP_ACTIONS.ADD, group};
}
export function removeGroup(id) {
  return {type: GROUP_ACTIONS.REMOVE, id}
}
export function editGroup(fields, id) {
  return {type: GROUP_ACTIONS.EDIT, payload: {fields, id}}
}
export function selectGroup(id) {
  return {type: GROUP_ACTIONS.SELECT, id};
}


