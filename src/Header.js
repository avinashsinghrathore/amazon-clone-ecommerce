import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider"
import { auth } from './firebase';


function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handelAuthenticaion = () => {
        if (user) {
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <Link to="/">
            <img className='header_logo' src='https://www.freeiconspng.com/thumbs/amazon-icon/amazon-black-icon-16.png'/>
        </Link>
        <div className='header_search'>
            <input className='header_searchInput' type='text' />
            <SearchIcon className='header_searchIcon' />
        </div>

        <div className='header_nav'>
            <Link to={!user && "/Login"}>
                <div onClick={handelAuthenticaion} 
                className='header_option'>
                    <span className='header_optionLineOne'><h3>Hello,{!user ? "Guest" : user.email}</h3></span>
                    <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>    

            <div className='header_option'>
                <span className='header_optionLineOne'>Return</span>
                <span className='header_optionLineTwo'>Orders</span>
            </div>

            <div className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>
            
            <Link to="/Checkout">
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
                </div>
            </Link>
        </div>
    
    </div>
  )
}

export default Header