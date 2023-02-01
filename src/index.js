import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Provider disini  adalah sebuah tag seperti div
// pertama untuk menggunakan data kita redux kita membungkus nya didalam Provider yang kita panggil dari react-redux
// kita panggil data redux nya disini saya membuat nama datanya "redux"
// trus kita panggil didalam Provider seperti kita menggunakan props
