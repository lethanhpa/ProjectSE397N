import React, { useState } from 'react';
import "../../styles/cart.css"
import Auth from "../Auth/index"
import { Link } from "react-router-dom"
import { DeleteOutlined, HeartOutlined } from "@ant-design/icons"

const Index = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            {isLogin ? (
                <div>
                    <div className="cart">
                        <div className="cart-left-wrap">
                            <div className="cart-title">Bag</div>
                            <div className="cart-left-list">
                                <div className="cart-left-item">
                                    <div className="cart-item-wrap">
                                        <div className="card-wrap-info">
                                            <div className="cart-product-img">
                                                <img src="https://secure-images.nike.com/is/image/DotCom/FB7703_100?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg" alt="" />
                                            </div>
                                            <div className="cart-product-info">
                                                <div className="cart-product-name">Nike Pegasus 40 Premium</div>
                                                <div className="card-product-type">Women's Road Running Shoes</div>
                                                <div className="card-product-color">Black/White/Bright Mandarin/Multi-Color</div>
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
                                            <span>8,218,000₫</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-left-bonus">
                                <p>Favorites</p>
                                <div className="bonus-bottom">
                                    Want to view your Favorites? <span>Join us</span> or <Link style={{ color: "#757575" }} to="/Auth">Sign In / Sign Up</Link>
                                </div>
                            </div>
                        </div>
                        <div className="cart-right-wrap">
                            <div className="cart-title">Summary</div>
                            <div className="card-right-content">
                                <div className="card-right-top">
                                    <div className="card-right-text">
                                        <span>Subtotal</span>
                                        <p>12,327,000₫</p>
                                    </div>
                                    <div className="card-right-text">
                                        <span>Estimated Delivery & Handling</span>
                                        <p>Free</p>
                                    </div>
                                </div>
                                <div className="card-right-bottom">
                                    <div className="card-right-text">
                                        <span>Total</span>
                                        <p>12,327,000₫</p>
                                    </div>
                                </div>
                                <div className="card-right-button">
                                    <button>Guest Checkout</button>
                                    <button>Member Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Auth setIsLogin={setIsLogin} />
            )}
        </>
    );
}

export default Index;