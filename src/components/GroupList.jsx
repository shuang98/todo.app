import React from "react";
import GroupItem from "./GroupItem";
import NewGroupButton from "./NewGroupButton";
import { useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function GroupList() {
  const allGroups = useSelector((state) => state.groups.all);
  const selectedGroupId = useSelector((state) => state.groups.selected);
  return (
    <div className="group-list">
      <TransitionGroup>
      {allGroups.map((gid) => (
        <CSSTransition key={gid} timeout={300} classNames={"fade"}>
        <GroupItem
          key={gid}
          id={gid}
          selected={selectedGroupId == gid}
        />
        </CSSTransition>
      ))}
      </TransitionGroup>
      <NewGroupButton></NewGroupButton>
    </div>
  );
}

export default GroupList;
