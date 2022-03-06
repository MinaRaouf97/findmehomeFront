import React, { useState, useEffect } from "react";
import { FaAlignRight } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../store/actions/userActions';
import { useHistory } from "react-router-dom";
const socketUrl = "http://localhost:3231"


const Navbar =()=> {
    const[socket,setSocket] =useState({
      socket:null,
      user:null,
    })
    const [isOpen, setState] = useState(false)


    const handleToggle = () => {
       setState({ isOpen: !isOpen });
    };

    const history = useHistory()
    const userstate = useSelector((state) => state.userLoginState.isLogedIn);
    const dispatch = useDispatch();
  
    console.log(userstate)
    const logOut = () => {
  
      localStorage.removeItem("user-info")
      localStorage.setItem('islogedIn', false)
      dispatch(logoutUser())
     
      history.push('/')
  
    }

  
    useEffect(() => {
  
  
    }, [userstate])
  
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={''} alt="" className="logo" />
                        </Link>
                        <button
                            type="button"
                            className="nav-btn"
                            onClick={()=>handleToggle} >
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={ isOpen ? "nav-links show-nav" : "nav-links"} >
                 
              <li className="nav-item">
                <Link className="nav-link" to="/">
                    Home
                </Link>
              </li>



              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  about us
                </Link>
              </li>



              {!userstate ?

                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>

                : null}


              {userstate ?

                <li className="nav-item">
                  <Link className="nav-link " to="/userposts">
                    User Info
                  </Link>
                </li>
                : null}




              {!userstate ?
                <li className="nav-item">
                  <Link className="nav-link " to="/register">
                    Register
                  </Link>
                </li>
                : null}




              {userstate ?
                <li className="nav-item">
                  <Link className="nav-link" to="/addprop" >
                    add new prop
                  </Link>
                </li>
                : null
              }

                {userstate ?
                  <li className="nav-item">
                    <Link className="nav-link" to="/chat">
                      Public Rooms
                      </Link>
                  </li>
              : null }





              {userstate ?
                <li className="nav-item">
                  <Link className="nav-link" to="/login" onClick={logOut}>
                    Log out
                  </Link>
                </li>
                : null
              }




                    </ul>
                </div>
            </nav>
        );
   
}


export default Navbar