import React from "react";
import  {Routes, Route} from 'react-router-dom';
import Dashboard from './client_pages/Dashboard';
import ClientLayout from './client_pages/layout';
import ProductDetail from './client_pages/ProductDetail';
import ProductList from './client_pages/ProductList';
import ProductForm from './client_pages/productForm';
import PostList from './client_pages/PostList';
import PostDetail from './client_pages/PostDetail';
import PostForm from "./client_pages/PostForm";
import CategoryList from "./client_pages/CategoryList";
import Login from "./client_pages/login/login";
import SignnUp from "./client_pages/login/signup";
import Header from "./components/Header";
import AdminHomePage from "./client_pages/Admin/AdminHomePage";
import Category from "./client_pages/Admin/Category/Category";
import AdminLayout from "./client_pages/layout/AdminLayout";
import AddProduct from "./client_pages/Admin/AddProduct";
import Product from "./client_pages/Admin/Category/Product";
import DetailProduct from "./client_pages/Admin/Category/DetailProduct";
import EditProduct from "./client_pages/Admin/EditProduct";
import AddCategory from "./client_pages/Admin/AddCategory";
import EditCategory from "./client_pages/Admin/EditCategory";
import DetailCategory from "./client_pages/Admin/Category/DetailCategory";

function Appclone() {
    return (
        <div>
            {/* <h1>hí chào cậu</h1> */}
            <Routes>
                <Route path={'/'} element={<ClientLayout />}>
                    <Route index element={<Dashboard />} />
                    
                    <Route path={'phones'}>
                        <Route index element={<ProductList />} />
                        <Route path={'add'} element={<ProductForm />}/>
                        <Route path=":id">
                            <Route index element={<ProductDetail />} />
                        </Route>
                    </Route>

                    <Route path={'posts'}>
                        <Route index element={<PostList />} />
                        <Route path={':id'} element={<PostDetail />} />
                        <Route path={'create'} element={<PostForm />} />
                        <Route path={'edit/:id'} element={<PostForm />} />
                    </Route>

                    <Route path={'cates/:id'}>
                        <Route index element={<CategoryList/>} />
                    </Route>

                    <Route path={'logins'}>
                        <Route index element={<Login />} />
                    </Route>

                    <Route path={'signups'}>
                        <Route index element={<SignnUp />} />
                    </Route>
                </Route>
                
                <Route path={'admin'} element={<AdminLayout />}>
                    <Route index element={<AdminHomePage />} />
                    <Route path="dashboard" element={<Category />} />
                    
                    <Route path={'phones'}>
                        <Route index element={<Product />} />
                        <Route path={'create'} element={<AddProduct />}/>
                        <Route path=':id'>
                            <Route index element={<DetailProduct />} />
                            <Route path="edit" element={<EditProduct />} />
                        </Route>
                    </Route>

                    <Route path={'cates'}>
                        <Route index element={<Category />} />
                        <Route path={'add'} element={<AddCategory />}/>
                        <Route path=':id'>
                            <Route index element={<DetailCategory />} />
                            <Route path="edit" element={<EditCategory />} />
                        </Route>
                    </Route>

                </Route>
            </Routes>
        </div>
    );
};

export default Appclone;