import React, { useEffect, useState } from "react";
import GroupsPage from "src/pages/groups/GroupsPage";
import { get } from "src/services/groupServices/GroupService";

const GroupsPageContainer = () => {
  const [groups, setGroups] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const getGroups = () => {
    const groups = get();
    groups
      .then((res) => {
        setGroups(res.data.groups);
      })
      .catch((err) => {
        if (err.response) {
          // The request was made and the server responded with a status code
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          // The request was made but no response was received
          console.log(err.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", err.message);
        }
        console.log(err.config);
      });
  };

  useEffect(() => {
    getGroups();
  }, []);

  const onGroupsRefresh = () => {
    getGroups();
  };

  return (
    <div>
      <GroupsPage
        groups={groups}
        onGroupsRefresh={onGroupsRefresh}
        snackbarOpen={snackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
      />
    </div>
  );
};

export default GroupsPageContainer;
