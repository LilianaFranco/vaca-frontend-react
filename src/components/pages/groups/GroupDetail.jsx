import React from "react";
import { useLocation, useParams } from "react-router-dom";

const GroupDetail = () => {
  const group = useParams();
  console.log(group.id);

  //Buscar cómo sacar el valor de la url.

  return <div>Soy el nuevo grupo</div>;
};

export default GroupDetail;
