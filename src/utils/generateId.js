function makeCounter() {
  var i = 1;
  return function () {
    return i++;
  }
}
function taskIdGenerator() {
  const counter = makeCounter();
  return () => "task_" + counter();
}
function groupIdGenerator() {
  const counter = makeCounter();
  return () => "group_"+ counter();
}
export const generateTaskId = taskIdGenerator();
export const generateGroupId = groupIdGenerator();