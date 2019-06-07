import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Img from "./components/Img.js";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import "bootstrap/dist/css/bootstrap.css";
import Particles from "react-particles-js";
import { robots } from "./robots";
import Pic from "./Pic";
import PicList from "./components/PicList";
ReactDOM.render(
  <>
    <Pic />
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
