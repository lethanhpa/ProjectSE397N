import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import numeral from "numeral";
import axios from "../../../libraries/axiosClient";
import "../../../styles/productDetail.css"


function ProductDetail() {
    const [product, setProduct] = useState('');
    const { slug } = useParams();
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/products/t/${slug}`);
                setProduct(response.data.result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProduct();
    }, [slug]);

    return (
        <>
            {product && (
                <div key={product.slug} className="productDetail">
                    <div className="productDetail-img">
                        <img src={product.img} alt="" />
                    </div >
                    <div className="productDetail-information">
                        <div className="productDetail-name">{product.name}</div>
                        <div className="productDetail-description">{product.description}</div>
                        <div className="productDetail-price">{numeral(product.price).format("0,0")}đ</div>
                        <div className="productDetail-discount">Sale off: {product.discount}%</div>
                        <div className="productDetail-total">Total: {numeral(product.total).format("0,0")}đ</div>
                        <div className="card-right-button">
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </div >
            )}
        </>
    );
}

export default ProductDetail;
