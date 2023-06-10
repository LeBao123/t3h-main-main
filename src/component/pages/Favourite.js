import React,{useEffect, useState} from "react";
import Shop_method from "../Shop_method";
import UserContext from "../context/UserContext";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
const Favourite = (props) => {
    const [count, setCount] = useState(0);
    const { state, dispatch } = React.useContext(UserContext);
    const [products, setProducts] = useState(state.favourite);

    const upCount = () => {
        setCount(count + 1);
    }
    const addToWishlist = (product)=>{
        let check = false;
        state.favourite.map(f=>{
            if(f.id == product.id){
                check =  true;    
            }
            return f;
        })
        if(check == false){
            products.qty = 1;
            state.favourite.push(product);
        }
        dispatch({type:"update_favorite",payload:state.favourite});
        setTimeout(()=>{
            dispatch({type:"hide_loading"});
        },1000);
        
        localStorage.setItem("state",JSON.stringify(state));   
    }
    const RemoveWishlist = (product) => {
        const new_wishlist = [];
        state.favourite.map(f => {
            if (f.id == product.id) {
                new_wishlist.push(f);
            }
        })
        state.wishlist = new_wishlist;
        // setState(state);
        dispatch({ type: "update_wishlist", payload: new_wishlist });
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
                                    <h2>Favourite</h2>
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
                                        <th scope="col"></th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        state.favourite.map((b,t) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div className="media">
                                                            <div className="d-flex">
                                                                <img src={b.thumbnail} height="200" alt="" />
                                                                <noscript><img src={b.images} height="270" alt="" /></noscript>
                                                            </div>
                                                            <div className="media-body">
                                                                <p>{b.title}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {/* <h5>${b.price}</h5> */}
                                                    </td>
                                                    <td>
                                                        <div className="product_count">
                                                            <span></span>
                                                            <input className="input-number" value={b.qty} max="1"/>
                                                            <span></span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {/* <h5>${b.price * b.qty}</h5> */}
                                                    </td>
                                                    <td className="shoping__cart__item__close">
                                                        <span onClick={() => { RemoveWishlist(b) }} className="icon_close">x</span>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
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
export default Favourite;