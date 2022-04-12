import { type } from "@testing-library/user-event/dist/type";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategorys } from "../client_api/category";

class CategoryListold extends Component {
    state = {
        count: 0
    };

    componentDidMount() {
        console.log('didmount', this.state.count);
    }

    componentDidUpdate() {
        console.log('didupdate', this.state.count);
    }

    render() {
        return (
            <div onClick={() => this.setState({
                count: this.state.count +1
            })}>
                CategoryList lass
                <div>{this.state.count}</div>
            </div>
        )
    }
}

export type CATEGORY_TYPE = {
    id: number |string,
    name: string
};

export default function CategoryList () {
    const [categorys, setCategorys] = useState<CATEGORY_TYPE[]>([]);

    const handleGetCategorys = async () => {
        const response = await getCategorys();
        setCategorys(response.data);
    }

    console.log(categorys);

    useEffect(() => {
        handleGetCategorys();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        categorys.map(category => (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>

                                <td>
                                    <Link to={`/cates/${category.id}`}>
                                        <button>Chi tiết</button>
                                    </Link>
                                    <button>Chỉnh sửa</button>
                                    <button>Xóa</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}