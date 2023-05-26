import React, { useEffect, useState } from 'react';
import numeral from "numeral";
import axios from "../../libraries/axiosClient"
import { Link } from "react-router-dom"
import '../../styles/products.css';

const apiName = "/products"

// const listShoes = [
//     {
//         id: 1,
//         src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png',
//         name: 'Air Jordan Legacy 312 Low',
//         price: '3,620,149₫',
//     },
//     {
//         id: 2,
//         src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png',
//         name: 'Air Jordan 1 Mid SE',
//         price: '3,365,149₫',
//     },
//     {
//         id: 3,
//         src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png',
//         name: 'Jordan 1 KO',
//         price: '4,109,000₫',
//     },
//     {
//         id: 4,
//         src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png',
//         name: 'Nike Air Force 1 Mid 07',
//         price: '2,991,149₫',
//     },
//     {
//         id: 5,
//         src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png',
//         name: 'Nike Air Force 1 07 LV8',
//         price: '2,991,149₫',
//     },
//     {
//         id: 6,
//         src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png',
//         name: 'Nike Air Force 1 07',
//         price: '2,753,149₫',
//     },
//     {
//         id: 7,
//         src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png',
//         name: 'Nike Air Force 1 07',
//         price: '2,753,149₫',
//     },
//     {
//         id: 8,
//         src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png',
//         name: 'Nike Air Force 1 07',
//         price: '2,753,149₫',
//     },
//     {
//         id: 9,
//         src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png',
//         name: 'Nike Air Force 1 07',
//         price: '2,753,149₫',
//     },
// ];

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
    return (
        <>
            <div className="container">
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
        </>
    );
}

export default Index;
