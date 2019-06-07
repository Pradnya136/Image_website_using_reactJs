import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="Navbar ">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="https://picsum.photos/">
              Explore amazing photos collections of famous Photographers
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
