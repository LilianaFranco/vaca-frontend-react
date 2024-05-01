import React, { useEffect, useState } from "react";
import GroupDetail from "src/components/pages/groups/GroupDetail";
import { getById } from "src/services/GroupService";
import { useParams } from "react-router-dom";

const GroupDetailContainer = () => {
  const id = useParams().id;

  const [group, setGroup] = useState(null);

  const getGroup = () => {
    const groupRequest = getById(id);
    groupRequest
      .then((res) => {
        setGroup(res.data.group);
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
    getGroup();
  }, []);

  if (!group) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <GroupDetail group={group} />
    </div>
  );
};

export default GroupDetailContainer;
