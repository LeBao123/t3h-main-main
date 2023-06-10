
import Shop_method from "./Shop_method";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "./context/UserContext";
import { get } from "../service/product.service";
function Shop(props) {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(100);
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(30);
    const getData = async () => {
        const rs = await get(limit, skip);
        setProducts(rs.products);
        setTotal(rs.total);
        setLimit(rs.limit);
        setSkip(rs.skip);
    }
    useEffect(() => {
        getData();
    }, []);
    // const changePage = (skip) => {
    //     setSkip(skip);
    //     getData();
    // }
    const { state, dispatch } = React.useContext(UserContext);
    const addToCart = (products) => {
        let check = false;
        state.cart.map(f => {
            if (f.id == products.id) {
                f.qty = f.qty + 1;
                check = true;
            }
            return f;
        })
        if (check == false) {
            products.qty = 1;
            state.cart.push(products);
        }
        dispatch({ type: "update_cart", payload: state.cart });
        setTimeout(() => {
            dispatch({ type: "hide_loading" });
        }, 1000);

        localStorage.setItem("state", JSON.stringify(state));
    }
    const addToWishlist = (products) => {
        let check = false;
        state.favorite.map(f => {
            if (f.id == products.id) {
                check = true;
            }
            return f;
        })
        if (check == false) {
            products.qty = 1;
            state.favorite.push(products);
        }
        dispatch({ type: "update_favorite", payload: state.favorite });
        setTimeout(() => {
            dispatch({ type: "hide_loading" });
        }, 1000);

        localStorage.setItem("state", JSON.stringify(state));
    }
    return (
        <div>
            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2>Watch Shop</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="popular-items latest-padding">
                <div className="container">
                    <div className="row product-btn justify-content-between mb-40">
                        <div className="properties__button">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
                                        aria-controls="nav-home" aria-selected="true">NewestArrivals</a>
                                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
                                        aria-controls="nav-profile" aria-selected="false"> Price high to low</a>
                                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab"
                                        aria-controls="nav-contact" aria-selected="false"> Most populer </a>
                                </div>
                            </nav>
                        </div>
                        <div className="grid-list-view">
                        </div>
                        <div className="select-this">
                            <form action="#">
                                <div className="select-itms">
                                    <select name="select" id="select1">
                                        <option value="">40 per page</option>
                                        <option value="">50 per page</option>
                                        <option value="">60 per page</option>
                                        <option value="">70 per page</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="row">
                                {
                                    //  assets/img/gallery/popular1.png 
                                    products.map((b,t) => {
                                        return (
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                                <div className="single-popular-items mb-50 text-center">
                                                    <div className="popular-img">
                                                        <img src={b.thumbnail} height="270" alt="" />
                                                        <noscript><image src={b.images} height="270" alt="" /></noscript>
                                                        <div className="img-cap">
                                                                <span><a href="javascript:void(0);" onClick={()=>{addToCart(b)}}> Add to cart</a></span>                                                      
                                                        </div>
                                                        <div className="favorit-items">
                                                            <a href="javascript:void(0);" onClick={()=>{addToWishlist(b)}}><span className="flaticon-heart"></span></a>
                                                        </div>
                                                    </div>
                                                    <div className="popular-caption">
                                                        <h3><a href="product_details.html">{b.title}</a></h3>
                                                        <span>${b.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="assets/img/gallery/popular2.png" alt="" />
                                            <noscript><img src="assets/img/gallery/popular2.png" alt="" /></noscript>
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart"></span>
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="assets/img/gallery/popular3.png" alt="" />
                                            <noscript><img src="assets/img/gallery/popular3.png" alt="" /></noscript>
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart"></span>
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="assets/img/gallery/popular4.png" alt="" />
                                            <noscript><img src="assets/img/gallery/popular4.png" alt="" /></noscript>
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart"></span>
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="assets/img/gallery/popular5.png" alt="" />
                                            <noscript><img src="assets/img/gallery/popular5.png" /></noscript>
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart"></span>
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="assets/img/gallery/popular6.png" alt="" />
                                            <noscript><img src="assets/img/gallery/popular6.png" alt="" /></noscript>
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart"></span>
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/* <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="assets/img/gallery/popular1.png" alt="" /><noscript><img src="assets/img/gallery/popular1.png"
                                                alt="" /></noscript>
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart"></span>
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="assets/img/gallery/popular2.png" alt="" /><noscript><img src="assets/img/gallery/popular2.png"
                                                alt="" /></noscript>
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart"></span>
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="assets/img/gallery/popular3.png" alt="" /><noscript><img src="assets/img/gallery/popular3.png"
                                                alt="" /></noscript>
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart"></span>
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="assets/img/gallery/popular4.png" alt="" />
                                            <noscript><img src="assets/img/gallery/popular4.png" alt="" /></noscript>
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart"></span>
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="assets/img/gallery/popular5.png" alt="" />
                                            <noscript><img src="assets/img/gallery/popular5.png" alt="" /></noscript>
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart"></span>
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="assets/img/gallery/popular6.png" alt="" />
                                            <noscript><img src="assets/img/gallery/popular6.png" /></noscript>
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart"></span>
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <div className="row"> */}
                                {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="assets/img/gallery/popular1.png" alt="" />
                                            <noscript><img src="assets/img/gallery/popular1.png" /></noscript>
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart"></span>
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="assets/img/gallery/popular2.png" alt="" /><noscript><img src="assets/img/gallery/popular2.png"
                                                alt="" /></noscript>
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart"></span>
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="assets/img/gallery/popular3.png" alt="" /><noscript><img src="assets/img/gallery/popular3.png"
                                                alt="" /></noscript>
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart"></span>
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="assets/img/gallery/popular4.png" alt="" />
                                            <noscript><img src="assets/img/gallery/popular4.png" alt="" /></noscript>
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart"></span>
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="assets/img/gallery/popular5.png" alt="" /><noscript><img src="assets/img/gallery/popular5.png"
                                                alt="" /></noscript>
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart"></span>
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="assets/img/gallery/popular6.png" alt="" /><noscript><img src="assets/img/gallery/popular6.png"
                                                alt="" /></noscript>
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart"></span>
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div> */}
                            {/* </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <Shop_method page="disable" />
        </div>
    )
}
export default Shop;
