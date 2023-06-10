import React, { useEffect, useState } from "react";
import Shop_method from "../Shop_method";
import UserContext from "../context/UserContext";
import api from "../../api";
const Cart = (props) => {
    const [count, setCount] = useState(0);
    const { state, dispatch } = React.useContext(UserContext);
    const [products, setProducts] = useState(state.cart);

    const upCount = () => {
        setCount(count + 1);
    }
    const removeCart = (products) => {
        const new_cart = [];
        state.cart.map(f => {
            if (f.id != products.id) {
                new_cart.push(f);
            }
        })
        state.cart = new_cart;
        // setState(state);
        dispatch({ type: "update_cart", payload: new_cart });
        setTimeout(() => {
            dispatch({ type: "hide_loading" });
        }, 1000);
        localStorage.setItem("state", JSON.stringify(state));
        // updateCart();
    }
    return (
        <div>
            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2>Cart List</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="cart_area section_padding">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        state.cart.map((b,t) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div className="media">
                                                            <div className="d-flex">
                                                                <img src={b.thumbnail} height="270" alt="" />
                                                                <noscript><img src={b.images} height="270" alt="" /></noscript>
                                                            </div>
                                                            <div className="media-body">
                                                                <p>{b.title}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5>${b.price}</h5>
                                                    </td>
                                                    <td>
                                                        <div className="product_count">
                                                            <span className="input-number-decrement"> <i className="ti-minus"></i></span>
                                                            <input className="input-number" type="text" value={b.qty} min="0" max="10" />
                                                            <span className="input-number-increment"> <i className="ti-plus"></i></span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5>${b.price * b.qty}</h5>
                                                    </td>
                                                    <td className="shoping__cart__item__close">
                                                        <span onClick={() => {removeCart(b)}} className="icon_close">x</span>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    <tr className="bottom_button">
                                        <td>
                                            <a className="btn_1" href="#">Update Cart</a>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div className="cupon_text float-right">
                                                <a className="btn_1" href="#">Close Coupon</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <h5>Subtotal</h5>
                                        </td>
                                        <td>
                                            <h5>$21479</h5>
                                        </td>
                                    </tr>
                                    <tr className="shipping_area">
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <h5>Shipping</h5>
                                        </td>
                                        <td>
                                            <div className="shipping_box">
                                                <ul className="list">
                                                    <li>
                                                        Flat Rate: $5.00
                                                        <input type="radio" aria-label="Radio button for following text input" />
                                                    </li>
                                                    <li>
                                                        Free Shipping
                                                        <input type="radio" aria-label="Radio button for following text input" />
                                                    </li>
                                                    <li>
                                                        Flat Rate: $10.00
                                                        <input type="radio" aria-label="Radio button for following text input" />
                                                    </li>
                                                    <li className="active">
                                                        Local Delivery: $2.00
                                                        <input type="radio" aria-label="Radio button for following text input" />
                                                    </li>
                                                </ul>
                                                <h6>
                                                    Calculate Shipping
                                                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                                                </h6>
                                                <select className="shipping_select">
                                                    <option value="1">Bangladesh</option>
                                                    <option value="2">India</option>
                                                    <option value="4">Pakistan</option>
                                                </select>
                                                <select className="shipping_select section_bg">
                                                    <option value="1">Select a State</option>
                                                    <option value="2">Select a State</option>
                                                    <option value="4">Select a State</option>
                                                </select>
                                                <input className="post_code" type="text" placeholder="Postcode/Zipcode" />
                                                <a className="btn_1" href="#">Update Details</a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="checkout_btn_inner float-right">
                                <a className="btn_1 l-2" href="#">Continue Shopping</a>
                                <a className="btn_1 checkout_btn_1" href="#">Proceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Cart;