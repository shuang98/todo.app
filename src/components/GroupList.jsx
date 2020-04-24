import React from "react";
import GroupItem from "./GroupItem";
import NewGroupButton from "./NewGroupButton";

function GroupList() {
  return (<div className="group-list">
    <GroupItem name="Test Group"></GroupItem>
    <NewGroupButton></NewGroupButton>
  </div>)
}

export default GroupList;