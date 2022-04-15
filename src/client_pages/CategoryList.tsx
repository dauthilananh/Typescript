import { type } from "@testing-library/user-event/dist/type";
import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductByCate } from "../client_api/product";

type CATEGORY_TYPE = {
    id: number;
    name: string;
    price: string | number;
    desc: string;
    image: string;
    categoryId: string | number;
    status: Boolean
};

export default function CategoryList () {
    const {id} = useParams();

    const [categorys, setCategorys] = useState<CATEGORY_TYPE[]>([]);

    const handleGetCategorys = async (id: number | string | undefined) => {
        const {data} = await getProductByCate(id);
        setCategorys(data);
    }

    console.log(categorys);

    useEffect(() => {
        handleGetCategorys(id);
    }, [id]);

    return (
        <div>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {
                                categorys.map(category => (
                                    <div className="col">
                                        <div className="card shadow-sm">
                                            <img src={category.image} alt="" style={{height: 400}}/>
                                        {/* <img src={imageBase64} width={200} alt="" /> */}
                                           <div className="card-body">
                                                <h3>{category.name}</h3>
                                                <p className="card-text">{category.desc}</p>
                                                <span>{category.price}</span>
                                                <div className="d-flex justify-content-between align-items-center pt-3" >
                                                    <div className="btn-group">
                                                        <Link to={`/phones/${category.id}`}>
                                                            <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
    )
}