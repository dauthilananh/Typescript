import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { deleteCategory, getAll } from '../../../client_api/category';


export default function Category() {
    type PRODUCT_TYPE = {
        id: number,
        name: string,
        image: "",
    };

    const [categorys, setCategorys] = useState<PRODUCT_TYPE[]>([])
    useEffect(() => {
        ; (async () => {
            const { data } = await getAll()
            setCategorys(data)
        })()
    }, []);
    
    const ondeleteCategory = async (id: number) => {
        if (window.confirm('Bạn có muốn xoá không')) {
            const { data } = await deleteCategory(id)
            console.log(data)
            setCategorys(categorys.filter((item) => item.id !== id))
        }
    }

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="text-end row pt-4">
                <div className="col-6">
                    <h2 className="mr-96">Danh mục</h2>
                </div>
                <div className="col-4">
                    <NavLink to={'add'}>
                        <button type="button" className="btn btn-warning">Thêm danh mục</button>
                    </NavLink>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-dark table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorys.map((cate, index) => (
                            <tr
                                key={index}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                                <td style={{ verticalAlign: 'middle' }} className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                    {index + 1}
                                </td>
                                <td style={{ verticalAlign: 'middle' }} className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-900">
                                    {cate.name}
                                </td>
                                <td style={{ verticalAlign: 'middle' }} className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    <img src={cate.image} width={100} height={100} alt="" />
                                </td>
                                <td style={{ verticalAlign: 'middle' }} className="text-center py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    <Link to={`${cate.id}`}>
                                        <button className="btn btn-outline-primary px-4 py-1 mr-3">
                                            Chi tiết
                                        </button>
                                    </Link>

                                    <Link to={`${cate.id}/edit`}>
                                        <button className="btn btn-outline-warning px-4 py-1 mr-3">
                                            sửa
                                        </button>
                                    </Link>
                                    <button
                                        className="btn btn-outline-danger px-4 py-1"
                                        onClick={() => {
                                            ondeleteCategory(cate.id)
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