import React, { useState, useEffect } from 'react';
import "../../styles/home.css"
import axios from "../../libraries/axiosClient.js";
import Slider from "react-slick";
import { TagOutlined } from '@ant-design/icons'
import "slick-carousel/slick/slick.css";
import numeral from "numeral";
import "slick-carousel/slick/slick-theme.css";
const apiName = "/products";

function Index() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(apiName)
            .then((response) => {
                const result = response.data;
                setData(result.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);;

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
                    {/* <div className="collections container"> */}
                    <div className="App">
                        <Slider >
                            {/* {...settings} */}
                            {data.map((item) => (
                                <div key={item.id} className="card">
                                    <div className="card-top">
                                        <img src={item.img} alt='img' />
                                    </div>
                                    <div className="card-bottom">
                                        <h1>{item.name}</h1>
                                        <p>{numeral(item.price).format("0,0")}đ</p>
                                        <span className="category">{item.description}</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </section>
                <section id="sellers">
                    <div className="seller container">
                        <h2>Top Sell</h2>
                        <div className="best-seller">
                            {data
                                .filter((item) => {
                                    return item.discount <= 0 && item.stock > 10;
                                })
                                .slice(0, 4)
                                .map((item) => (
                                    <a href={`/products/t/${item.slug}`}>
                                        <div key={item.id} className="best-p1">
                                            <img src={item.img} alt="img" />
                                            <div className="best-p1-txt">
                                                <div className="name-of-p">
                                                    <p>{item.name}</p>
                                                </div>
                                                <div className="name-of-p">
                                                    <p>{item.description}</p>
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
                                    </a>
                                ))}
                        </div>
                    </div>
                    <div className="seller container">
                        <h2>Hot Sales</h2>
                        <div className="best-seller">
                            {data
                                .slice(0, 4)
                                .map((item) => (
                                    item.discount > 0 && (
                                        <a href={`/products/t/${item.slug}`}>
                                            <div key={item.id} className="best-p1">
                                                <img src={item.img} alt="img" />
                                                <div className="best-p1-txt">
                                                    <div className="name-of-p">
                                                        <p>{item.name}</p>
                                                    </div>
                                                    <div className="name-of-p">
                                                        <p>{item.description}</p>
                                                    </div>
                                                    <div className='name-of-p'>
                                                        <p><TagOutlined /> {item.discount}%</p>
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
                                        </a>
                                    )))}
                        </div>
                    </div>
                </section>
                <section id="news">
                    <div className="news-heading">
                        <p>LATEST NEWS</p>
                        <h2>Limited Edition</h2>
                    </div>
                    <div className="l-news container">
                        {data.map((item) => (
                            item.stock <= 10 && (
                                <div className="l-news1">
                                    <div className="news1-img">
                                        <img src={item.img} alt="img" />
                                    </div>
                                    <div className="news1-conte">
                                        <div className="date-news1">
                                            <p><i className='bx bxs-calendar'></i>{item.description}</p>
                                            <h4>{item.name}</h4>
                                            <a href={`/products/t/${item.slug}`}>MORE</a>
                                        </div>
                                    </div>
                                </div>
                            )))}
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
            </body >
        </>
    );
};

export default Index;