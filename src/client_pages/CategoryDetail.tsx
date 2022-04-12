import React from "react";
import { useParams } from "react-router-dom";
import { CATEGORY_TYPE } from "./CategoryList";

export default function CategoryDetail() {
    const {id} = useParams();

    return (
        <div>
            Chi tiết danh mục
            {/* <p>ID: {category?.id}</p>
            <p>NAME: </p> */}
        </div>
    )
}