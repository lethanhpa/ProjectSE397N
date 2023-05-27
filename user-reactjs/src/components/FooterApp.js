import React from 'react';
import logo from "../images/logo.png"

const FooterApp = () => {
    return (
        <>
            <footer>
                <div className="footer-container container">
                    <div className="content_1">
                        <img src={logo} alt="logo" />
                        <p>The customer is at the heart of our<br />unique business model, which includes<br />design.</p>
                    </div>
                    <div className="content_2">
                        <h4>SHOPPING</h4>
                        <a href="#sellers">Clothing Store</a>
                        <a href="#sellers">Trending Shoes</a>
                        <a href="#sellers">Accessories</a>
                        <a href="#sellers">Sale</a>
                    </div>
                    <div className="content_3">
                        <h4>SHOPPING</h4>
                        <a href="/#contact">Contact Us</a>
                        <a href="https://payment-method-sb.netlify.app/" >Payment Method</a>
                        <a href="/" >Delivery</a>
                        <a href="/" >Return and Exchange</a>
                    </div>
                    <div className="content_4">
                        <h4>NEWLETTER</h4>
                        <p>Be the first to know about new<br />arrivals, look books, sales &amp; promos!</p>
                        <div className="f-mail">
                            <input type="email" placeholder="Your Email" />
                            <i className="bx bx-envelope" />
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="f-design">
                    <div className="f-design-txt container">
                        <p>Design and Code by code.sanket</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterApp;