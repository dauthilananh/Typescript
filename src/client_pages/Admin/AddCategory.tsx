import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../client_api/category";

export default function AddCategory() {
    type FormData = {
        name: string;
        image: ""
    };

    const navigate = useNavigate();
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(async (data) => {
        const response = await createCategory(data);
        if (response.status === 201) {
            navigate('/admin/cates');
        }
        // console.log(response);

    });

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="pt-4">
                <h1>Thêm mới danh mục</h1>
            </div>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Tên danh mục</label>
                    <input type="text" className="form-control" {...register("name", { required: true })} aria-describedby="emailHelp" />
                    <div className="text-red-500">
                        {errors.name && "không thể bỏ trống tên sản phẩm"}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Ảnh</label>
                    <input type="text" className="form-control" {...register("image", { required: true })} />
                    <div className="text-red-500">
                    {errors.image && "không thể bỏ trống ảnh danh mục"}
                    </div>
                </div>
                <div className="pb-5 pt-3">
                    <button type="submit" className="btn btn-primary">Thêm</button>
                </div>
            </form>
        </main>
    )
}