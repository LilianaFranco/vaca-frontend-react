import React from "react";
import GroupsPage from "./GroupsPage";

const GroupsPageContainer = () => {
  const groups = [
    {
      id: 1,
      name: "Group #1",
      color: "black",
      groupStatus: "Debo",
      balanceValue: "20000",
    },

    {
      id: 2,
      name: "Group #2",
      color: "red",
      groupStatus: "Debo",
      balanceValue: "3000",
    },
    {
      id: 3,
      name: "Group #3",
      color: "red",
      groupStatus: "Me deben",
      balanceValue: "3000",
    },

    {
      id: 4,
      name: "Group #4",
      color: "red",
      groupStatus: "Me deben",
      balanceValue: "6000",
    },
  ];

  return (
    <div>
      <GroupsPage groups={groups} />
    </div>
  );
};

export default GroupsPageContainer;
