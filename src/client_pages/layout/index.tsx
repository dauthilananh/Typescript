import React from "react";
import { Link, Outlet } from 'react-router-dom';

function ClientLayout() {
    return (
        <div>
            <header className="p-3 bg-dark bg-gradient text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <img src="" alt="" />
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><Link to={'/'} className="nav-link px-2 text-secondary">Home</Link></li>
                            <li><Link to={'/phones'} className="nav-link px-2 text-white">Product</Link></li>
                            <li><Link to={'/posts'} className="nav-link px-2 text-white">Posts</Link></li>
                            <li><Link to={'/cates'} className="nav-link px-2 text-white">Category</Link></li>
                            <li><a href="#" className="nav-link px-2 text-white">Book</a></li>
                        </ul>

                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>


                        <div className="text-end pl-4 ">
                            <Link to={'/logins'}><button type="button" className="btn btn-outline-light me-2">Login</button></Link>
                            <Link to={'/signups'}><button type="button" className="btn btn-warning">Sign-up</button></Link>
                        </div>

                    </div>
                </div>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <div>
                    <div className="b-example-divider" />
                    <div className="bg-dark bg-gradient text-secondary px-4 py-5 text-center">
                        <div className="py-5">
                            <h1 className="display-5 fw-bold text-white">Dark mode hero</h1>
                            <div className="col-lg-6 mx-auto">
                                <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
                                    <button type="button" className="btn btn-outline-light btn-lg px-4">Secondary</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="b-example-divider mb-0" />
                </div>

            </footer>
        </div>
    )
}
export default ClientLayout;