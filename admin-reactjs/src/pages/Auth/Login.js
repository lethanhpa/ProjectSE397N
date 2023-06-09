import React, { useState } from 'react';
import styles from './Login.module.css';
import { message } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {
  const { setIsLogin } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem('isLogin', 'true');
      message.success("Đăng nhập thành công!!!");
      toast.success("Đăng nhập thành công!!!");
      setIsLogin(true);
    } else {
      toast.error("Sai tài khoản hoặc mật khẩu!!!");
    }
  };

  return (
    <form className={styles.loginForm}>
      <h2>Login</h2>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={handleSubmit} type="submit" className={styles.submitButton}>Login</button><ToastContainer />
    </form>
  );
};

export default Login;
