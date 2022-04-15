import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/footer";


export default function AdminLayout() {
    return (
        <div>
            <div>
                <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
                    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                    <div className="navbar-nav">
                        <div className="nav-item text-nowrap">
                            <a className="nav-link px-3" href="#">Sign out</a>
                        </div>
                    </div>
                </header>
                <div className="container-fluid ">
                    <div className="row">
                        <nav id="sidebarMenu" className=" bg-dark bg-gradient col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                            <div className="position-sticky pt-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <NavLink to={''}>
                                            <a className="nav-link active  text-white" aria-current="page" href="#">
                                                <span data-feather="home" />
                                                Dashboard
                                            </a>
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to={'phones'}>
                                            <a className="nav-link  text-white" href="#">
                                                <span data-feather="file" />
                                                Sản phẩm
                                            </a>
                                        </NavLink>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <NavLink to={'cates'}>
                                            <a className="nav-link  text-white" href="#">
                                                <span data-feather="shopping-cart" />
                                                Danh mục
                                            </a>
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                            <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}