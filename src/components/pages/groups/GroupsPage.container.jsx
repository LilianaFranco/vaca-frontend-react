import React from "react";
import GroupsPage from "./GroupsPage";

const GroupsPageContainer = () => {
  const groups = [
    {
      id: 1,
      name: "Group #1",
      color: "black",
      balanceStatus: "Debo",
      balanceValue: "20000",
    },

    {
      id: 2,
      name: "Group #2",
      color: "red",
      balanceStatus: "Debo",
      balanceValue: "3000",
    },
  ];

  console.log(groups);
  return (
    <div>
      <GroupsPage groups={groups} />
    </div>
  );
};

export default GroupsPageContainer;
