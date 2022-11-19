import * as React from 'react';
import { AuthenticatedContext } from '../../Context/AuthenticatedContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { Link } from 'react-router-dom';
function Dashboard() {
  const  { isAuthenticated, setIsAuthenticated }  = React.useContext<any>(AuthenticatedContext);


  const navigate = useNavigate()
  const Logout = () => {
    setIsAuthenticated(false);
    navigate("/");
    toast.success('User has been logged out!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div
      className="dashboardPage d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="container py-5">
        <div className="row" style={{position:'fixed',left: '20px',top: '20px'}}>
          <div className="col">
            <button onClick={Logout} className="btn  btn-danger h3" >
              Logout 
            </button>
          </div>
        </div>
        <div className="row">
          <h1 className="text-success d-flex justify-content-center">
            #WELCOME TO DASHBOARD!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
