import React from 'react';
import '../../styles/shop.css';

const listShoes = [
    {
        id: 1,
        src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png',
        name: 'Air Jordan Legacy 312 Low',
        price: '3,620,149₫',
    },
    {
        id: 2,
        src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png',
        name: 'Air Jordan 1 Mid SE',
        price: '3,365,149₫',
    },
    {
        id: 3,
        src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png',
        name: 'Jordan 1 KO',
        price: '4,109,000₫',
    },
    {
        id: 4,
        src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png',
        name: 'Nike Air Force 1 Mid 07',
        price: '2,991,149₫',
    },
    {
        id: 5,
        src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png',
        name: 'Nike Air Force 1 07 LV8',
        price: '2,991,149₫',
    },
    {
        id: 6,
        src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png',
        name: 'Nike Air Force 1 07',
        price: '2,753,149₫',
    },
    {
        id: 7,
        src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png',
        name: 'Nike Air Force 1 07',
        price: '2,753,149₫',
    },
    {
        id: 8,
        src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png',
        name: 'Nike Air Force 1 07',
        price: '2,753,149₫',
    },
    {
        id: 9,
        src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a2e1902-2da3-4fe7-9412-a7ebdfef25c1/air-jordan-legacy-312-low-shoes-6Vd4Xl.png',
        name: 'Nike Air Force 1 07',
        price: '2,753,149₫',
    },
];

function index() {
    return (
        <>
            <div className="container">
                <div className="product-list">
                    {listShoes.map((item, index) => (
                        <div className="product-item">
                            <div className="product-img">
                                <img src={item.src} alt={index} />
                            </div>
                            <div className="product-title">
                                <span>{item.name}</span>
                            </div>
                            <div className="product-price">
                                <span>Price: {item.price}</span>
                            </div>
                            <div className="product-button">
                                <button>BUY NOW</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default index;