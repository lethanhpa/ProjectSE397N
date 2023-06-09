import React, { useState, useEffect } from 'react';
import Styles from "../../styles/auth.module.css";
import axios from '../../libraries/axiosClient';
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import { Button, Input, Form } from 'antd';

const Index = () => {
    const [email, setEmail] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const account = {
            email,
            password,
        };

        try {
            const response = await axios.post("/customers/login", account);
            const { token } = response.data;
            localStorage.setItem('token', token);
            setToken(token);
            toast.success("Login successfully!!!");
            window.location.href = '/';
            setIsLogin(true);
        } catch (error) {
            console.error(error);
            toast.error("Login failed");
        }
    };
    return (
        <>
            <div className={Styles.form}>
                <div className={Styles.logo}>
                    <img className={Styles.logo} src={logo} alt="logo" />
                </div>
                <h4 className={Styles.form_title}>YOUR ARE MY EVERYTHING</h4>
                <Form
                    className={Styles.form_item}
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                >
                    <p>
                        Welcome to YAME
                        <br />
                        YAME - Stand out with style and variety!
                    </p>
                    <span>Email:</span>
                    <Form.Item name="email" rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]} hasFeedback>
                        <Input
                            className={Styles.mb_2}
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </Form.Item>

                    <span>Password:</span>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]} hasFeedback>
                        <Input.Password
                            className={Styles.mb_2}
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder='Passwords must be at least 6 characters'
                        />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 5,
                        }}
                    >
                        <Button onClick={handleSubmit} type="submit" htmlType='submit' className={Styles.btn}>
                            Sign In
                        </Button><ToastContainer />
                        <br />
                        <i>
                            Not a Member? <Link to="/signup">Join Us.</Link>
                        </i>
                    </Form.Item>
                </Form>
            </div >
        </>
    );
};

export default Index;