import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import '../style.css'; // Correctly import styles
import { assets } from '../assets/assets';
const Header = () => {
  return (
    <header className="header_area header_padding">
 
   
   
    <div className="header_middle middle_two">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-3 col-sm-2">
            <div className="logo">
              <a href="/">
                <img src= {assets.logo} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-2">
            <div className="middel_right">
              <div className="search-container search_two">
                <form action="service" method="GET">
                  <div className="search_box">
                    <input
                      placeholder="Search entire store here ..."
                      name="search_word"
                      required=""
                    />
                    <button type="submit" name="search">
                      <i className="ion-ios-search-strong" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-3">
            <div className="middel_right">
              <div className="middel_right_info">
                <div className="header_wishlist">
                  <a href="register">
                    <span className="lnr lnr-users" />
                    <div className="signup">CUSTOMER SIGN UP</div>
                  </a>{" "}
                </div>
                <div className="header_wishlist">
                  <a href="login">
                    <span className="lnr lnr-user" />
                    <div className="login">CUSTOMER LOGIN</div>
                  </a>{" "}
                </div>
                <div className="header_wishlist res-p">
                  <a href=""></a>
                  <div className="addcart">
                    <a href="" />
                    <a href="javascript:void(0);">
                      <span className="lnr lnr-cart f-size" />
                      My Cart
                    </a>
                    <span className="cart_quantity rtx">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* add to cart start */}
    <div className="mini_cart cart-view">
      <div className="cart_close">
        <div className="cart_text">
          <h3>cart</h3>
        </div>
        <div className="mini_cart_close">
          <a href="javascript:void(0)">
            <i className="ion-android-close" />
          </a>
        </div>
      </div>
      <div id="total_cartdetails" />
      <div id="empty" />
    </div>
    {/* add to cart End */}
    {/* categories model start */}
    <div className="mini_cart categories-view">
      <div className="cart_close">
        <div className="cart_text">
          <h3>Air Condition</h3>
        </div>
        <div className="mini_cart_close">
          <a href="javascript:void(0)">
            <i className="ion-android-close" />
          </a>
        </div>
      </div>
      <div className="cart_item">
        <ul className="sub_menu_two pages bdr">
          <li>
            <button className="b_e271 khpMYLy3 b_s271 ">
              <div className="YpbxLf7i">
                <div className="EQxRuUQL ZHHD_b9K">
                  <img
                    className="ZHHD_b9K"
                    src="assets/images/products/Air-conditioning-units.jpg"
                    data-src=""
                    alt=""
                    itemScope=""
                    itemProp="image"
                    loading="lazy"
                  />
                </div>
                <span className="NACoqfGw">
                  AC Service and Repair
                  <span className="FXCfdqs_ QGXIbnE7">
                    <i className="fa fa-angle-right" />
                  </span>
                </span>
              </div>
            </button>
          </li>
          <li>
            <button className="b_e271 khpMYLy3 b_s271 ">
              <div className="YpbxLf7i">
                <div className="EQxRuUQL ZHHD_b9K">
                  <img
                    className="ZHHD_b9K"
                    src="assets/images/products/micro-oven.jpg"
                    data-src=""
                    alt=""
                    itemScope=""
                    itemProp="image"
                    loading="lazy"
                  />
                </div>
                <span className="NACoqfGw">
                  Microwave Repair
                  <span className="FXCfdqs_ QGXIbnE7">
                    <i className="fa fa-angle-right" />
                  </span>
                </span>
              </div>
            </button>
          </li>
          <li>
            <button className="b_e271 khpMYLy3 b_s271 ">
              <div className="YpbxLf7i">
                <div className="EQxRuUQL ZHHD_b9K">
                  <img
                    className="ZHHD_b9K"
                    src="assets/images/products/black bar.jpg"
                    data-src=""
                    alt=""
                    itemScope=""
                    itemProp="image"
                    loading="lazy"
                  />
                </div>
                <span className="NACoqfGw">
                  Refrigerator Repair
                  <span className="FXCfdqs_ QGXIbnE7">
                    <i className="fa fa-angle-right" />
                  </span>
                </span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
    {/* categories model Ends */}
    <div className="mini_cart edit-view">
      <div className="cart_close">
        <div className="cart_text">
          <h3>Account details</h3>
        </div>
        <div className="mini_cart_close">
          <a href="javascript:void(0)">
            <i className="ion-android-close" />
          </a>
        </div>
      </div>
      <div className="cart_item border-none">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="contact_message form">
              <form method="POST" action="">
                <div className="row">
                  <div className="input-radio">
                    <span className="custom-radio">
                      <input type="radio" defaultValue={1} name="id_gender" />
                      Mr.
                    </span>
                    <span className="custom-radio">
                      <input type="radio" defaultValue={1} name="id_gender" />
                      Mrs.
                    </span>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="fild">
                      <label> Name (required)</label>
                      <input name="name" placeholder="Name *" type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="fild">
                      <label> Email (required)</label>
                      <input name="" placeholder="Email *" type="mail" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="fild">
                      <label>Phone Number (required)</label>
                      <input name="" placeholder="Phone *" type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="fild">
                      <label>Address (required)</label>
                      <input name="" placeholder="Address *" type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="fild">
                      <label>Pincode (required)</label>
                      <input name="" placeholder="Pincode *" type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="fild">
                      <label>State (required)</label>
                      <input name="" placeholder="State *" type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="fild">
                      <label>Country (required)</label>
                      <input name="" placeholder="Country *" type="text" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="fild">
                      <button className="save" href="javascript:void(0);">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header_bottom bottom_two sticky-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="header_bottom_container">
              <div className="main_menu">
                <nav>
                  <ul>
                    <li>
                      <a href="index">Home</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Products</a>
                      <ul className="sub_menu pages">
                        <div className="categories_menu">
                          <div className="categories_menu_toggle">
                            <ul>
                              <li className="menu_item_children">
                                <a href="#">
                                  {" "}
                                  Domestic Appliances{" "}
                                  <i className="fa fa-angle-right" />
                                </a>
                                <ul className="categories_mega_menu">
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="productlist/10">
                                        <ul>
                                          <img
                                            src="admin/category_image/51vT0OWjErL._AC_UF894,1000_QL80_ (1) (2)_17040291 (1)_1704113998.jpg"
                                            alt=""
                                            className="img-siz"
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="productlist/10">Geyser </a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="productlist/11">
                                        <ul>
                                          <img
                                            src="admin/category_image/Eurekaforbes_UV_Screenshot 2023-11-15 181948_1700053385.png"
                                            alt=""
                                            className="img-siz"
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="productlist/11">Water Purifier</a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="productlist/12">
                                        <ul>
                                          <img
                                            src="admin/category_image/Screenshot 2023-11-14 2212251699980383.png"
                                            alt=""
                                            className="img-siz"
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="productlist/12">Microwave</a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="productlist/2">
                                        <ul>
                                          <img
                                            src="admin/category_image/Diet_Screenshot 2023-11-14 160107 (1)_1704027061.png"
                                            alt=""
                                            className="img-siz"
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="productlist/2">Air Coolers</a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="productlist/3">
                                        <ul>
                                          <img
                                            src="admin/category_image/split ac set-air-conditioner-ac-inverter-260nw_1704115140.jpg"
                                            alt=""
                                            className="img-siz"
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="productlist/3">Split AC</a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="productlist/8">
                                        <ul>
                                          <img
                                            src="admin/category_image/ea6x0i1m (4)_1704114206.png"
                                            alt=""
                                            className="img-siz"
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="productlist/8">Refrigerator </a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="productlist/9">
                                        <ul>
                                          <img
                                            src="admin/category_image/Screenshot 2023-12-31 184736_1704028960.png"
                                            alt=""
                                            className="img-siz"
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="productlist/9">Window AC</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu_item_children">
                                <a href="#">
                                  {" "}
                                  Retail Appliance{" "}
                                  <i className="fa fa-angle-right" />
                                </a>
                                <ul className="categories_mega_menu">
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="productlist/18">
                                        <ul>
                                          <img
                                            src="admin/category_image/bk4bucbo (1) (2) (1)_1704109518.png"
                                            alt=""
                                            className="img-siz"
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="productlist/18">Visi Cooler</a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="productlist/27">
                                        <ul>
                                          <img
                                            src="admin/category_image/Voltas Warer Dispence  (1) (1) (1)_1704109932.jpg"
                                            alt=""
                                            className="img-siz"
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="productlist/27">Water Dispenser </a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="productlist/48">
                                        <ul>
                                          <img
                                            src="admin/category_image/daikin-fcvf-series-1-5-tonnage-2-star (1) (2) (1)_1704110281.png"
                                            alt=""
                                            className="img-siz"
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="productlist/48">CASSETTE AC</a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="productlist/5">
                                        <ul>
                                          <img
                                            src="admin/category_image/AGCCP Eurekaforbes_Screenshot 2023-12-30 011613 (1) (2)_1703879881.jpg"
                                            alt=""
                                            className="img-siz"
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="productlist/5">
                                      Water Cooler Cum Purifier
                                    </a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="productlist/6">
                                        <ul>
                                          <img
                                            src="admin/category_image/Untitled_1699727035 (1) (1) (1) (1)_1704110441.png"
                                            alt=""
                                            className="img-siz"
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="productlist/6">Deep Freezer</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu_item_children">
                                <a href="#">
                                  {" "}
                                  Kitchen Appliance{" "}
                                  <i className="fa fa-angle-right" />
                                </a>
                                <ul className="categories_mega_menu">
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="productlist/4">
                                        <ul>
                                          <img
                                            src="admin/category_image/water-cooler1686035323_1703878994.png"
                                            alt=""
                                            className="img-siz"
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="productlist/4">Water Cooler</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Services</a>
                      <ul className="sub_menu pages">
                        <div className="categories_menu">
                          <div className="categories_menu_toggle">
                            <ul>
                              <li className="menu_item_children">
                                <a href="#">
                                  {" "}
                                  Domestic Appliance{" "}
                                  <i className="fa fa-angle-right" />
                                </a>
                                <ul className="categories_mega_menu">
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="servicelist/9">
                                        <ul>
                                          <img
                                            className="img-siz"
                                            src="admin/machinery_image/WINDOW AC SERVICE_2023-12_1705521289.jpg"
                                            alt=""
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="servicelist/9">WINDOW AC</a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="servicelist/10">
                                        <ul>
                                          <img
                                            className="img-siz"
                                            src="admin/machinery_image/split ac set-air-conditioner-ac-inverter (1) (1)_1705521816.jpg"
                                            alt=""
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="servicelist/10">SPLIT AC</a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="servicelist/11">
                                        <ul>
                                          <img
                                            className="img-siz"
                                            src="admin/machinery_image/REFRIGERATOR 2023-11-14 (5) (1) (1)_1705523020.png"
                                            alt=""
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="servicelist/11">REFRIGERATOR</a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="servicelist/12">
                                        <ul>
                                          <img
                                            className="img-siz"
                                            src="admin/machinery_image/Diet_Screenshot 2023-11-14_1705522522.png"
                                            alt=""
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="servicelist/12">AIR COOLER</a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="servicelist/13">
                                        <ul>
                                          <img
                                            className="img-siz"
                                            src="admin/machinery_image/GEYSER (2)_1705522838.jpg"
                                            alt=""
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="servicelist/13">GEYSER</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu_item_children">
                                <a href="#">
                                  {" "}
                                  Retail Appliance{" "}
                                  <i className="fa fa-angle-right" />
                                </a>
                                <ul className="categories_mega_menu">
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="servicelist/16">
                                        <ul>
                                          <img
                                            className="img-siz"
                                            src="admin/machinery_image/DEEP FREEZER PHOTO_24 (1)_1705603537.jpg"
                                            alt=""
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="servicelist/16">DEEP FREEZER </a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="servicelist/17">
                                        <ul>
                                          <img
                                            className="img-siz"
                                            src="admin/machinery_image/WRL VISI COOLER_SRC752-GL (1) (1)_1705604322.png"
                                            alt=""
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="servicelist/17">VISI COOLER</a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="servicelist/18">
                                        <ul>
                                          <img
                                            className="img-siz"
                                            src="admin/machinery_image/cassette-air-conditioner-CHANGED-2 (1) (2) (1)_1705618560.png"
                                            alt=""
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="servicelist/18">CASSETTE AC</a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="servicelist/19">
                                        <ul>
                                          <img
                                            className="img-siz"
                                            src="admin/machinery_image/AGCCP Eurekaforbes_ 2023-12-30 011613 (1)_1705605960.jpg"
                                            alt=""
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="servicelist/19">
                                      WATER COOLER CUM PURIFIER
                                    </a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="servicelist/21">
                                        <ul>
                                          <img
                                            className="img-siz"
                                            src="admin/machinery_image/Voltas Warer Dispence  (1) (1) (1)_1705606816.jpg"
                                            alt=""
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="servicelist/21">WATER DISPENSER</a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="servicelist/23">
                                        <ul>
                                          <img
                                            className="img-siz"
                                            src="admin/machinery_image/Display Counter (1)_1705610013.png"
                                            alt=""
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="servicelist/23">DISPLAY COUNTER</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu_item_children">
                                <a href="#">
                                  {" "}
                                  Kitchen Appliance{" "}
                                  <i className="fa fa-angle-right" />
                                </a>
                                <ul className="categories_mega_menu">
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="servicelist/24">
                                        <ul>
                                          <img
                                            className="img-siz"
                                            src="admin/machinery_image/water-cooler-cum-purifier-service 80SS-png (1) (1)_1705610769.png"
                                            alt=""
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="servicelist/24">WATER COOLER</a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="servicelist/25">
                                        <ul>
                                          <img
                                            className="img-siz"
                                            src="admin/machinery_image/Upright Chiller_HRW-77MS4_LS4(2) (1) (3) (1)_1705608774_1705611783.png"
                                            alt=""
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="servicelist/25">UPRIGHT CHILLER</a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="servicelist/26">
                                        <ul>
                                          <img
                                            className="img-siz"
                                            src="admin/machinery_image/under-counter-refrigerator-500x500 (1)_1705612976.png"
                                            alt=""
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="servicelist/26">UNDER COUNTER</a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="servicelist/27">
                                        <ul>
                                          <img
                                            className="img-siz"
                                            src="admin/machinery_image/RBW-135-Back-Bar (1)_1705615006.png"
                                            alt=""
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="servicelist/27">BACK BAR CHILLER</a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="servicelist/28">
                                        <ul>
                                          <img
                                            className="img-siz"
                                            src="admin/machinery_image/RTSW137MS4-GNTE (1)_1705616053.png"
                                            alt=""
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="servicelist/28">
                                      FOOD PRTN. CHILLER
                                    </a>
                                  </li>
                                  <li className="menu_item_children">
                                    <div className="categorie_sub_menu">
                                      <a href="servicelist/29">
                                        <ul>
                                          <img
                                            className="img-siz"
                                            src="admin/machinery_image/scotsman-ice-machine-500x500_1705618626.png"
                                            alt=""
                                          />
                                        </ul>
                                      </a>
                                    </div>
                                    <a href="servicelist/29">ICE CUBE</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li>
                      <a href="about.php">About Us</a>
                    </li>
                    <li>
                      <a href="contact-us.php">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <div className="addcart">
                        <a href="javascript:void(0);">
                          <span className="lnr lnr-cart f-size" />
                          My Cart
                        </a>{" "}
                        <span className="cart_quantity" id="cart_count">
                          0
                        </span>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  
  );
};

export default Header;
