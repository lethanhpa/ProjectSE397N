import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import numeral from "numeral";
import { Link } from "react-router-dom"
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
                        <div>Select Size</div>
                        <div className="list-size">
                            <div className="size">EU 37</div>
                            <div className="size">EU 38</div>
                            <div className="size">EU 39</div>
                            <div className="size">EU 40</div>
                            <div className="size">EU 41</div>
                            <div className="size">EU 42</div>
                            <div className="size">EU 43</div>
                            <div className="size">EU 44</div>
                            <div className="size">EU 45</div>
                        </div>
                        <div className="productDetail-add-cart">
                            <Link to="/Auth"><button>Add To Cart</button></Link>
                        </div>
                    </div>
                </div >
            )}
        </>
    );
}

export default ProductDetail;
