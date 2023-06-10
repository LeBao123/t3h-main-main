import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className="header-area">
                        <div className="main-header header-sticky">
                            <div className="container-fluid">
                                <div className="menu-wrapper">

                                    <div className="logo">
                                        <Link to="/">
                                            <img src="../../public/assets/img/logo/logo.png" alt="" />
                                            {/* <img src="assets/img/logo/logo.png" alt="" style={{display:none, visibility:hidden}}/> */}
                                            <noscript><img src="../../public/assets/img/logo/logo.png" alt="" /></noscript>
                                        </Link>
                                    </div>

                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/shop">shop</Link></li>
                                                <li><Link to="/about">about</Link></li>
                                                <li className="hot"><Link to="#">Latest</Link>
                                                    <ul className="submenu">
                                                        <li><Link to="/shop"> Product list</Link></li>
                                                        <li><Link to="/product_details"> Product Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/blog">Blog</Link>
                                                    <ul className="submenu">
                                                        <li><Link to="/blog">Blog</Link></li>
                                                        <li><Link to="/blog-details">Blog Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="#">Pages</Link>
                                                    <ul className="submenu">
                                                        <li><Link to="/login">Login</Link></li>
                                                        <li><Link to="/cart">Cart</Link></li>
                                                        <li><Link to="/additem">AddItem</Link></li>
                                                        <li><Link to="/elements">Element</Link></li>
                                                        <li><Link to="/confirmation">Confirmation</Link></li>
                                                        <li><Link to="/checkout">Product Checkout</Link></li>
                                                        
                                                    </ul>
                                                </li>
                                                <li><Link to="/contact">Contact</Link></li>
                                                <li><Link to="/favourite">Favourite</Link></li>
                                            </ul>
                                        </nav>
                                    </div>

                                    <div className="header-right">
                                        <ul>
                                            <li>
                                                <div className="nav-search search-switch">
                                                    <span className="flaticon-search"></span>
                                                </div>
                                            </li>
                                            <li> <Link to="/login"><span className="flaticon-user"></span></Link></li>
                                            <li><Link to="/cart"><span className="flaticon-shopping-cart"></span></Link> </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
export default Header;