import React from "react";
import GroupItem from "./GroupItem";
import NewGroupButton from "./NewGroupButton";
import { useSelector } from "react-redux";

function GroupList() {
  const allGroups = useSelector((state) => state.groups.all);
  const selectedGroupId = useSelector((state) => state.groups.selected);
  return (
    <div className="group-list">
      {allGroups.map((gid) => (
        <GroupItem
          key={gid}
          id={gid}
          selected={selectedGroupId == gid}
        ></GroupItem>
      ))}
      <NewGroupButton></NewGroupButton>
    </div>
  );
}

export default GroupList;
