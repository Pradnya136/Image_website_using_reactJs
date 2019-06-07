import React from "react";
import "./PicList.css";
import Img from "./Img";

function PicList({ robots }) {
  const ImgCom = robots.map((user, i) => {
    return (
      <Img
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });

  return (
    <>
      {ImgCom}
      {/* <Img key={id} id={robots[i].id} name={robots[i].name} email={robots[i].email} /> */}
    </>
  );
}

export default PicList;
