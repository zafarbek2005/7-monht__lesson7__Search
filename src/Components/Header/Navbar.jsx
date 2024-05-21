import { BiMenuAltRight } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import React, { useState } from 'react';
import './Navbar.scss';
import { NavLink } from "react-router-dom";
import { useGetSearchProductsQuery } from "../context/Product/Product";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [value,setvalue] = useState("")
    let {data} = useGetSearchProductsQuery({q:value})
    let searchItems = data?.products?.map(el => (
        <div key={el.id}>
            <img src= {el.images[0]} width={50} alt="" />
            <span>{el.title}</span>
        </div>
    ))

    return (
        <>
            <header>
                <div className="navbar container">
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>
                    
                    <div className="nav__search">
                        <input 
                            value={value}
                            onChange={(e) => setvalue(e.target.value)}
                            type="text"
                            onFocus={() => setShowSearch(true)}
                            onBlur={() => setShowSearch(false)}
                        />
                        <button><BiSearch /></button>
                        {showSearch && <div className="nav__modal">
                            {searchItems}
                          </div>}
                    </div>

                    <div className={`nav__items ${toggle ? 'show' : ''}`}>
                        <NavLink to="/">Home</NavLink>
                        <a href="#">Shop All</a>
                        <NavLink to="/contact">Contact Us</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </div>
                    
                    <button id="menu" onClick={() => setToggle(!toggle)}>
                        <BiMenuAltRight />
                    </button>
                </div>
            </header>
            </>
    );
}

export default Navbar;
