import React from 'react';
import logo from "../images/logo.png"
import { Link } from "react-router-dom"
import { ShoppingCartOutlined, HomeOutlined, ShopOutlined, UserOutlined, UserAddOutlined } from "@ant-design/icons";

const Navigation = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <input type="checkbox" name="" id="checkbox" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <li><Link to="/">Home <HomeOutlined /></Link></li>
                        <li><Link to="/products">Shop <ShopOutlined /></Link></li>
                        <li><Link to='/cart'>Cart <ShoppingCartOutlined /></Link></li>
                        <li><Link to="/signin">Sign In<UserOutlined /></Link></li>
                        <li><Link to="/signup">Sign Up <UserAddOutlined /></Link></li>
                    </ul>
                    <div className="logo">
                        <img style={{ width: '58px' }} src={logo} alt="logo" />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;