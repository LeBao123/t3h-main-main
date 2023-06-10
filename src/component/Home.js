import React from "react";
import Shop_method from "./Shop_method";
class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="slider-area ">
                    <div className="slider-active">
                        <div className="single-slider slider-height d-flex align-items-center slide-bg">
                            <div className="container">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                        <div className="hero__caption">
                                            <h1 data-animation="fadeInLeft" data-delay=".4s" data-duration="2000ms">Select Your New Perfect Style
                                            </h1>
                                            <p data-animation="fadeInLeft" data-delay=".7s" data-duration="2000ms">Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
                                            <div className="hero__btn" data-animation="fadeInLeft" data-delay=".8s" data-duration="2000ms">
                                                <a href="industries.html" className="btn hero-btn">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                                        <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
                                            <img src="../../public/assets/img/hero/watch.png" alt="" className=" heartbeat" />
                                            <noscript>
                                                <img src="../../public/assets/img/hero/watch.png" alt="" className=" heartbeat" />
                                            </noscript>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="single-slider slider-height d-flex align-items-center slide-bg">
                            <div className="container">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                        <div className="hero__caption">
                                            <h1 data-animation="fadeInLeft" data-delay=".4s" data-duration="2000ms">Select Your New Perfect Style
                                            </h1>
                                            <p data-animation="fadeInLeft" data-delay=".7s" data-duration="2000ms">Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>

                                            <div className="hero__btn" data-animation="fadeInLeft" data-delay=".8s" data-duration="2000ms">
                                                <a href="industries.html" className="btn hero-btn">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                                        <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
                                            <img src="assets/img/hero/watch.png" alt="" className=" heartbeat" />
                                            <noscript><img src="assets/img/hero/watch.png" alt="" className=" heartbeat" /></noscript>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <section className="new-product-area section-padding30">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-tittle mb-70">
                                    <h2>New Arrivals</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-new-pro mb-30 text-center">
                                    <div className="product-img">
                                        <img src="assets/img/gallery/new_product1.png" alt="" />
                                        <noscript><img src="assets/img/gallery/new_product1.png" alt="" /></noscript>
                                    </div>
                                    <div className="product-caption">
                                        <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-new-pro mb-30 text-center">
                                    <div className="product-img">
                                        <img src="assets/img/gallery/new_product2.png" alt="" />
                                        <noscript><img src="assets/img/gallery/new_product2.png" alt="" /></noscript>
                                    </div>
                                    <div className="product-caption">
                                        <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-new-pro mb-30 text-center">
                                    <div className="product-img">
                                        <img src="assets/img/gallery/new_product3.png" alt="" />
                                        <noscript><img src="assets/img/gallery/new_product3.png" alt="" /></noscript>
                                    </div>
                                    <div className="product-caption">
                                        <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="gallery-area">
                    <div className="container-fluid p-0 fix">
                        <div className="row">
                            <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-gallery mb-30">
                                    <div className="gallery-img big-img" style={{ backgroundImage: "url(assets/img/gallery/gallery1.png)" }}></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-gallery mb-30">
                                    <div className="gallery-img big-img" style={{ backgroundImage: "url(assets/img/gallery/gallery2.png)" }}></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-12">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                                        <div className="single-gallery mb-30">
                                            <div className="gallery-img small-img" style={{ backgroundImage: "url(assets/img/gallery/gallery3.png)" }}></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12  col-md-6 col-sm-6">
                                        <div className="single-gallery mb-30">
                                            <div className="gallery-img small-img" style={{ backgroundImage: "url(assets/img/gallery/gallery1.png)" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="popular-items section-padding30">
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-8 col-md-10">
                                <div className="section-tittle mb-70 text-center">
                                    <h2>Popular Items</h2>
                                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                                        ipsum suspendisse ultrices gravida.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="assets/img/gallery/popular1.png" alt=""
                                        /><noscript><img src="assets/img/gallery/popular1.png"
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
                                        <img src="assets/img/gallery/popular2.png" alt=""
                                        /><noscript><img src="assets/img/gallery/popular2.png"
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
                                        <img src="assets/img/gallery/popular3.png" alt=""
                                        /><noscript><img src="assets/img/gallery/popular3.png"
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
                                        <img src="assets/img/gallery/popular4.png" alt=""
                                        /><noscript><img src="assets/img/gallery/popular4.png"
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
                                        <img src="assets/img/gallery/popular5.png" alt=""
                                        /><noscript><img src="assets/img/gallery/popular5.png"
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
                                        <img src="assets/img/gallery/popular6.png" alt=""
                                        /><noscript><img src="assets/img/gallery/popular6.png"
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
                        </div>

                        <div className="row justify-content-center">
                            <div className="room-btn pt-70">
                                <a href="catagori.html" className="btn view-btn1">View More Products</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="video-area">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="video-wrap">
                                    <div className="play-btn "><a className="popup-video" href="https://www.youtube.com/watch?v=KMc6DyEJp04"><i
                                        className="fas fa-play"></i></a></div>
                                </div>
                            </div>
                        </div>

                        <div className="thumb-content-box">
                            <div className="thumb-content">
                                <h3>Next Video</h3>
                                <a href="#"> <i className="flaticon-arrow"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="watch-area section-padding30">
                    <div className="container">
                        <div className="row align-items-center justify-content-between padding-130">
                            <div className="col-lg-5 col-md-6">
                                <div className="watch-details mb-40">
                                    <h2>Watch of Choice</h2>
                                    <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                                    <a href="shop.html" className="btn">Show Watches</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-10">
                                <div className="choice-watch-img mb-40">
                                    <img src="assets/img/gallery/choce_watch1.png" alt="" />
                                    <noscript><img src="assets/img/gallery/choce_watch1.png" alt="" /></noscript>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6 col-md-6 col-sm-10">
                                <div className="choice-watch-img mb-40">
                                    <img src="assets/img/gallery/choce_watch2.png" alt="" />
                                    <noscript><img src="assets/img/gallery/choce_watch2.png" alt="" /></noscript>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <div className="watch-details mb-40">
                                    <h2>Watch of Choice</h2>
                                    <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                                    <a href="shop.html" className="btn">Show Watches</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Shop_method page="disable" />
            </div>
        )
    }
}
export default Home;
