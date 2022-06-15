import React from 'react';
import "../Styles/Header.css"
import { Link } from "react-router-dom";

function Header() {
  return (
      <div className='header'>
    <header>
        <h1 className='title'>Board Games Entertainment</h1></header>

    <div className='header__nav'>
        <Link to="/login">
            <div className="header__option" >
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
            </div>
        </Link>


    </div>
        </div>



        


)
}

export default Header;