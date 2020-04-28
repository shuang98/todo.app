import { generateGroupId } from "./generateId";

const defaultOptions = {
  name: "New Group",
  initialized: false
}

export function Group(options) {
  const group = {...defaultOptions, ...options};
  group.id = generateGroupId();
  return group;
}