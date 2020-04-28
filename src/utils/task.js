import {generateTaskId} from "./generateId";

const defaultOptions = {
  description: "new task",
  completed: false,
  initialized: false
}

export function Task(groupId, options={}) {
  const task = {...defaultOptions, ...options};
  task.id = generateTaskId();
  task.groupId = groupId;
  return task;
}