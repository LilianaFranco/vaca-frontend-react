import React, { useEffect, useState } from "react";
import GroupDetailPage from "src/pages/groups/GroupDetailPage";
import { getById } from "src/services/groupServices/GroupService";
import { useParams } from "react-router-dom";

const GroupDetailPageContainer = () => {
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
      <GroupDetailPage group={group} />
    </div>
  );
};

export default GroupDetailPageContainer;
