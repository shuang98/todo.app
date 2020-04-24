import { generateGroupId } from "./generateId";

const defaultOptions = {
  name: "New Group"
}

export function Group(options) {
  const group = {...defaultOptions, ...options};
  group.id = generateGroupId();
  return group;
}