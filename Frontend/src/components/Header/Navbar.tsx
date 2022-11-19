import * as React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark "
        style={{ zIndex: "1000" }}
      >
        <div className="container">
          <h1 className="text-white" >Auth Api Task</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <Link type="button" to='/login' className="btn btn-light ms-auto " >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
