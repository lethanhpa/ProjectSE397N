import React from 'react';
import logo from "../images/logo.png"
import { Link } from "react-router-dom"
import { ShoppingCartOutlined, HomeOutlined, ShopOutlined, ContactsOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd"

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
                        <li><Link to="/shop">Shop <ShopOutlined /></Link></li>
                        <li><Link to="/contact">Contact <ContactsOutlined /></Link></li>
                        <li><Link to='/cart'>Cart <ShoppingCartOutlined /></Link></li>
                    </ul>
                    <div className="logo">
                        <img style={{ width: '58px' }} src={logo} alt="logo" />
                    </div>
                </div>
                <div className="navbar-container">
                    <ul className="menu-items">
                        <Space>
                            <Input />
                            <SearchOutlined />
                        </Space>
                        <li><Link to="/Auth">SIGN IN / SIGN UP</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navigation;