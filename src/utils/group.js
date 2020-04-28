import { v4 as uuidv4 } from 'uuid';

const defaultOptions = {
  name: "New Group",
  initialized: false
}

export function Group(options) {
  const group = {...defaultOptions, ...options};
  group.id = uuidv4();
  return group;
}