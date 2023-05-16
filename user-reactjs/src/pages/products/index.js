import React from 'react';
import "../../styles/products.css"

const index = () => {
    return (
        <>
            <div>
                <div id="welcome_message">
                    start selling your products or buy them from anywhere!
                </div>
                <header>
                    <div className="header_language">
                        <img src="img/flag.png" alt="" />
                        <p>USD</p>
                        <span className="material-symbols-outlined">arrow_drop_down</span>
                    </div>
                    <div className="header_logo">
                        <img src="img/Logo.png" alt="" />
                    </div>
                    <div className="header_add-to-cart">
                        <div className="btn btn_outline">Cart (3)</div>
                    </div>
                </header>
                <div id="menu">
                    <div className="wrapper">
                        <div className="menu_drawer">
                            <span className="material-symbols-outlined">menu</span>
                        </div>
                        <div className="menu_links">
                            <ul>
                                <li>Home</li>
                                <li>Men</li>
                                <li>Women</li>
                                <li>Lookbook</li>
                                <li>About</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className="menu_icons">
                            <span className="material-symbols-outlined">favorite</span>
                            <div className="vert_devider" />
                            <span className="material-symbols-outlined">search</span>
                        </div>
                    </div>
                </div>
                <div id="product">
                    <div className="product_images" />
                    <div className="product_details">
                        <div className="back">
                            <span className="material-symbols-outlined">chevron_left</span>
                            <h6>Back to <a href>Woman</a></h6>
                        </div>
                        <h2>The Atelier Tailored Coat</h2>
                        <h3>$499.00</h3>
                        <div className="about">
                            <p>Availability :<span>In stock</span></p>
                            <p>Product Code : <span>#4657</span></p>
                            <p>Tags : <span>Fashion, Hood, Classic</span> </p>
                        </div>
                        <p>Sleek, polished, and boasting an impeccably modern fit, this blue, 2-but-
                            ton Lazio suit features a notch lapel, flap pockets, and accompanying flat
                            front trousers—all in pure wool by Vitale Barberis Canonico.</p>
                        <ul>
                            <li>Dark blue suit for a tone-on-tone look</li>
                            <li>Regular fit</li>
                            <li>100% Cotton</li>
                            <li>Free shipping with 4 days delivery</li>
                        </ul>
                        <a href>Clear Selection</a>
                        <div className="cta">
                            <div className="btn btn_primary">add to cart</div>
                            <div className="btn btn_outline_secondary">
                                <span className="material-symbols-outlined">favorite</span>add to wishlist</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default index;