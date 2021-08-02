import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

export const Header = () => {
    return (
      <div>
        <div className="container">
                <Link to='/' className=
        'logo'>Pizzology</Link>
          <div className="wrapper">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </div>
      </div>
    );
}
