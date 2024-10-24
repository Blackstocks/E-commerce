import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products])

  return (
    <section className="shipping_area mb-40">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="shipping_inner">
            <div className="single_shipping">
              <div className="shipping_icone">
                <img src="assets/images/icons/shipping.svg" alt="" />
              </div>
              <div className="shipping_content">
                <h2>Free Shipping</h2>
                <p>Free Shipping Under 50 km</p>
              </div>
            </div>
            <div className="single_shipping">
              <div className="shipping_icone">
                <img src="assets/images/icons/supports.svg" alt="" />
              </div>
              <div className="shipping_content">
                <h2>Customers Support</h2>
                <p>
                  Contact Us From -{" "}
                  <span className="span-text">09:30AM To 07:30PM</span>
                </p>
              </div>
            </div>
            <div className="single_shipping">
              <div className="shipping_icone">
                <img src="assets/images/icons/return.svg" alt="" />
              </div>
              <div className="shipping_content">
                <h2>Easy Return or Exchange</h2>
                <p>You have 10 days to Return</p>
              </div>
            </div>
            <div className="single_shipping">
              <div className="shipping_icone">
                <img src="assets/images/icons/secure-payment.svg" alt="" />
              </div>
              <div className="shipping_content">
                <h2>Payment Secure</h2>
                <p>We ensure secure payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default LatestCollection
