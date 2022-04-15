import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { getAll } from '../../client_api/category';
import { getProduct, update } from '../../client_api/product';

export default function EditProduct() {
    const {id} = useParams();
    // console.log(x);

    type FormData = {
        name: string;
        price: string | number;
        desc: string;
        image: string;
        categoryId: string | number;
        status: Boolean |undefined
    };

    type TYPECATE = {
        id: number | string,
        name: string;
        image: ""
    };


    const navigate = useNavigate();
    const { register, setValue, reset, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(async (data) => {
        const response = await update(data);
        if (response.status === 200) {
            navigate('/admin/phones');
        }
        // console.log(response);

    });

    const getProductId = async () => {
        const {data} = await getProduct(id);
        // console.log(x);
        setProduct(data);
        reset(data);
    }

    const [product, setProduct] = useState({status: true, categoryId: ''})

    useEffect(() => {
        getProductId();
    }, []);

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
                           return category.id == product.categoryId?<option value={category?.id} selected>{category?.name}</option>:
                            <option value={category?.id}>{category?.name}</option>
                        })
                    }
                </select>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Ảnh</label>
                    <input type="text" className="form-control" {...register("image", { required: true })} />
                    <div className="text-red-500">
                        {errors.image && "không thể bỏ trống ảnh sản phẩm"}
                    </div>
                </div>
                <div className="form-check form-switch">
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Trạng thái</label>
                    <input className="form-check-input" type="checkbox" role="switch" {...register("status")} defaultChecked = {product.status} />
                </div>
                <div className="pb-5 pt-3">
                    <button type="submit" className="btn btn-primary">Cập nhật</button>
                </div>
            </form>
        </main>
    )
}