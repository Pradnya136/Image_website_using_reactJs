import React from "react";

import "./Img.css";

function Img(props) {
  const { name, id, email } = props;
  return (
    <>
      <div className="Img-wrapper">
        <div className="tc dib br3 pa3 m-2 w-30 grow bg-lightest-blue bw2 shadow-5">
          <img
            className="shadow-5 grow"
            src={`https://picsum.photos/id/${id}/200/200`}
            alt="pic taken by photographer"
          />
          <div className="">
            <span>Ranking: {id}</span>
            <p>Name: {name}</p>
            <p>Email ID :{email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Img;
