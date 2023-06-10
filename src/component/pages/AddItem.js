import React from "react";
import Shop_method from "../Shop_method";
import Fb from "../../Fb"
import { get } from "../../service/firebase/product.firebase.service"


class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            form_product:{}


        }
        this.handleInput = this.handleInput.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.refresh = this.refresh.bind(this);
    }
    componentDidMount(){
        this.refresh();
    }
    async refresh(){
        const products = await get();
        this.setState({products:products});
    }

    handleInput(event){
        const form_product = this.state.form_product;
        form_product [event.target.name] = event.target.value;
        this.setState({
            form_product: form_product
        })
    }
     async formSubmit(e){
        e.preventDefault()
        try{
            const form_product = this.state.form_product;
            // luu vao firestore
            const conn = Fb.collection("products");
            await conn.add(form_product);  
            this.refresh();  
        }catch(err){

        }
        return false;
    }
    updateproduct(){
        try{
            const id = "8YYjDTzEo8ep1Uxwp5B5";
            const conn = Fb.collection("products").doc(id);
            conn.update({
                name:"Cosmograph Daytona Steel",
                price: 92750,
                qty: 1,
                thumbnail:"https://24kara.com/files/sanpham/12765/1/jpg/dong-ho-rolex-cosmograph-daytona-116500ln-0001-oystersteel.jpg"
            });
            //conn.delete();
        }catch(err){

        }
    }

    render() {
        const products = this.state.products;
        return (
            <div>
                <div className="slider-area ">
                    <div className="single-slider slider-height2 d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap text-center">
                                        <h2>AddtoItem</h2>
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

                                        <tr onSubmit={this.formSubmit}>
                                            <td>
                                                <div className="media" >
                                                    <div className="d-flex">
                                                        <img src="assets/img/gallery/card1.png" alt="" onChange={this.handleInput} />
                                                        <noscript><img src="assets/img/gallery/card1.png" alt="" onChange={this.handleInput} /></noscript>
                                                    </div>
                                                    <div className="media-body">
                                                        <p onChange={this.handleInput}>Minimalistic shop for multipurpose use</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>$360.00</h5>
                                            </td>
                                            <td>
                                                <div className="product_count">
                                                    <span className="input-number-decrement" onChange={this.handleInput}> <i className="ti-minus"></i></span>
                                                    <input className="input-number" type="text" value="1" min="0" max="10" onChange={this.handleInput} />
                                                    <span className="input-number-increment" onChange={this.handleInput}> <i className="ti-plus"></i></span>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>$360.00</h5>
                                            </td>
                                        </tr>
                                        <tr className="bottom_button float-center">
                                            <td>
                                                <button type="submit" className="btn_1">Update Item</button>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>             
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default AddItem;