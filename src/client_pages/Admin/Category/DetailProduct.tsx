import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../client_api/product";
import { PRODUCT_TYPE } from "../../Dashboard";

function DetailProduct() {
    const { id } = useParams();

    const [product, setProduct] = useState<PRODUCT_TYPE>();

    const handleGetProductDetail = async () => {
        const response = await getProduct(id);
        setProduct(response.data);
    }

    useEffect(() => {
        handleGetProductDetail();
    }, []);

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h1>Chi tiết sản phẩm</h1>
            <div className="row">
                <div className="col-4 pt-5">
                    <img src="https://www.xtmobile.vn/vnt_upload/news/07_2019/iphone-12-pro-max-xtmobile.jpg" alt="" height={300} width={300} style={{width: "399px", height: "315px"}}/>
                </div>
                <div className="col-8  py-5 px-5">
                    <h3>{product?.name}</h3>
                    <hr />
                    <label htmlFor=""><b>Giá:</b>
                        <p>{product?.price}</p>
                    </label><br />
                    <hr />

                    <label htmlFor=""><b>Mô tả:</b>
                        <p>{product?.desc}</p>
                    </label><br />
                    <hr />
                    
                    <label htmlFor=""><b>Trạng thái:</b>
                        <p>{product?.status}</p>
                    </label>
                </div>
            </div>
        </main>

    )
}
export default DetailProduct;