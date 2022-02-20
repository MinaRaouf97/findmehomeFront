import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../store/actions/userActions';
import { useHistory } from "react-router-dom";



const Navbar = () => {


  const [logedin, setLogedin] = useState(false)
  const history = useHistory()


  const userstate = useSelector((state) => state.userLoginState.isLogedIn);
  const dispatch = useDispatch();

  console.log(userstate)
  const logOut = () => {

    localStorage.removeItem("user-info")
    localStorage.setItem('islogedIn', false)
    dispatch(logoutUser())
    setLogedin(false)
    history.push('/')



  }




  useEffect(() => {


  }, [userstate])







  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <Image className="fluid" src="../resources/images/find-and-home-logo.jpg"></Image>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  home 2 
                </Link>
              </li>

              <li className="nav-item">
              <Link className="nav-link" to="/SingleRoom">
                Single Room
              </Link>
            </li>


              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  about us
                </Link>
              </li>


              <li className="nav-item">
              <Link className="nav-link" to="/UserInfo">
              UserInfo
              </Link>
            </li>

              {!userstate ?

                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>

                : null}


              { userstate ? 
             
              <li className="nav-item">
                <Link className="nav-link " to="/userprofile">
                  User Info
                </Link>
              </li>
              :null }




              {!userstate ?
                <li className="nav-item">
                  <Link className="nav-link " to="/register">
                    Register
                  </Link>
                </li>
                : null}


           { userstate ? 

              <li className="nav-item">
                <Link className="nav-link" to="/propInfo">
                  Property Info
                </Link>
              </li>

              :null }

              { userstate ? 

              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              :null }


              {userstate ?
                <li className="nav-item">
                  <Link className="nav-link" to="/login" onClick={logOut}>
                    Log out
                  </Link>
                </li>
                : null
              }

              
            {userstate ?
                <li className="nav-item">
                  <Link className="nav-link" to="/updateProfile" >
                    update Profile
                  </Link>
                </li>
                : null
              }

                    
            {userstate ?
                <li className="nav-item">
                  <Link className="nav-link" to="/addprop" >
                    add new prop
                  </Link>
                </li>
                : null
              }



            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;