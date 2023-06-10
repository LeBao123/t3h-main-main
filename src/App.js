import './App.css';
import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import AddItem from './component/pages/AddItem';

import { UserProvider } from "./component/context/UserContext";
import store from "./component/context/store";
// import Db from "../Db";
import { UserContext } from "./component/context/UserContext";
import Header from './component/Header';
import Footer from './component/Footer';
import Login from './component/pages/Login';
import Home from './component/Home';
import Shop from './component/Shop';
import Contact from './component/Contact';
import About from './component/About';
import Cart from './component/pages/Cart';
import Product_details from './component/latest/Product_details';
import Blog from './component/blog/Blog';
import Blog_details from './component/blog/Blog_details';
import Elements from './component/pages/Elements';
import Confirmation from './component/pages/Confirmation';
import CheckOut from './component/pages/CheckOut';
import { useReducer } from 'react';
import reducer from "./component/context/reducer";
import Favourite from "./component/pages/Favourite";

function App() {
    const localState = localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):store;
    const [state, dispatch] = useReducer(reducer,localState);
    const display = state.isLoading?"block":"none";
  return (
    <UserProvider value={{state,dispatch}}>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/shop" element= {<Shop />} />
          <Route path="/about" element= {<About />} />
          {/* Latest */}
          <Route path="/product_details" element= {<Product_details />} />
          <Route path="/about" element= {<About />} />
          {/* Blog */}
          <Route path="/blog" element= {<Blog />} />
          <Route path="/blog-details" element= {<Blog_details />} />
          {/* Pages */}
          <Route path="/login" element= {<Login />} />
          <Route path="/cart" element= {<Cart />} />
          <Route path="/additem" element= {<AddItem />} />
          <Route path="/elements" element= {<Elements />} />
          <Route path="/confirmation" element= {<Confirmation />} />
          <Route path="/checkout" element= {<CheckOut />} />
          <Route path="/contact" element= {<Contact />} />
          <Route path="/favourite" element= {<Favourite />} />
        </Routes>
        <Footer/>
      </div>
    </UserProvider>
      
  );
}

export default App;
