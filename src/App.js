// Import Essentails
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { loginUser } from '../src/store/actions/userActions';

// Import CSS Files
import 'bootstrap/dist/css/bootstrap.css';
import './resources/style/ComponentStyle.css';
import './App.css';

// Import Components
import NavBar from './components/Navbar';
import Layout from './components/Layout'
import Footer from './components/Footer'
// Import Pages
import Register from './pages/Register';
import Login from './pages/login/Login';
import UpdateUser from './pages/updateUser/UpdateUser';
import Anyprofile from './pages/anyuser';
// import Home2 from './pages/Home';
// import Home from './pages/Home1';
import Addprop from './pages/Addproperty';
import SingleRoom from './pages/SingleRoom'
import About from './pages/About';
import UserPosts from "./pages/userPosts/UserPosts";
import Navbar from "./components/NavbarNew"
import Home from "./pages/Home"


import ScrollToTop from "./components/ScrollToTop"
import Novbar from './components/Novbar'

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';





export default function App() {


  const userstate = useSelector((state) => state.userLoginState.isLogedIn);
  const dispatch = useDispatch();


  useEffect(() => { }, [userstate])


  const cachedHits = localStorage.getItem('user-info');
  // const newcache = JSON.parse(cachedHits, null, -1);
  // const jwtoken = newcache.jwt;

  // const cachedHits = localStorage.getItem('token');
  if (cachedHits) {
    dispatch(loginUser())
  }


  return (
    <Router>
      <ScrollToTop />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* <Navbar /> */}
      <Novbar/>
      <Switch>

        {/* <Route path={"/home3"} exact component={Home3}></Route>
        <Route path={"/home"} exact component={Home2}></Route> */}

        <Route path={"/aboutus"} component={About}></Route>


        <Route path={"/chat"} exact component={Layout}></Route>




        {!userstate && (
          <Route path={"/register"} exact component={Register}></Route>
        )}

        {!userstate && (
          <Route path={"/login"} exact component={Login}></Route>
        )}


        {/* {userstate &&
        }
         */}


        <Route path={"/addprop"} exact component={Addprop}></Route>


        {userstate && (
          <Route path={"/updateProfile"} exact component={UpdateUser}></Route>

        )}




        {userstate && (
          <Route path={"/userposts"} exact component={UserPosts}></Route>
        )
        }
        {userstate && (
          <Route path={"/user/:userprofile"} exact component={Anyprofile}></Route>
        )}


        <Route path={"/prop/:singleroom"} exact component={SingleRoom}></Route>

        <Route path={"/"} exact component={Home}></Route>

       
      </Switch>
      <Footer />
    </Router>
  );
}

