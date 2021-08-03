import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../images/Pizzology_Final.webp';
import {AiOutlineShoppingCart} from 'react-icons/ai'

export const Header = () => {
    return (
      <div>
        <div className="container">
                <Link to='/' className=
            'logo'>
            <img src={Logo} alt="" />
        </Link>
          <div className="wrapper">
            <Link to="/">Home</Link>
            <Link to="/cart">
              <AiOutlineShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    );
}
