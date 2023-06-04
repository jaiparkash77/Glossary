import React, { useState } from 'react'
import logo from "../images/logo.webp"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = ({myQuery}) => {
    const [searchText, setSearchText] = useState("");
    const handleChange=(e)=>{
        setSearchText(e.target.value);
    }
    const handleSearch=()=>{
        myQuery(searchText);
    }
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
                <input type='text' style={{height:30, width:250}} onChange={handleChange}></input>
                <SearchIcon style={{fontSize:30}} onClick={handleSearch} />
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