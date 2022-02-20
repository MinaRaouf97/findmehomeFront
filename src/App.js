import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// import LoginUser from './components/login';
// import RegisterUser from './components/register';
import './index.css';

import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from './components/Layout'

import Home from './pages/Home';
import NavBar from './components/Navbar';
import PropInfo from './pages/PropInfo';
// import LoginUi from './pages/LoginUi';
// import Myprofile from './pages/oldprofile';
import Anyprofile from './pages/anyuser';
import Register from './pages/Register';
import UserInfo from './pages/UserInfo';
import Login from './pages/login/Login';
import UpdateUser from './pages/updateUser/UpdateUser';
import Addprop from './pages/Addproperty';
import About from './pages/About';
import './resources/style/ComponentStyle.css'
import UserPosts from './pages/userPosts/UserPosts'
import Review from './components/clientsReview/Review'
import home from './pages/Home1';
import SingleRoom from './pages/SingleRoom'
// import { LanguageContext } from './context/changeLanguage';
import {useSelector } from "react-redux";


export default function App() {
  // console.log(LanguageContext)

  // // const [contextLang,setContextLang] = useState("en")

  const userstate = useSelector((state) => state.userLoginState.isLogedIn);
  
  useEffect(() => {


  }, [userstate])

  return (


    <Router>

      <NavBar />
      
 
      {/* <Maps /> */}

      <Switch>

        <Route path={"/"} exact component={Home}></Route>
        
        <Route path={"/home"} exact component={home}></Route>
        <Route path={"/aboutus"} exact component={About}></Route>
        <Route path={"/propInfo"} exact component={PropInfo}></Route>
        <Route path={"/singleroom"} exact component={SingleRoom}></Route>
        {/* <Route path={"/userpost"} exact component={UserPosts}></Route> */}
        <Route path={"/chat"} exact component={Layout}></Route>
        <Route path={"/review"}  component={Review}></Route>

        { userstate && (
        <Route path={"/updateProfile"} exact component={UpdateUser}></Route>
        )}

      { userstate && (
        <Route path={"/addprop"} exact component={Addprop}></Route>
        )}
     

        {!userstate && (
          <Route path={"/register"} exact component={Register}></Route>
        )}
        {!userstate && (
          <Route path={"/login"} exact component={Login}></Route>
        )}
  
    

        { userstate && (
        <Route path={"/userpost"} exact component={UserPosts}></Route>
        )}



        { userstate && (
        <Route path={"/userprofile"} exact component={UserInfo}></Route>
        )}

        
        { userstate && (
        <Route path={"/:userprofile"} exact component={Anyprofile}></Route>
        )}

  

  
        

      </Switch>



    </Router>



  );
}

