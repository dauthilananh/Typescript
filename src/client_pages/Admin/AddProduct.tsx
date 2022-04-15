import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createProduct } from "../../client_api/product";
import { useForm } from "react-hook-form";
import { getAll } from "../../client_api/category";

function AddProduct() {
    type TYPECATE = {
        id: number,
        name: string;
        image: ""
    };

    type FormData = {
        name: string;
        price: string | number;
        desc: string;
        image: string;
        categoryId: string | number;
        status: Boolean
    };

    const navigate = useNavigate();
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(async (data) => {
        const response = await createProduct(data);
        if (response.status === 201) {
            navigate('/admin/phones');
        }
        console.log(data);

    });
    const [categorys, setCategorys] = useState<TYPECATE[]>([]);

    const getCategorys = async () => {
        const { data } = await getAll();
        console.log(data);
        setCategorys(data);
    }
    useEffect(() => {
        getCategorys();
    }, []);

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="pt-4">
                <h1>Thêm mới sản phẩm</h1>
            </div>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Tên sản phẩm</label>
                    <input type="text" className="form-control" {...register("name", { required: true })} aria-describedby="emailHelp" />
                    <div className="text-red-500">
                        {errors.name && "không thể bỏ trống tên sản phẩm"}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Giá sản phẩm</label>
                    <input type="text" className="form-control" {...register("price", { required: true })} />
                    <div className="text-red-500">
                        {errors.price && "không thể bỏ trống giá sản phẩm"}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Mô tả sản phẩm</label>
                    <input type="text" className="form-control" {...register("desc", { required: true })} aria-describedby="emailHelp" />
                    <div className="text-red-500">
                        {errors.desc && "không thể bỏ trống mô tả sản phẩm"}
                    </div>
                </div>
                <label htmlFor="exampleInputEmail1" className="form-label">Chọn danh mục</label>
                <select className="form-select" aria-label="Default select example"
                    {...register("categoryId", { required: true })}>

                    <option hidden>Chọn danh mục</option>
                    {
                        categorys.map(category => {
                            return <option value={category?.id}>{category?.name}</option>
                        })
                    }
                </select>
                <div className="text-red-500">
                    {errors.desc && "không thể bỏ trống chọn danh mục sản phẩm"}
                </div>

                <div className="mb-3 pt-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Ảnh</label>
                    <input type="text" className="form-control" {...register("image", { required: true })} />
                    <div className="text-red-500">
                        {errors.image && "không thể bỏ trống ảnh sản phẩm"}
                    </div>
                </div>
                <div className="form-check form-switch">
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Trạng thái</label>
                    <input className="form-check-input" type="checkbox" role="switch" {...register("status")} defaultChecked />
                </div>
                <div className="pb-5 pt-3">
                    <button type="submit" className="btn btn-primary">Thêm</button>
                </div>
            </form>
        </main>

    );
};

export default AddProduct;