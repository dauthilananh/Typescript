import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { deleteProduct, getProducts } from '../../../client_api/product';

export default function Product() {
    const [products, setProducts] = useState<PRODUCT_TYPE[]>([])
    useEffect(() => {
        ; (async () => {
            const { data } = await getProducts()
            setProducts(data)
        })()
    }, [])
    const ondeleteProduct = async (id: number) => {
        if (window.confirm('Bạn có muốn xoá không')) {
            const { data } = await deleteProduct(id)
            console.log(data)
            setProducts(products.filter((item) => item.id !== id))
        }
    }
    type PRODUCT_TYPE = {
        id: number,
        name: string,
        price: number,
        desc: string,
        image: "",
        status: 0
    };

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="text-end row">
                <div className="col-6">
                    <h2 className="mr-96">Sản phẩm</h2>
                </div>
                <div className="col-4">
                    <NavLink to={'create'}>
                        <button type="button" className="btn btn-warning">Thêm sản phẩm</button>
                    </NavLink>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-dark table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Desc</th>
                            <th scope="col">Price</th>
                            <th scope="col">image</th>
                            <th scope="col">status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr
                                key={index}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                                <td style={{ verticalAlign: 'middle' }} className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                    {index + 1}
                                </td>
                                <td style={{ verticalAlign: 'middle' }} className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-900">
                                    {product.name}
                                </td>
                                <td style={{ verticalAlign: 'middle' }} className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    {product.desc}
                                </td>
                                <td style={{ verticalAlign: 'middle' }} className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    {product.price}
                                </td>
                                <td style={{ verticalAlign: 'middle' }} className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    <img src="https://www.xtmobile.vn/vnt_upload/news/07_2019/iphone-12-pro-max-xtmobile.jpg" width={100} height={100} alt="" />
                                </td>
                                <td style={{ verticalAlign: 'middle' }} className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    {product.status}
                                </td>
                                <td style={{ verticalAlign: 'middle' }} className="text-center py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    <Link to={`${product.id}`}>
                                        <button className="border boder-white px-4 py-1 mr-3">
                                            Chi tiết
                                        </button>
                                    </Link>

                                    <Link to={`${product.id}/edit`}>
                                        <button className="border boder-white px-4 py-1 mr-3">
                                            sửa
                                        </button>
                                    </Link>
                                    <button
                                        className="border border-white px-4 py-1"
                                        onClick={() => {
                                            ondeleteProduct(product.id)
                                        }}
                                    >
                                        Xoá
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}