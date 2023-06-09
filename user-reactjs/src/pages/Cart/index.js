import React, { useState } from 'react';
import "../../styles/cart.css"
import { Link } from "react-router-dom"
import { DeleteOutlined, HeartOutlined } from "@ant-design/icons"

const Index = () => {

    return (
        <>
            <div>
                <div className="cart">
                    <div className="cart-left-wrap">
                        <div className="cart-title">Bag</div>
                        <div className="cart-left-list">
                            <div className="cart-left-item">
                                <div className="cart-item-wrap">
                                    <div className="card-wrap-info">
                                        <div className="cart-product-img">
                                            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/13721f24-2774-443e-a27d-998d2c6be068/air-force-1-07-flyease-shoes-LKXPhZ.png" alt="" />
                                        </div>
                                        <div className="cart-product-info">
                                            <div className="cart-product-name">Nike Air Force 1 '07 FlyEase</div>
                                            <div className="card-product-type">Men's Shoes</div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0 15px' }}>
                                                <div className="sizeQty">
                                                    <span>Size</span>
                                                    <select id="size">
                                                        <option value="42">42</option>
                                                        <option value="41">41</option>
                                                        <option value="40">40</option>
                                                        <option value="39">39</option>
                                                    </select>
                                                </div>
                                                <div className="sizeQty">
                                                    <span>Quantity</span>
                                                    <select id="Quantity">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div className="card-icon">
                                                <button className="icon"><DeleteOutlined /></button>
                                                <button className="icon"><HeartOutlined /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-product-price">
                                        <span>3,077,050đ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-left-bonus">
                            <p>Favorites</p>
                            <div className="bonus-bottom">
                                Want to view your Favorites? <Link style={{ color: "#757575" }} to='/signup'>Join us</Link> or <Link style={{ color: "#757575" }} to="/signin">Sign In</Link>
                            </div>
                        </div>
                    </div>
                    <div className="cart-right-wrap">
                        <div className="cart-title">Summary</div>
                        <div className="card-right-content">
                            <div className="card-right-top">
                                <div className="card-right-text">
                                    <span>Subtotal</span>
                                    <p>3,077,050đ</p>
                                </div>
                                <div className="card-right-text">
                                    <span>Estimated Delivery & Handling</span>
                                    <p>Free</p>
                                </div>
                            </div>
                            <div className="card-right-bottom">
                                <div className="card-right-text">
                                    <span>Total</span>
                                    <p>3,077,050đ</p>
                                </div>
                            </div>
                            <div className="card-right-button">
                                <button>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;