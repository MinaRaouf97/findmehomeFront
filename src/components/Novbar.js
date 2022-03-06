import React, { useState, useRef, useEffect } from 'react';

import { FaBars, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../store/actions/userActions';
import { useHistory } from "react-router-dom";

import logo from '../resources/find-and-home-logo-removebg-preview.png'

import '../resources/navbarStyle/navStyle.css'
const socketUrl = "http://localhost:3231"


const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const [socket, setSocket] = useState({
    socket: null,
    user: null,
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
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };



  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }

    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [showLinks, userstate, theme]);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {/* {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })} */}

            <li >
              <Link to="/">
                Home

              </Link>
            </li>

            <li>
              <Link to="/aboutus">
                about us
              </Link>
            </li>

            {userstate ?

              <li>
                <Link className='linking' to="/userposts">
                  User Info
                </Link>
              </li>
              : null}




            {!userstate ?
              <li>
                <Link className="nav-link " to="/register">
                  Register
                </Link>
              </li>
              : null}




            {userstate ?
              <li>
                <Link to="/addprop" >
                  add prop
                </Link>
              </li>
              : null
            }


            {userstate ?
              <li>
                <Link to="/chat">
                  Public Rooms
                </Link>
              </li>
              : null}
            {!userstate ?

              <li>
                <Link to="/login">
                  Login <span><FaUserPlus /></span>
                </Link>
              </li>

              : null}
              

            {userstate ?
              <li>
                <Link className='linking' to="/login" onClick={logOut}>
                  Log out <span><FaUserMinus /></span>
                </Link>
              </li>
              : null
            }

          </ul>
        </div>

        <ul className='social-icons'>
          {/* <button className="btnzz" onClick={toggleTheme}>
            <FaMoon/>
          </button> */}
          <li >
            <a href=''><span /></a>
          </li>
          <li >
            <a href=''><span /></a>
          </li>
          <li >
            <a href=''><span /></a>
          </li>


        </ul>
      </div>
    </nav>
  );
};

export default Navbar;