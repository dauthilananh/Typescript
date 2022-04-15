import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { getCategory, update } from '../../client_api/category';
export default function EditCategory() {
    const {id} = useParams();
    // console.log(x);

    type FormData = {
        name: string,
        image: "",
    };


    const navigate = useNavigate();
    const { register, setValue, reset, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(async (data) => {
        const response = await update(data);
        if (response.status === 200) {
            navigate('/admin/cates');
        }
        // console.log(response);

    });

    const getCategoryId = async () => {
        const {data} = await getCategory(id);
        // console.log(x);
        setCategory(data);
        reset(data);
    }

    const [category, setCategory] = useState({status: true})

    useEffect(() => {
        getCategoryId();
    }, []);

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="pt-4">
                <h2>Sửa sản phẩm</h2>
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
                    <label htmlFor="exampleInputPassword1" className="form-label">Ảnh</label>
                    <input type="text" className="form-control" {...register("image", { required: true })} />
                    <div className="text-red-500">
                    {errors.image && "không thể bỏ trống ảnh danh mục"}
                    </div>
                </div>
                <div className="pb-5 pt-3">
                    <button type="submit" className="btn btn-primary">Cập nhật</button>
                </div>
            </form>
        </main>
    )
}