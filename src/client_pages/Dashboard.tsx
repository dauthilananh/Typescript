import React, { Component, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProducts } from '../client_api/product';

class ProductListOld extends Component {
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
                count: this.state.count + 1
            })}>
                ProductList Class
                <div>{this.state.count}</div>
            </div>
        )
    }
}

export type PRODUCT_TYPE = {
    id: number | string,
    name: string,
    price: number,
    desc: string,
    image: "",
    status: 0
};

function Dashboard() {
    const [products, setProducts] = useState<PRODUCT_TYPE[]>([]);

    const handleGetProducts = async () => {
        const response = await getProducts();
        setProducts(response.data);
    };

    // const handleDeleteProducts = async (id: number) => {}

    console.log(products);

    useEffect(() => {
        handleGetProducts();
    }, []);

    return (
        <div>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cool-new-mobile-phone-promotion-purple-banner-image_183067.jpg" alt="" height={100} width="100%" />
                        <div className="container">
                            <div className="carousel-caption text-start ">
                                <h1>Đậu thị lan anh</h1>
                                <p>Mẫ sinh viên: PH11760</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {
                                products.map(product => (
                                    <div className="col">
                                        <div className="card shadow-sm">
                                            <img src={product.image} alt="" style={{height: 400}}/>
                                        {/* <img src={imageBase64} width={200} alt="" /> */}
                                           <div className="card-body">
                                                <h3>{product.name}</h3>
                                                <p className="card-text">{product.desc}</p>
                                                <span>{product.price}</span>
                                                <div className="d-flex justify-content-between align-items-center pt-3" >
                                                    <div className="btn-group">
                                                        <Link to={`/phones/${product.id}`}>
                                                            <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;