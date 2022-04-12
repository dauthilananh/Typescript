import React, { useEffect } from "react";
import { useForm, SubmitHandler, useFormState } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createPost } from '../client_api/post';
import { getPost } from "../client_api/post";

export type POST_TYPE = {
    title: string,
    desc: string,
    author: string,
    category: string,
    thumbnail: string,
    status: number
};

export default function PostForm() {
    const navigate = useNavigate();
    const {id} = useParams();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            title: '',
            desc: '',
            author: '',
            category: '',
            thumbnail: '',
            status: 0
        }
    });

    // const onSubmit: SubmitHandler<{
    //     title: string,
    //     desc: string,
    //     author: string,
    //     category: string,
    //     thumbnail: string,
    //     status: number
    // }> = (data) => {
    //     console.log(data);
    // }

    const onSubmit: SubmitHandler<POST_TYPE> = (data) => {
        handleSubmitPost(data);
    };

    const handleSubmitPost = async (data: POST_TYPE) => {
        const response = await createPost(data);

        if (response.status === 201) {
            navigate('/posts');
        }
    };

    const handleGetPost = async (id: string) => {
        const response = await getPost(id);
        if (response.status === 200) {
            reset({
                ...response.data,
                status: `${response.data.status}`
            });
        }
    };

    useEffect(() => {
        if(id) {
            handleGetPost(id);
        }
    }, [id]);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor=""> title</label>
                    <input type="text" placeholder='Tiêu đề'
                        {...register('title',
                            {
                                required: { value: true, message: 'Bắt buộc' },
                            }
                        )}
                    />
                    <div>{errors.title ? 'bắt buộc' : ''}</div>
                    {/* <div>{errors.title?.message || 'bắt buộc'}</div> */}
                </div>

                <div>
                    <label htmlFor="">desc</label>
                    <input type="text" placeholder='mô tả'
                        {...register('desc',
                            {
                                required: true,
                            }
                        )}
                    />
                </div>

                <div>
                    <label htmlFor="">Author</label>
                    <input type="text" placeholder='author'
                        {...register('author')}
                    />
                </div>

                <div>
                    <label htmlFor="">Category</label>
                    <input type="text" placeholder='category'
                        {...register('category')}
                    />
                </div>

                <div>
                    <label htmlFor="">Thumbnail</label>
                    <input type="text" placeholder='thumbnail'
                        {...register('thumbnail')}
                    />
                </div>
                <div>
                    <label htmlFor="">Status</label>
                    <input type="radio" {...register('status')} value={0} />Không kích hoạt
                    <input type="radio" {...register('status')} value={1} />Kích hoạt
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
};