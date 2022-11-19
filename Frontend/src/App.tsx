import * as React from "react";
import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import CustomRoutes from "./pages/Routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthenticatedContextProvider from "./Context/AuthenticatedContext";
function App() {
  return (
    <>
      <AuthenticatedContextProvider>
        <CustomRoutes />
        <ToastContainer />
        {/* <div>Ahmad</div> */}
      </AuthenticatedContextProvider>
    </>
  );
}

export default App;
