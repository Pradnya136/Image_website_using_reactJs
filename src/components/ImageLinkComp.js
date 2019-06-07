import React from "react";
import "./ImageLinkComp.css";

function ImageLinkComp({ searchfield, searchChange }) {
  return (
    <>
      <div>
        <input
          className="center w-50  shadow-5"
          type="search"
          placeholder="Search here"
          onChange={searchChange}
        />
      </div>
      <div>
        <button placeholder="Search here" className="center w-20 shadow-5">
          Search
        </button>
      </div>
    </>
  );
}

export default ImageLinkComp;
