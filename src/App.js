// Import Essentails
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
// Import CSS Files
import 'bootstrap/dist/css/bootstrap.css';
import './resources/style/ComponentStyle.css'
import './App.css';

// Import Components
import NavBar from './components/Navbar';
// import LoginUser from './components/login';
// import RegisterUser from './components/register';
import Layout from './components/Layout'
import Footer from './components/Footer'
// Import Pages
import Register from './pages/Register';
import Login from './pages/login/Login';
// import LoginUi from './pages/LoginUi';
import Myprofile from './pages/profile';
import UserInfo from './pages/UserInfo';
import UpdateUser from './pages/updateUser/UpdateUser';
import Anyprofile from './pages/anyuser';
import Home from './pages/Home';
import home from './pages/Home1';
import Addprop from './pages/Addproperty';
import PropInfo from './pages/PropInfo';
import SingleRoom from './pages/SingleRoom'
import About from './pages/About';
// import { LanguageContext } from './context/changeLanguage';




export default function App() {
  // console.log(LanguageContext)

  // // const [contextLang,setContextLang] = useState("en")

  const userstate = useSelector((state) => state.userLoginState.isLogedIn);

  useEffect(() => { }, [userstate])


  return (
    <Router>
      <NavBar />
      <Switch>

        <Route path={"/"} exact component={Home}></Route>

        <Route path={"/home"} exact component={home}></Route>
        <Route path={"/aboutus"} exact component={About}></Route>
        <Route path={"/propInfo"} exact component={PropInfo}></Route>
        <Route path={"/singleroom"} exact component={SingleRoom}></Route>
        <Route path={"/chat"} exact component={Layout}></Route>



        {!userstate && (
          <Route path={"/register"} exact component={Register}></Route>
        )} 

        {!userstate && (
          <Route path={"/login"} exact component={Login}></Route>
        )}

        {userstate && (
          <Route path={"/profile"} exact component={Myprofile}></Route>
        )}

        {userstate && (
          <Route path={"/:userprofile"} exact component={Anyprofile}></Route>
        )}

        {userstate && (
          <Route path={"/userprofile"} exact component={UserInfo}></Route>
        )}

        {userstate && (
          <Route path={"/updateProfile"} exact component={UpdateUser}></Route>
        )}

        {userstate && (
          <Route path={"/addprop"} exact component={Addprop}></Route>
        )}



      </Switch>
      <Footer/>
    </Router>
  );
}

