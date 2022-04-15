import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../client_api/product";
// import { getProduct } from "../api/product";
import {PRODUCT_TYPE} from './ProductList';

function ProductDetail(){
    const {id} = useParams();

    const [product, setProduct] = useState<PRODUCT_TYPE>();

    const handleGetProductDetail = async () => {
        const response = await getProduct(id);
        setProduct(response.data);
    }   

    useEffect(() => {
        handleGetProductDetail();
    }, []);

    return (
        <div >
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cool-new-mobile-phone-promotion-purple-banner-image_183067.jpg" alt="" width="100%" />
                        <div className="container">
                            <div className="carousel-caption text-start">
                            <h1>Đậu thị lan anh</h1>
                                <p>Mẫ sinh viên: PH11760</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>Some representative placeholder content for the third slide of this carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
            <div className="row ">
                <div className="col-4 py-5">
                    <img src={product?.image} alt="" height="300"/>
                </div>
                <div className="col-8  py-5 px-5">
                    <h3>{product?.name}</h3>
                    <hr />
                    <label htmlFor=""><b>Giá:</b></label>
                    <hr />
                    <p>{product?.price}</p>
                    <label htmlFor=""><b>Mô tả:</b></label>
                    <hr />
                    <p>{product?.desc}</p>
                    <label htmlFor=""><b>Trạng thái:</b></label>
                    <hr />
                    <p>{product?.status}</p>
                    <div className="py-3">
                    <button type="button" className="btn btn-primary">Thêm vào giỏ hàng</button>

                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}
export default ProductDetail;