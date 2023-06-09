import React, { useState, useEffect } from 'react';
import "../../styles/home.css"
import axios from "../../libraries/axiosClient.js";
const apiName = "/products";

const index = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [product, setProduct] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios
            .get(apiName)
            .then((response) => {
                const { data } = response;
                setProduct(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    return (
        <>
            <body>
                <section id="home">
                    <div className="home_page">
                        <div className="home_img">
                            <img src="https://static.nike.com/a/images/w_1423,c_limit/b05de187-a4ca-4f37-867b-b7f011d98cb6/nike-just-do-it.jpg" alt="img " />
                            {/* <video id="video_background" autoPlay loop muted src="../../images/intro.mp4"></video> */}
                        </div>
                        <div className="home_txt ">
                            <p className="collection">SUMMER COLLECTION</p>
                            <h2>FALL - WINTER<br />Collection 2023</h2>
                            <div className="home_label">
                                <p>A specialist label creating luxury essentials. Ethically crafted<br />with an unwavering commitment to exceptional quality.</p>
                            </div>
                            <button><a href="/products">SHOP NOW</a><i className='bx bx-right-arrow-alt'></i></button>
                            <div className="home_social_icons">
                                <a href="/"><i className='bx bxl-facebook'></i></a>
                                <a href="/"><i className='bx bxl-twitter'></i></a>
                                <a href="/"><i className='bx bxl-pinterest'></i></a>
                                <a href="/"><i className='bx bxl-instagram'></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="collection">
                    <div className="collections container">
                        <div className="content">
                            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/650de059-d5d8-4372-8e07-072b3040ba69/air-jordan-1-mid-se-shoes-p48zQ5.png" alt="img" />
                            <div className="img-content">
                                <p>Collections</p>
                                <button><a href="/products">SHOP NOW</a></button>
                            </div>
                        </div>
                        <div className="content2">
                            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/42cba1bc-3a7b-44df-a026-3c416d1d80b2/tatum-1-st-louis-pf-basketball-shoes-LDFvBJ.png" alt="img" />
                            <div className="img-content2">
                                <p>Shoes Spring</p>
                                <button><a href="/products">SHOP NOW</a></button>
                            </div>
                        </div>
                        <div className="content3">
                            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e5feafbc-8beb-4b91-9ffd-ed14a62e1a67/zion-2-pf-basketball-shoes-CH06Hd.png" alt="img" />
                            <div className="img-content3">
                                <p>Accessories</p>
                                <button><a href="/products">SHOP NOW</a></button>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="sellers">
                    <div className="seller container">
                        <h2>Top Sell</h2>
                        <div className="best-seller">
                            <div className="best-p1">
                                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png" alt="img" />
                                <div className="best-p1-txt">
                                    <div className="name-of-p">
                                        <p>Air Jordan Legacy 312 Low</p>
                                    </div>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="best-p1">
                                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3b8a8a4b-7dcb-4495-a3aa-83386f143cc8/air-jordan-1-mid-se-shoes-CQ6f9G.png" alt="img" />
                                <div className="best-p1-txt">
                                    <div className="name-of-p">
                                        <p>Air Jordan 1 Mid SE</p>
                                    </div>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="best-p1">
                                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1799bdd9-01f2-4faa-9e29-5eb5f0a15225/jordan-1-ko-shoes-RLJcHC.png" alt="img" />
                                <div className="best-p1-txt">
                                    <div className="name-of-p">
                                        <p>Jordan 1 KO</p>
                                    </div>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bx-star'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="best-p1">
                                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/92859bb7-99a7-410b-9220-6753f504ab79/jordan-why-not-6-pf-shoes-Bsggwn.png  " alt="img" />
                                <div className="best-p1-txt">
                                    <div className="name-of-p">
                                        <p>Jordan Why Not .6 PF</p>
                                    </div>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="seller container">
                        <h2>New Arrivals</h2>
                        <div className="best-seller">
                            <div className="best-p1">
                                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f0205256-81ff-4418-824a-8d1b9ed49d18/air-force-1-lv8-2-older-shoes-Wtv7F1.png" alt="img" />
                                <div className="best-p1-txt">
                                    <div className="name-of-p">
                                        <p>Nike Air Force 1 LV8 2</p>
                                    </div>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="best-p1">
                                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fb34c689-ac37-4e70-9f0c-6172bb74d1f7/air-force-1-sculpt-shoes-4MX0v0.png" alt="img" />
                                <div className="best-p1-txt">
                                    <div className="name-of-p">
                                        <p>Nike Air Force 1 Sculpt</p>
                                    </div>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="best-p1">
                                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/901bbbbc-5aed-4078-9a39-d129f1ee124b/air-force-1-07-shoes-VWCc04.png" alt="img" />
                                <div className="best-p1-txt">
                                    <div className="name-of-p">
                                        <p>Nike Air Force 1 '07</p>
                                    </div>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="best-p1">
                                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a42a5d53-2f99-4e78-a081-9d07a2d0774a/air-force-1-07-shoe-HWWX9W.png" alt="img" />
                                <div className="best-p1-txt">
                                    <div className="name-of-p">
                                        <p>Nike Air Force 1 '07</p>
                                    </div>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="seller container">
                        <h2>Hot Sales</h2>
                        <div className="best-seller">
                            <div className="best-p1">
                                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2f5ab29-36fb-48c7-81d9-50baa654b2b9/air-force-1-mid-07-shoes-ZzCgrn.png" alt="img" />
                                <div className="best-p1-txt">
                                    <div className="name-of-p">
                                        <p>Nike Air Force 1 Mid '07</p>
                                    </div>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="best-p1">
                                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/65dd8d75-6e25-4370-a6ae-a4f23e475cb5/air-force-1-07-lv8-shoes-VqVnxG.png" alt="img" />
                                <div className="best-p1-txt">
                                    <div className="name-of-p">
                                        <p>Nike Air Force 1 '07 LV8</p>
                                    </div>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="best-p1">
                                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99d5f1a7-6b9e-490c-ab0a-9b529fc958c7/air-force-1-07-shoes-KJhDMJ.png" alt="img" />
                                <div className="best-p1-txt">
                                    <div className="name-of-p">
                                        <p>Nike Air Force 1 '07</p>
                                    </div>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="best-p1">
                                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d280e9a2-95a6-428a-82bc-e1fb21e00128/force-1-lv8-2-shoes-XvN2rk.png" alt="img" />
                                <div className="best-p1-txt">
                                    <div className="name-of-p">
                                        <p>Nike Force 1 LV8 2</p>
                                    </div>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="news">
                    <div className="news-heading">
                        <p>LATEST NEWS</p>
                        <h2>Fashion New Trends</h2>
                    </div>
                    <div className="l-news container">
                        <div className="l-news1">
                            <div className="news1-img">
                                <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c63d6d78-3a89-4866-b243-0a9f660ac1a2/air-max-pulse-shoes-V9B1C5.png" alt="img" />
                            </div>
                            <div className="news1-conte">
                                <div className="date-news1">
                                    <p><i className='bx bxs-calendar'></i> 12 November 2023</p>
                                    <h4>Nike Air Max Pulse</h4>
                                    <a href='/products'>MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="l-news2">
                            <div className="news2-img">
                                <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e8bcdc2-b599-4658-a984-b31c3e33033e/team-hustle-d-11-older-basketball-shoes-q4t8cZ.png" alt="img" />
                            </div>
                            <div className="news2-conte">
                                <div className="date-news2">
                                    <p><i className='bx bxs-calendar'></i> 17 November 2023</p>
                                    <h4>Nike Air Max 90</h4>
                                    <a href='/products'>MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="l-news3">
                            <div className="news3-img">
                                <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f64a8cb2-376d-4e9f-b075-6d15577420f7/air-max-90-shoes-kRsBnD.png" alt="img" />
                            </div>
                            <div className="news3-conte">
                                <div className="date-news3">
                                    <p><i className='bx bxs-calendar'></i> 26 November 2023</p>
                                    <h4>Nike Air Max 90</h4>
                                    <a href='/products'>MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <div className="contact container">
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.1068995708433!2d108.20716727527001!3d16.05994158461822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b4239d8e51%3A0x96e408c6b0419760!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBEdXkgVMOibg!5e0!3m2!1svi!2s!4v1684164960330!5m2!1svi!2s" title='map' width="600" height="450" style={{ allowFullScreen: "", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }} />
                        </div>
                        <form >
                            <div className="form">
                                <div className="form-txt">
                                    <h4>INFORMATION</h4>
                                    <h1>Contact Us</h1>
                                    <span>As you might expect of a company that began as a high-end interiors contractor, we pay strict
                                        attention.</span>
                                    <h3>USA</h3>
                                    <p>195 E Parker Square Dr, Parker, CO 801<br />+43 982-314-0958</p>
                                    <h3>Viet Nam</h3>
                                    <p>254 Nguyen Van Linh, Thach Gian, Thanh Khe, Da Nang<br />+84 337-219-023</p>
                                </div>
                                <div className="form-details">
                                    <input type="text" name="name" id="name" placeholder="Name" required />
                                    <input type="email" name="email" id="email" placeholder="Email" required />
                                    <textarea name="message" id="message" cols="52" rows="7" placeholder="Message" required></textarea>
                                    <button>SEND MESSAGE</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </body>
        </>
    );
};

export default index;