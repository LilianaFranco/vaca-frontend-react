import React, { useEffect, useState } from "react";
import GroupsPage from "./GroupsPage";
import { get } from "../../../services/GroupService";

const GroupsPageContainer = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const groups = get();
    groups
      .then((res) => setGroups(res.data.reverse()))
      .catch((err) => console.log(err));
  }, [groups]);

  return (
    <div>
      <GroupsPage groups={groups} />
    </div>
  );
};

export default GroupsPageContainer;
