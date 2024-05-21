import React, { useEffect, useState } from "react";
import GroupsPage from "src/pages/groups/GroupsPage";
import {
  deleteById,
  get,
  getById,
} from "src/services/groupServices/GroupService";

const GroupsPageContainer = () => {
  const [groups, setGroups] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const getGroups = () => {
    const groups = get();
    groups
      .then((res) => {
        setGroups(res.data.groups);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("Error", err.message);
        }
        console.log(err.config);
      });
  };

  const deleteGroup = (id) => {
    const isGroupValid = getById(id);
    isGroupValid
      .then(() => {
        deleteById(id)
          .then(() => {
            setSnackbarMessage("Grupo eliminado exitosamente");
            setSnackbarSeverity("success");
            setSnackbarOpen(true);
            getGroups();
          })
          .catch((err) => {
            setSnackbarMessage("Error eliminando el grupo");
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
            console.error(err);
          });
      })
      .catch((err) => {
        setSnackbarMessage("Grupo no encontrado");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
        console.error(err);
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
        deleteGroup={deleteGroup}
        onGroupsRefresh={onGroupsRefresh}
        snackbarOpen={snackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
        snackbarMessage={snackbarMessage}
        snackbarSeverity={snackbarSeverity}
      />
    </div>
  );
};

export default GroupsPageContainer;
