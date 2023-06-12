import React from 'react'

function Header() {
    return (
        <div className='navbar'>
            <div className="logo">My Logo</div>
            <div className="searchBar">
                <input type="search" className="search" placeholder='search...'/>
            </div>
            <div className="menuList">
                <ul className="list">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Header