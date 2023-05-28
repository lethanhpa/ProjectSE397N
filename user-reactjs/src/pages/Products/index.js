import React, { useEffect, useState } from 'react';
import numeral from "numeral";
import axios from "../../libraries/axiosClient"
import { Link } from "react-router-dom"
import '../../styles/products.css';
import { ControlOutlined, DownCircleOutlined } from '@ant-design/icons';
const apiName = "/products"

const listType = [
    {
        id: 1,
        name: 'Lifestyle',
    },
    {
        id: 2,
        name: 'Jordan',
    },
    {
        id: 3,
        name: 'Running',
    },
    {
        id: 4,
        name: 'Basketball',
    },
    {
        id: 5,
        name: 'Golf',
    },
    {
        id: 6,
        name: 'Tennis',
    },
    {
        id: 7,
        name: 'Athletics',
    },
];

const genderKidsData = [
    {
        id: 1,
        title: 'Gender',
        choice: ['Men', 'Women', 'Unisex'],
    },
    {
        id: 2,
        title: 'Childs',
        choice: ['Boy', 'Girl'],
    },
    {
        id: 3,
        title: 'Shop By Price',
        choice: ['Under 1,000,000₫', 'Over 5,000,000₫'],
    },
];

const colors = ['purple', 'black', 'red', 'green', 'yellow', 'grey', 'pink', 'blue', 'whitesmoke'];

const brands = [
    {
        id: 'brand',
        title: 'Brand',
        choice: ['Nike Sportswear', 'Jordan', 'Nike by you', 'ACG'],
    },
];

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
    }, []);
    const handleOnclick = () => {
        setDisplay((display) => !display);
    };
    const [display, setDisplay] = useState(false);
    return (
        <>
            <div className="shop-wrapper">
                {/* session slider */}
                <div className="shop-slider">
                    <img src="https://partner-images.bluecore.com/nike_singapore/Left.jpg" alt="" />
                    <img src="https://partner-images.bluecore.com/nike_singapore/CENTER.jpg" alt="" />
                    <img src="https://partner-images.bluecore.com/nike_singapore/RIGHT.jpg" alt="" />
                </div>
                {/* session header content */}
                <div className="header-content">
                    <h2 className="header-title">Summer Shop Shoes</h2>
                    <div className="header-nav">
                        <button onClick={handleOnclick} className="header-nav-button">
                            <span>Hide Filters</span>
                            <ControlOutlined />
                        </button>
                    </div>
                </div>
                {/* session body content */}
                <div className="body-content">
                    <div className={`body-scroll ${display ? 'hide' : ''}`}>
                        <div className="scrollbox">
                            <div className="scrollbox-inner">
                                {listType.map((type) => (
                                    <div className="nav-type" key={type.id}>
                                        <a href="/products">{type.name}</a>
                                    </div>
                                ))}
                            </div>
                            {/* session filter */}
                            {genderKidsData.map((data) => (
                                <div className="scrollbox-inner">
                                    <div key={data.title}>
                                        <span className="filter-wrap">
                                            <label className="button" htmlFor={`btn-${data.id}`}>
                                                {data.title}
                                                <DownCircleOutlined />
                                            </label>
                                            <input type="checkbox" id={`btn-${data.id}`} />
                                            <ul className="menu">
                                                {data.choice.map((choice) => (
                                                    <li>
                                                        <input type="checkbox" />
                                                        <label htmlFor="MEN">{choice}</label>
                                                    </li>
                                                ))}
                                            </ul>
                                        </span>
                                    </div>
                                </div>
                            ))}
                            {/* session colors */}
                            <div className="scrollbox-inner">
                                <div className="color-filter">
                                    <span className="filter-wrap">
                                        <label className="button" htmlFor="color">
                                            Colors
                                            <DownCircleOutlined />
                                        </label>
                                        <input type="checkbox" id="color" />
                                        <div className="menu-color">
                                            {colors.map((color) => (
                                                <div key={color} className="menu-color-item">
                                                    <button className="btn-color">
                                                        <div style={{ backgroundColor: `${color}` }} className="btn-item"></div>
                                                        <span className="btn-title">{color.charAt(0).toUpperCase() + color.slice(1)}</span>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </span>
                                </div>
                            </div>
                            {/* session brands */}
                            {brands.map((brand) => (
                                <div className="scrollbox-inner">
                                    <div key={brand.title}>
                                        <span className="filter-wrap">
                                            <label className="button" htmlFor={`btn-${brand.id}`}>
                                                {brand.title}
                                                <DownCircleOutlined />
                                            </label>
                                            <input type="checkbox" id={`btn-${brand.id}`} />
                                            <ul className="menu">
                                                {brand.choice.map((choice) => (
                                                    <li>
                                                        <input type="checkbox" />
                                                        <label htmlFor="MEN">{choice}</label>
                                                    </li>
                                                ))}
                                            </ul>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* body product */}
                    <div className={`body-products ${display ? 'full' : ''}`}>
                        <div className="product-list">
                            {data.length ?
                                data.map((item) => (
                                    <div key={item.slug} className="product-item">
                                        <Link to={`/products/t/${item.slug}`} style={{ color: "white", textDecoration: "none" }}>
                                            <div className="product-img">
                                                <img src={item.img} alt='' />
                                            </div>
                                            <div className="product-title">
                                                <span>{item.name}</span>
                                            </div>
                                            <div className="product-description">
                                                <span>{item.description}</span>
                                            </div>
                                            <div className="product-price">
                                                <span>{numeral(item.price).format("0,0")}đ</span>
                                            </div>

                                            <div className="product-button">
                                                <button>BUY NOW</button>
                                            </div>
                                        </Link>
                                    </div>
                                )) : <p>Không có dữ liệu</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;