import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    };

    const domesticAppliances = [
        { name: 'Geyser', img: assets.geyser_img },
        { name: 'Water Purifier', img: assets.water_purifier_img },
        { name: 'Microwave', img: assets.microwave_img },
        { name: 'Air Coolers', img: assets.air_coolers_img },
        { name: 'Split AC', img: assets.split_ac_img },
        { name: 'Refrigerator', img: assets.refrigerator_img },
        { name: 'Window AC', img: assets.window_ac_img }
    ];

    const retailAppliances = [
        { name: 'Visi Cooler', img: assets.visi_cooler_img },
        { name: 'Water Dispenser', img: assets.water_dispenser_img },
        { name: 'CASSETTE AC', img: assets.cassette_ac_img },
        { name: 'Water Cooler Cum Purifier', img: assets.water_cooler_purifier_img },
        { name: 'Deep Freezer', img: assets.deep_freezer_img }
    ];

    const kitchenAppliances = [
        { name: 'Water Cooler', img: assets.water_cooler_img }
    ];

    const applianceCategories = {
        'Domestic Appliances': domesticAppliances,
        'Retail Appliances': retailAppliances,
        'Kitchen Appliances': kitchenAppliances
    };

    const handleMouseEnter = (category) => {
        setHoveredCategory(category);
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
        setHoveredCategory(null);
    };

    return (
        <div className='flex items-center justify-between py-5 font-medium relative' style={{ marginTop: '50px' }}>
            <Link to='/'><img src={assets.logo} className='w-36' alt="logo" /></Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                </NavLink>

                {/* Products Dropdown */}
                <div
                    className='relative'
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={handleMouseLeave}
                >
                    <button className='flex flex-col items-center gap-1'>
                        <p>PRODUCTS</p>
                    </button>

                    {/* Dropdown menu for categories */}
                    {dropdownVisible && (
                        <div className='absolute top-full left-0 mt-0 bg-white shadow-lg rounded w-64 z-10'>
                            {Object.keys(applianceCategories).map(category => (
                                <div
                                    key={category}
                                    className='p-2 cursor-pointer hover:bg-gray-100 relative'
                                    onMouseEnter={() => handleMouseEnter(category)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {category}

                                    {/* Submenu for the hovered category */}
                                    {hoveredCategory === category && (
                                        <div className='absolute top-0 left-full ml-0 bg-white shadow-lg p-4 z-10 flex space-x-4'>
                                            {applianceCategories[category].map(appliance => (
                                                <div key={appliance.name} className='flex flex-col items-center'>
                                                    <img src={appliance.img} alt={appliance.name} className='w-20 h-20 object-cover' />
                                                    <p className='mt-2 text-sm text-gray-600'>{appliance.name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={() => { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className='w-5 cursor-pointer' alt="search" />

                <div className='group relative'>
                    <img onClick={() => token ? null : navigate('/login')} className='w-5 cursor-pointer' src={assets.profile_icon} alt="profile" />
                    {token && (
                        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                                <p className='cursor-pointer hover:text-black'>My Profile</p>
                                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                            </div>
                        </div>
                    )}
                </div>

                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="cart" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="menu" />
            </div>

            {/* Sidebar menu for small screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="back" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>PRODUCTS</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
