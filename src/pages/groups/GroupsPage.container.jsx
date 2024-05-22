import React, { useEffect, useState } from "react";
import GroupsPage from "src/pages/groups/GroupsPage";
import {
  deleteById,
  get,
  getById,
} from "src/services/groupServices/GroupService";

const GroupsPageContainer = () => {
  const [groups, setGroups] = useState([]);
  // const [snackbarOpen, setSnackbarOpen] = useState(false);
  // const [snackbarMessage, setSnackbarMessage] = useState("");
  // const [snackbarSeverity, setSnackbarSeverity] = useState("");

  const [snackbarConfig, setSnackbarConfig] = useState({
    message: "",
    severity: "",
    open: false,
  });

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
            setSnackbarConfig({
              message: "Grupo eliminado exitosamente",
              open: true,
              severity: "success",
            });
            getGroups();
          })
          .catch((err) => {
            setSnackbarConfig({
              message: "Error eliminando el grupo",
              open: true,
              severity: "error",
            });
            console.error(err);
          });
      })
      .catch((err) => {
        setSnackbarConfig({
          message: "Grupo no encontrado",
          open: true,
          severity: "error",
        });
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
        snackbarConfig={snackbarConfig}
        setSnackbarConfig={setSnackbarConfig}
      />
    </div>
  );
};

export default GroupsPageContainer;
