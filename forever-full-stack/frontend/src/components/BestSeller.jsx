import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import '../style.css'; 
const BestSeller = () => {

    

  return (<>
   <section className="product_area mb-50">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="section_title">
          <h2>
            <span>Products For Sale</span>
          </h2>
        </div>
        <div className="product_carousel product_column5 owl-carousel">
          <div className="single_product">
            <div className="product_thumb">
              <a className="primary_img" href="productdetails/ef-105">
                <img
                  src="admin/product_image/1_png_1701090407.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">2% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Elanpro</p>
                <h3>
                  <a href="productdetails/ef-105">EF 105 Hard Top</a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    17640
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    18000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a className="primary_img" href="productdetails/ef205">
                <img
                  src="admin/product_image/1_png_1701091318.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">2% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Elanpro</p>
                <h3>
                  <a href="productdetails/ef205">EF 205 / EF 235</a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    21560
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    22000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a className="primary_img" href="productdetails/efg-205">
                <img
                  src="admin/product_image/vi1aaokv (1)_1704030669.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">1% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Elanpro</p>
                <h3>
                  <a href="productdetails/efg-205">EKG 205/335/435</a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    9900
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    10000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/vitamagic-pro-192l-3-star-single-door"
              >
                <img
                  src="admin/product_image/Screenshot 2023-11-14 131249_1704026429.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">29% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Whirlpool </p>
                <h3>
                  <a href="productdetails/vitamagic-pro-192l-3-star-single-door">
                    Vitamagic Pro 192L 3 Star Single Door
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    18815
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    26500
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/1-5-ton-window-ac"
              >
                <img
                  src="admin/product_image/1-5-ton-window-ac-frwf50-large-95457-165518-1593698011-1_1704026572.jpg"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">1% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Daikin </p>
                <h3>
                  <a href="productdetails/1-5-ton-window-ac">
                    Daikin 1.5 Ton 3 Star Dust Filter Window AC (Copper, 2020
                    FRWL50TV162)
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    32472
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    32800
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/window-1-5-ac-5-star"
              >
                <img
                  src="admin/product_image/61Kn2QYI1aL._SX679__1701104679.jpg"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">5% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Daikin </p>
                <h3>
                  <a href="productdetails/window-1-5-ac-5-star">
                    Daikin Window AC 5-Star 1.5 ton FRWF50 Series.
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    43700
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    46000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/symphony-air-cooler-diet-12t-12-liter-white"
              >
                <img
                  src="admin/product_image/Diet_Screenshot 2023-11-14 160107_1704026688.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">2% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Symphony Cooler</p>
                <h3>
                  <a href="productdetails/symphony-air-cooler-diet-12t-12-liter-white">
                    Symphony 12 L Room/Personal Air Cooler (White, Diet 12T)
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    7840
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    8000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a className="primary_img" href="productdetails/omnis-rs">
                <img
                  src="admin/product_image/download (1)_1699974570.jpeg"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">2% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Racold</p>
                <h3>
                  <a href="productdetails/omnis-rs">Omnis RS</a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    16659
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    16999
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/electric-instant-geyser"
              >
                <img
                  src="admin/product_image/Geyser _RAcold_ALTRO-i_I+_1699972445.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">2% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Racold</p>
                <h3>
                  <a href="productdetails/electric-instant-geyser">ALTRO i +</a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    6810
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    6949
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/omnis-dg-racold-india"
              >
                <img
                  src="admin/product_image/Omni DG Racold_273236_v3m7v8_1699973189.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">4% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Racold</p>
                <h3>
                  <a href="productdetails/omnis-dg-racold-india">OMNIS DG </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    18239
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    18999
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/intellifresh-259l-3-star-frost-free-double-door-refrigerator"
              >
                <img
                  src="admin/product_image/2 Door_1Screenshot 2023-11-14 213556_1699978828.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">20% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Whirlpool </p>
                <h3>
                  <a href="productdetails/intellifresh-259l-3-star-frost-free-double-door-refrigerator">
                    Whirlpool Intellifresh 259L 2 Star Frost Free Double Door
                    Refrigerator
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    30000
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    37500
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/protton-240l-frost-free-three-door-refrigerator"
              >
                <img
                  src="admin/product_image/1_Screenshot 2023-11-14 215407_1699979838.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">20% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Whirlpool </p>
                <h3>
                  <a href="productdetails/protton-240l-frost-free-three-door-refrigerator">
                    Whirlpool Protton 240L Frost Free Three Door Refrigerator
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    28360
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    35450
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/convection-microwave-ovens"
              >
                <img
                  src="admin/product_image/Screenshot 2023-11-14 221225_1699980733.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">30% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Whirlpool </p>
                <h3>
                  <a href="productdetails/convection-microwave-ovens">
                    Whirlpool 29L Convection Microwave
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    16205
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    23150
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/window-ac-3-star-1-5-ton-3-star-inverter"
              >
                <img
                  src="admin/product_image/Bluie Star Window_1701105917.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">23% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Blue Star</p>
                <h3>
                  <a href="productdetails/window-ac-3-star-1-5-ton-3-star-inverter">
                    Blue Star 1.5 Ton 3 Star Window AC - White (3W18GA, Copper
                    Condenser)
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    30800
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    40000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a className="primary_img" href="productdetails/ef-335">
                <img
                  src="admin/product_image/Screenshot 2023-11-14 224716_1699982538.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">10% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Elanpro</p>
                <h3>
                  <a href="productdetails/ef-335">EF 335</a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    2070
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    2300
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/blue-star-80-ltr-storage-water-cooler-sdlx6080b"
              >
                <img
                  src="admin/product_image/01_Screenshot 2023-11-15 120935_1700037004.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">19% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Blue Star</p>
                <h3>
                  <a href="productdetails/blue-star-80-ltr-storage-water-cooler-sdlx6080b">
                    Blue Star 80 Ltr. Storage Water Cooler
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    38353
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    47350
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/blue-star-40-ltr-plain-cold-taps-storage-water-cooler"
              >
                <img
                  src="admin/product_image/01_Screenshot 2023-11-15 123213_1700032273.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">10% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Blue Star</p>
                <h3>
                  <a href="productdetails/blue-star-40-ltr-plain-cold-taps-storage-water-cooler">
                    Blue Star 40 Ltr Plain &amp; Cold Taps Storage Water Cooler
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    30420
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    33800
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/blue-star-80-ltr-stoarge-water-cooler-inbuilt-uv-and-ro"
              >
                <img
                  src="admin/product_image/vxu4q2m8 (1) (1)_1704545536.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">1% Off</span>
              </div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Blue Star</p>
                <h3>
                  <a href="productdetails/blue-star-80-ltr-stoarge-water-cooler-inbuilt-uv">
                    Blue Star 80 Ltr Stoarge Water Cooler With Inbuilt UV
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    82450
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    85000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/celfrost-storage-water-coolers"
              >
                <img
                  src="admin/product_image/Screenshot 2023-11-15 131857 (1)_1700035293.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">0% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Celfrost </p>
                <h3>
                  <a href="productdetails/celfrost-storage-water-coolers">
                    Celfrost Storage Water Coolers
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    35000
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    35000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/usha-water-cooler-ss-4080"
              >
                <img
                  src="admin/product_image/Usha_Screenshot 2023-11-15 133548_1700056872.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Usha International</p>
                <h3>
                  <a href="productdetails/usha-water-cooler-ss-4080">
                    Usha Water Cooler SS 4080
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    40000
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    40000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/eureka-forbes-40-l-hr-water-purifier-agccp"
              >
                <img
                  src="admin/product_image/uvrlrmbf (1)_1700054484.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">2% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Eureka Forbs</p>
                <h3>
                  <a href="productdetails/eureka-forbes-40-l-hr-water-purifier-agccp">
                    Eureka Forbes 40 L/Hr Water Purifier AGCCP
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    54782
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    55900
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/dr-aquaguard-classic"
              >
                <img
                  src="admin/product_image/dr-aquaguard-classic-water-purifier-front1_1700056146.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">1% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Eureka Forbs</p>
                <h3>
                  <a href="productdetails/dr-aquaguard-classic">
                    Dr. Aquaguard Classic
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    16325
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    16490
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a className="primary_img" href="productdetails/ekg-435-freezer">
                <img
                  src="admin/product_image/elanpro-ekg-405-a-double-door-flat-glass-top-fre (1) (1)_1704111859.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">1% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Elanpro</p>
                <h3>
                  <a href="productdetails/ekg-435-freezer">EKG 435 Freezer </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    29700
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    30000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/ecg-306-visi-cooler"
              >
                <img
                  src="admin/product_image/306L Visi Cooler_1Screenshot 2023-11-15 194907_1700059169_1701092641.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">2% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Elanpro</p>
                <h3>
                  <a href="productdetails/ecg-306-visi-cooler">
                    ECG 306 Visi Cooler
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    38122
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    38900
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/ecg-406-visi-cooler"
              >
                <img
                  src="admin/product_image/306L Visi Cooler_1Screenshot 2023-11-15 194907_1700059169_1701092911.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">1% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Elanpro</p>
                <h3>
                  <a href="productdetails/ecg-406-visi-cooler">
                    ECG 406 Visi Cooler
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    38610
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    39000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/bluestar-192-litres-deep-freezer-white-cf4-225dsw"
              >
                <img
                  src="admin/product_image/192_Fromt_23121310_1700844843.jpg"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">26% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Blue Star</p>
                <h3>
                  <a href="productdetails/bluestar-192-litres-deep-freezer-white-cf4-225dsw">
                    Bluestar 192 Litters Deep Freezer{" "}
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    23199
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    31350
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/bluestar-141-liters-deep-freezer"
              >
                <img
                  src="admin/product_image/141_Side_23121304 (1)_1700848016.jpg"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">25% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Blue Star</p>
                <h3>
                  <a href="productdetails/bluestar-141-liters-deep-freezer">
                    Bluestar 141 Liters Deep Freezer
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    20212
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    26950
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/bluestar-3-star-95-litters-deep-freezer"
              >
                <img
                  src="admin/product_image/456425ef-e08d-48fc-8615-a8619e3ad00823121259_1700849100.jpg"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">24% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Blue Star</p>
                <h3>
                  <a href="productdetails/bluestar-3-star-95-litters-deep-freezer">
                    Bluestar 3 Star 95 Litters Deep Freezer
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    18354
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    24150
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/blue-star-285-ltr-deep-freezer"
              >
                <img
                  src="admin/product_image/c0960625-4ea0-4b72-92b6-f32b7cbe3dd8_1700850381.jpg"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">27% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Blue Star</p>
                <h3>
                  <a href="productdetails/blue-star-285-ltr-deep-freezer">
                    Blue Star 285 Ltr. Deep Freezer
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    29346
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    40200
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/blue-star-192-ltr-deep-freezer"
              >
                <img
                  src="admin/product_image/c0960625-4ea0-4b72-92b6-f32b7cbe3dd8_1700851169.jpg"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">25% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Blue Star</p>
                <h3>
                  <a href="productdetails/blue-star-192-ltr-deep-freezer">
                    Blue Star 192 Ltr Deep Freezer
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    23512
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    31350
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/bluestar-95-ltrs-deep-freezer"
              >
                <img
                  src="admin/product_image/90d6f352-5d75-4f44-a389-18ce8fbe2d0622200641_1700852349.jpg"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">22% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Blue Star</p>
                <h3>
                  <a href="productdetails/bluestar-95-ltrs-deep-freezer">
                    Bluestar 95 Ltrs. Deep Freezer{" "}
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    22308
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    28600
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/bluestar-300-liters-deep-freezer"
              >
                <img
                  src="admin/product_image/eeb49f2a-754d-4e17-b472-9442f393800522051324_1700853362.jpg"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">24% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Blue Star</p>
                <h3>
                  <a href="productdetails/bluestar-300-liters-deep-freezer">
                    Bluestar 300 Liters Deep Freezer
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    28196
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    37100
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/blue-star-401-ltrs-deep-freezer"
              >
                <img
                  src="admin/product_image/Screenshot 2023-11-25 010716_1700854783.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">28% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Blue Star</p>
                <h3>
                  <a href="productdetails/blue-star-401-ltrs-deep-freezer">
                    Blue Star 401 Ltrs. Deep Freezer{" "}
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    29772
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    41350
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/blue-star-484-ltrs-deep-freezer"
              >
                <img
                  src="admin/product_image/400_1_182x182_1700855302.jpg"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">26% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Blue Star</p>
                <h3>
                  <a href="productdetails/blue-star-484-ltrs-deep-freezer">
                    Blue Star 484 Ltrs Deep Freezer{" "}
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    32930
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    44500
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/daikin-1-ton-3-star-inverter-split-ac"
              >
                <img
                  src="admin/product_image/Screenshot 2023-11-26 211728_1701013802.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">0% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Daikin </p>
                <h3>
                  <a href="productdetails/daikin-1-ton-3-star-inverter-split-ac">
                    Daikin 1 Ton 3 Star Inverter Split AC{" "}
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    3700
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    3700
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/daikin-1-ton-5-star-inverter-split-ac"
              >
                <img
                  src="admin/product_image/Screenshot 2023-11-26 211728_1701015266.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">24% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Daikin </p>
                <h3>
                  <a href="productdetails/daikin-1-ton-5-star-inverter-split-ac">
                    Daikin 1 Ton 5 Star Inverter Split AC{" "}
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    41800
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    55000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/daikin-1-ton-3-star-fixed-speed-split-ac"
              >
                <img
                  src="admin/product_image/Re_Screenshot 2023-11-26 220747_1701016816.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">0% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Daikin </p>
                <h3>
                  <a href="productdetails/daikin-1-ton-3-star-fixed-speed-split-ac">
                    Daikin 1 Ton 3 Star Fixed Speed Split AC
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    35700
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    35700
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/daikin-1-ton-5-star-triple-display-dew-clean-technology-inverter-split-ac"
              >
                <img
                  src="admin/product_image/Screenshot 2023-11-26 211728_1701018953.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">1% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Daikin </p>
                <h3>
                  <a href="productdetails/daikin-1-ton-5-star-triple-display-dew-clean-technology-inverter-split-ac">
                    Daikin 1 Ton 5 Star Inverter Split AC{" "}
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    43072
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    43508
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/daikin-1-ton-5-star-inverter-split-ac-2022-model"
              >
                <img
                  src="admin/product_image/Screenshot 2023-11-26 211728_1701018817.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">1% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Daikin </p>
                <h3>
                  <a href="productdetails/daikin-1-ton-5-star-inverter-split-ac-2022-model">
                    Daikin 1 Ton 5 Star Inverter Split AC 2022 Model
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    45539
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    45999
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/daikin-1-5-ton-3-star-inverter-split-ac-2023-model-mtkl50u-white"
              >
                <img
                  src="admin/product_image/Screenshot 2023-11-26 211728_1701083298.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">2% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Daikin </p>
                <h3>
                  <a href="productdetails/daikin-1-5-ton-3-star-inverter-split-ac-2023-model-mtkl50u-white">
                    Daikin 1.5 Ton 3 Star Inverter Split AC{" "}
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    39680
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    40490
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/daikin-1-5-ton-5-star-inverter-split-ac-2022-model"
              >
                <img
                  src="admin/product_image/Screenshot 2023-11-26 211728_1701083964.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">3% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Daikin </p>
                <h3>
                  <a href="productdetails/daikin-1-5-ton-5-star-inverter-split-ac-2022-model">
                    Daikin 1.5 Ton 5 Star Inverter Split AC (2022 Model)
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    48975
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    50490
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/daikin-1-5-ton-3-star-inverter-split-ac-copper"
              >
                <img
                  src="admin/product_image/Screenshot 2023-11-26 211728_1701084562.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">2% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Daikin </p>
                <h3>
                  <a href="productdetails/daikin-1-5-ton-3-star-inverter-split-ac-copper">
                    Daikin 1.5 Ton 3 Star Inverter Split AC (Copper)
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    41160
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    42000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/daikin-1-5-ton-3-star-fixed-speed-split-ac-copper"
              >
                <img
                  src="admin/product_image/Re_Screenshot 2023-11-26 220747_1701085832.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">2% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Daikin </p>
                <h3>
                  <a href="productdetails/daikin-1-5-ton-3-star-fixed-speed-split-ac-copper">
                    Daikin 1.5 Ton 3 Star Fixed Speed Split AC ( Copper )
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    41731
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    42583
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/daikin-1-5-ton-5-star-inverter-split-ac-copper"
              >
                <img
                  src="admin/product_image/Re_Screenshot 2023-11-26 220747_1701086443.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">2% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Daikin </p>
                <h3>
                  <a href="productdetails/daikin-1-5-ton-5-star-inverter-split-ac-copper">
                    Daikin 1.5 Ton 5 Star Inverter Split AC ( Copper )
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    48019
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    48999
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/daikin-1-5-ton-5-star-inverter-split-ac"
              >
                <img
                  src="admin/product_image/Screenshot 2023-11-26 211728_1701087336.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">2% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Daikin </p>
                <h3>
                  <a href="productdetails/daikin-1-5-ton-5-star-inverter-split-ac">
                    Daikin 1.5 Ton 5 Star Inverter Split AC{" "}
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    47912
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    48890
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/daikin-1-5-ton-5-star-inverter-split-ac-pm-2-5-filter-2022"
              >
                <img
                  src="admin/product_image/Re_Screenshot 2023-11-26 220747_1701088290.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">3% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Daikin </p>
                <h3>
                  <a href="productdetails/daikin-1-5-ton-5-star-inverter-split-ac-pm-2-5-filter-2022">
                    Daikin 1.5 Ton 5 Star Inverter Split AC (PM 2.5 Filter,
                    2022)
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    61449
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    63350
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/lloyd-1-5-ton-3-star-window-ac-white-glw18c3ywsew-copper-condenser"
              >
                <img
                  src="admin/product_image/s08x8v2k (1)_1701110241.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">2% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Lloyd Havells</p>
                <h3>
                  <a href="productdetails/lloyd-1-5-ton-3-star-window-ac-white-glw18c3ywsew-copper-condenser">
                    Lloyd 1.5 Ton 3 Star Window AC - White (GLW18C3YWSEW, Copper
                    Condenser)
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    30282
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    30900
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/lloyd-window-ac-1-5-ton-5-star-white-glw18c5xwgmr"
              >
                <img
                  src="admin/product_image/s08x8v2k (2)_1701110962.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">26% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Lloyd Havells</p>
                <h3>
                  <a href="productdetails/lloyd-window-ac-1-5-ton-5-star-white-glw18c5xwgmr">
                    Lloyd Window AC 1.5 Ton 5 Star - White (GLW18C5XWGMR)
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    40699
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    54999
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/lloyd-window-inverter-ac-1-5-ton-3-star-white-glw18i3fwcev"
              >
                <img
                  src="admin/product_image/a3ybyd0a_1701112901.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">40% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Lloyd Havells</p>
                <h3>
                  <a href="productdetails/lloyd-window-inverter-ac-1-5-ton-3-star-white-glw18i3fwcev">
                    Lloyd Window Inverter AC 1.5 Ton 3 Star - White
                    (GLW18I3FWCEV)
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    31794
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    52990
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/symphony-20-l-tower-air-cooler-white-diet-3d-20i"
              >
                <img
                  src="admin/product_image/boya69nd (1)_1701115886.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">5% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Symphony Cooler</p>
                <h3>
                  <a href="productdetails/symphony-20-l-tower-air-cooler-white-diet-3d-20i">
                    Symphony 20 L Tower Air Cooler (White, Diet 3D-20i)
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    9499
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    9999
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/symphony-40-l-tower-air-cooler-black-diet-3d-40i"
              >
                <img
                  src="admin/product_image/por89emi (1)_1701117239.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">5% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Symphony Cooler</p>
                <h3>
                  <a href="productdetails/symphony-40-l-tower-air-cooler-black-diet-3d-40i">
                    Symphony 40 L Tower Air Cooler (Black, Diet 3D - 40i)
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    11874
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    12499
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/symphony-70-l-desert-air-cooler-white-siesta-xl"
              >
                <img
                  src="admin/product_image/fjk1v1ri (1)_1701118236.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">3% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Symphony Cooler</p>
                <h3>
                  <a href="productdetails/symphony-70-l-desert-air-cooler-white-siesta-xl">
                    Symphony 70 L Desert Air Cooler (White, Siesta XL)
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    12610
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    13000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/diet-22t-personal-air-cooler"
              >
                <img
                  src="admin/product_image/ia8zv6r1 (1)_1701119359.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">0% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Symphony Cooler</p>
                <h3>
                  <a href="productdetails/diet-22t-personal-air-cooler">
                    Diet 22T Personal Air Cooler
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    10000
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    10000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/symphony-35-l-room-air-cooler-white-diet-35t"
              >
                <img
                  src="admin/product_image/temo3wwo (1)_1701199657.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">5% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Symphony Cooler</p>
                <h3>
                  <a href="productdetails/symphony-35-l-room-air-cooler-white-diet-35t">
                    Symphony 35 L Room Air Cooler (White, DIET 35T)
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    11399
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    11999
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/symphony-55-l-tower-air-cooler-white-diet-3d-55b"
              >
                <img
                  src="admin/product_image/zy6egiaa (1) (1)_1701201967.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">5% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Symphony Cooler</p>
                <h3>
                  <a href="productdetails/symphony-55-l-tower-air-cooler-white-diet-3d-55b">
                    Symphony 55 L Tower Air Cooler (White, DIET 3D 55B)
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    15674
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    16499
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/eureka-forbes-aquaguard-200-water-purifier"
              >
                <img
                  src="admin/product_image/yai6zqz5 (1)_1701203226.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">3% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Eureka Forbs</p>
                <h3>
                  <a href="productdetails/eureka-forbes-aquaguard-200-water-purifier">
                    Eureka Forbes Aquaguard 200 Water Purifier
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    15423
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    15900
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a className="primary_img" href="productdetails/visi-cooler-105l">
                <img
                  src="admin/product_image/ECG-105_ccexpress_1701203938.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">2% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Elanpro</p>
                <h3>
                  <a href="productdetails/visi-cooler-105l">
                    Visi Cooler – 105L
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    22540
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    23000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/daikin-deep-freezer-335-l-white"
              >
                <img
                  src="admin/product_image/1mpjyirg (1)_1701206211.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">26% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Daikin </p>
                <h3>
                  <a href="productdetails/daikin-deep-freezer-335-l-white">
                    DAIKIN Deep Freezer 335 L White
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    27972
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    37800
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/daikin-deep-freezer-446-liters"
              >
                <img
                  src="admin/product_image/1mpjyirg (1)_1701206879.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">30% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Daikin </p>
                <h3>
                  <a href="productdetails/daikin-deep-freezer-446-liters">
                    DAIKIN Deep Freezer 446 liters.
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    30793
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    43990
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/voltas-water-dispenser"
              >
                <img
                  src="admin/product_image/Voltas Water Dispence_001webp (1)_1704656804.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">1% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Voltas</p>
                <h3>
                  <a href="productdetails/voltas-water-dispenser">
                    Voltas Water Dispenser{" "}
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    9900
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    10000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product">
            <div className="product_thumb">
              <a
                className="primary_img"
                href="productdetails/daikin-1-5-ton-inverter-cassette-ac-fcmf50arv16"
              >
                <img
                  src="admin/product_image/daikin-cassette-ac-with-2-ton-500x500 (1) (1)_1704657166.png"
                  alt=""
                  className="slider-img"
                />
              </a>
              <div className="label_product">
                <span className="label_sale">19% Off</span>
              </div>
              <div className="action_links"></div>
            </div>
            <div className="product_content">
              <div className="product_name">
                <p className="manufacture_product">Daikin </p>
                <h3>
                  <a href="productdetails/daikin-1-5-ton-inverter-cassette-ac-fcmf50arv16">
                    Daikin 1.5 Ton Inverter Cassette AC FCMF50ARV16
                  </a>
                </h3>
              </div>
              <div className="product_footer align-items-center">
                <div className="price_box">
                  <span className="regular_price">
                    <i className="flaticon-rupee-1" />
                    80028
                  </span>
                </div>
                <div className="price_box">
                  <span className="old_price">
                    <i className="flaticon-rupee-1" />
                    98800
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  
  </>
  
  )
}

export default BestSeller
