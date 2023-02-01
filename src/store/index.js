import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import counterReducer from "./counter";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

//  cara kerja redux di reactjs dengan cara menurunkan terus sifat redux dari component yang tertingi hingga terendah
// seperti air mengalir dari tinggi ke rendah
// jadi kita harus memanggil data redux di dalam component tertinggi agar semua child component nya dapat menggunakan nya
