import { v4 as uuidv4 } from 'uuid';

const defaultOptions = {
  description: "new task",
  completed: false,
  initialized: false
}

export function Task(groupId, options={}) {
  const task = {...defaultOptions, ...options};
  task.id = uuidv4();
  task.groupId = groupId;
  return task;
}