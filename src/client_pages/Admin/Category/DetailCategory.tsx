import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../../../client_api/category";

function DetailCategory() {
    type PRODUCT_TYPE = {
        id: number | string,
        name: string,
        image: "",
    };
    const { id } = useParams();

    const [category, setCategory] = useState<PRODUCT_TYPE>();

    const handleGetCategoryDetail = async () => {
        const response = await getCategory(id);
        setCategory(response.data);
    }

    useEffect(() => {
        handleGetCategoryDetail();
    }, []);

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="pt-4">
                <h2>Chi tiết danh mục</h2>
            </div>
            <div className="row">
                <div className="col-4 pt-5 pb-4">
                    <img src={category?.image} alt="" height={300} width={300} style={{width: "399px", height: "315px"}}/>
                </div>
                <div className="col-8  py-5 px-5">
                    <h3>{category?.name}</h3>
                    <hr />
                </div>
            </div>
        </main>

    )
}
export default DetailCategory;