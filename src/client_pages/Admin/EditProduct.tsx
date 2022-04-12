import React from 'react';

export default function EditProduct () {
    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h1>Sửa sản phẩm</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Tên sản phẩm</label>
                    <input type="email" className="form-control" id="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Giá sản phẩm</label>
                    <input type="password" className="form-control" id="price" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Mô tả sản phẩm</label>
                    <input type="email" className="form-control" id="desc" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Ảnh</label>
                    <input type="password" className="form-control" id="image" />
                </div>
                <div className="pb-5">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </main>
    )
}