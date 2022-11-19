import React from "react";
import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import CustomRoutes from "./pages/Routes";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
function App() {
  return <>
  <CustomRoutes/>
  <ToastContainer />
  </>;
}

export default App;
