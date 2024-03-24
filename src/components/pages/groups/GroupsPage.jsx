import React from "react";
import GroupCard from "../../common/GroupCard";
import { Box, ListItem } from "@mui/material";

const GroupsPage = ({ groups }) => {
  console.log(groups);
  return (
    <div>
      <Box>
        {groups.map((group) => (
          <ListItem key={group.id}>
            <GroupCard group={group} />
          </ListItem>
        ))}
      </Box>
      ;
    </div>
  );
};

export default GroupsPage;
