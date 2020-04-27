import { generateGroupId } from "./generateId";

const defaultOptions = {
  name: "New Group",
  editingOnCreate: true
}

export function Group(options) {
  const group = {...defaultOptions, ...options};
  group.id = generateGroupId();
  return group;
}