import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
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
                <NavLink to={'dashboard'}>
                  <a className="nav-link  text-white" href="#">
                    <span data-feather="shopping-cart" />
                    Danh mục
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
              
            </ul>
          </div>
        </nav>
    <div className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>a</div>
      </div>
    </div>

  )
}