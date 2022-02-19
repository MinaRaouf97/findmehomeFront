import React, { Component } from "react";
import { FaAlignRight } from 'react-icons/fa'
import { Link } from "react-router-dom";


export default class Navbar extends Component {
    state = { isOpen: false };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
    render() {
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
                            onClick={this.handleToggle} >
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"} >
                        <li> <Link to="/"> Home </Link>  </li>
                        <li> <Link to="/room"> Rooms </Link>  </li>
                        <li> <Link to="/profile"> Profile </Link>  </li>
                        <li> <Link to="/about">About </Link>  </li> 
                        <li> <Link to="/profile"></Link>  </li> 
                        <li> <Link to="/profile"> Logout </Link>  </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
