import React, { useState } from 'react';
import { Form, Button } from 'antd';
import '../../styles/auth.css';
const Index = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "user@gmail.com" && password === "123456") {
            alert("Login successful!!!");
            window.location = "/"
        } else {
            alert("Incorrect username or password");
        }
    }
    return (
        <>
            {/* Begin Login Content Area */}
            <div className="page-section mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            {/* Login Form s*/}
                            <form >
                                <div className="login-form">
                                    <h4 className="login-title">Sign In</h4>
                                    <div className="row">
                                        <div className="col-md-12 col-12">
                                            <label>Email Address*</label>
                                            <input className="mb-2" type="email" placeholder="Email Address" value={email} onChange={handleEmailChange} />
                                        </div>
                                        <div className="col-12 mt-2">
                                            <label>Password</label>
                                            <input className="mb-2" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                                        </div>
                                        <div className="mt-3">
                                            <Form.Item
                                                wrapperCol={{
                                                    offset: 8,
                                                    span: 16,
                                                }}>
                                                <Button type="primary" htmlType="submit" onClick={handleLogin}>
                                                    Login
                                                </Button>
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <form >
                                <div className="login-form">
                                    <h4 className="login-title">Sign Up</h4>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <label>First Name</label>
                                            <input className="mb-2" type="text" placeholder="First Name" />
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <label>Last Name</label>
                                            <input className="mb-2" type="text" placeholder="Last Name" />
                                        </div>
                                        <div className="col-md-12">
                                            <label>Email Address*</label>
                                            <input className="mb-2" type="email" placeholder="Email Address" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Password</label>
                                            <input className="mb-2" type="password" placeholder="Password" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Confirm Password</label>
                                            <input className="mb-2" type="password" placeholder="Confirm Password" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Captcha</label>
                                            <input className="mb-2" type="password" />
                                        </div>
                                        <div className="col-12 text-left mt-3">
                                            <Form.Item
                                                wrapperCol={{
                                                    offset: 0,
                                                    span: 16,
                                                }}>
                                                <Button type="primary" htmlType="submit">
                                                    Register
                                                </Button>
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Login Content Area End Here */}
        </>
    );
};

export default Index;