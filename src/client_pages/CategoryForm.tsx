import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../client_api/category";

export default function CategoryForm(){
    const navigate = useNavigate();

    const [nameValue, setNameValue] = useState<string>('');
    const [priceValue, setPriceValue] = useState<string>('');
    const [messages,setMessages] = useState<string[]>([]);

    const onvalidate = (data: {name:string}) => {
        const validateMessages = [];
        console.log(data, data.name, data.name.length);

        if(!data.name) {
            validateMessages.push('Tên không được để trống');
        }else if(data.name.length < 6) {
            validateMessages.push('Tên >= 6 Kí tự')
        }

        return validateMessages;
    }

    const handleSubmit = async () => {
        const submitData = {
            name: nameValue,
            price: +priceValue
        };

        const validate = onvalidate(submitData);

        if(validate.length === 0) {
            messages.length && setMessages([]);
            const response = await createCategory(submitData);

            if(response.status === 201) {
                navigate('/cates');
            }
        }else {
            setMessages(validate);
        }

        console.log(submitData);
    };

    return (
        <div>
            <h1>Thêm mới danh mục</h1>
            <div>
                <form>
                    <div>
                        <label htmlFor="name">Tên danh mục</label>
                        <input type="text" id="name"
                            onChange={(e) => setNameValue(e.target.value)}
                        />
                    </div>

                    <div>
                        <button onClick={() => handleSubmit()}
                            type='button'>submit</button>
                    </div>
                </form>
            </div>
            {
                messages.length > 0 ? 
                <ul>
                    {
                        messages.map((message, index) => (
                            <li key={index}>{message}</li>
                        ))
                    }
                </ul>
                :null
            }
        </div>
    );
};