import React from 'react'
import logo from "../images/logo.webp"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <div className='menu'>
            <ul>
                <li>Shop</li>
                <li>Consultation</li>
                <li>Resources</li>
                <li>Membership</li>
                <li>About</li>
            </ul>
        </div>
        <div className='nav'>
            <div>
                <SearchIcon />
            </div>
            <div>
                <PersonIcon />
            </div>
            <div>
                <ShoppingCartIcon />
                <sup>0</sup>
            </div>
        </div>
    </div>
  )
}

export default Header