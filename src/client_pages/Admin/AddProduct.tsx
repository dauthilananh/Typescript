import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createProduct } from "../../client_api/product";

function AddProduct() {
    const navigate = useNavigate();

    const [nameValue, setNameValue] = useState<string>('');
    const [priceValue, setPriceValue] = useState<string>('');
    const [messages, setMessages] = useState<string[]>([]);

    const onValidate = (data: { name: string, price: number }) => {
        const validateMessages = [];
        console.log(data, data.name, data.name.length);

        if (!data.name) {
            validateMessages.push('Tên không được để trống');
        } else if (data.name.length < 6) {
            validateMessages.push('Tên >= 6 ký tự');
        }

        if (!data.price) {
            console.log(data.price);
            validateMessages.push('Giá không được để trống hoặc < 1');
        }

        return validateMessages;
    }

    const handleSubmit = async () => {
        const submitData = {
            name: nameValue,
            price: +priceValue
        };

        const validate = onValidate(submitData);

        if (validate.length === 0) {
            messages.length && setMessages([]);
            const response = await createProduct(submitData);

            if (response.status === 201) {
                navigate('/phones');
            }
        } else {
            setMessages(validate);
        }

        console.log(submitData);
    };

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h1>Thêm mới sản phẩm</h1>
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

            {
                messages.length > 0 ?
                    <ul>
                        {
                            messages.map((message, index) => (
                                <li key={index}>{message}</li>
                            ))
                        }
                    </ul>
                    : null
            }
        </main>
        
    );
};

export default AddProduct;