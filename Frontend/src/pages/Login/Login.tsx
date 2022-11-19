import * as  React from 'react';
// import React, { useState , useContext} from 'react';
import { AuthenticatedContext } from '../../Context/AuthenticatedContext';

import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface userDataTypes {
  email: string,
  password: string
}

const initialState:userDataTypes = { email: "", password: "" };
// const initialUser = { email: "", password: "" };

function Login() {
  const [state, setState] = React.useState<userDataTypes>(initialState);
  // const [loginUser, setLoginUser] = useState(initialUser);
  const [isPasswordShow, setIsPasswordShow] = React.useState<boolean>(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const {  setIsAuthenticated , setUser} = React.useContext<any>(AuthenticatedContext);

  const handleChange = (e:any) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('state', state);

    await axios.post("http://localhost:5000/api/v1/user/login", state)
    .then((res) => {

      if (res.status == 200) {
        console.log("User Logged in successfuly!");
        toast.success('User has been logged In!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsAuthenticated(true);
        // setLoginUser(state);
        setIsLoading(false);
        setUser(state);
        navigate("/dashboard");
      }
    })
    .catch((error)=> {
      setIsLoading(false)


      if (error.response.status == 400) {
        console.log("password is wrong!");
        toast.error('password is wrong!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else  {
        console.log("Something went wrong!");
        toast.error('Something went wrong!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    })
    .finally(()=> {
        setIsLoading(false);
    })

    
  }


  return (
    <div className='mvh-100 loginPage d-flex justify-content-center align-items-center'>
      <div className="container ">
        <div className="row">
          <div className="col">
            <Link className='btn btn-home' to="/"><i className="fa-solid fa-arrow-left"></i></Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="card  w-100">
              <div className="div card-body">
                <h3>LOGIN</h3>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                  <br />
                  <div className="input-group flex-nowrap">
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" aria-label="Email" name='email' required onChange={handleChange} />
                    {/* <span className="input-group-text" id="addon-wrapping">@</span> */}
                  </div>
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="input-group flex-nowrap">
                    <input type={isPasswordShow ? "text" : "password"} className="form-control" id="password" name='password' placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" required onChange={handleChange} />
                    <button type='button' className="input-group-text" id="addon-wrapping" onClick={() => { setIsPasswordShow(!isPasswordShow) }} ><i className={`fa-solid fa-eye${isPasswordShow ? "" : "-slash"}`}></i></button>
                  </div>
                  <div className="text-center">
                    <button type="submit" disabled={isLoading}  className="btn  loginButton mt-4">
                      {
                        !isLoading ?
                          "Login"
                          : <div className='spinner-border spinner-border-sm'></div>
                      }
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login