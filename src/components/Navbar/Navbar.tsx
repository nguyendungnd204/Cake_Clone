import React, { useState } from 'react';
import './index.css';
import { ChevronDown, CircleX, EllipsisVertical, Search } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div id="navbar">
      {/* Search overlay */}
      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}></div>
      )}

      {/* Search input */}
      <div className={`search-box ${searchOpen ? 'active' : ''}`}>
        <div className="search-input">
          <Search size={30} />
          <input type="text" placeholder="Nhập từ khoá..." />
        </div>
      </div>

      <header>
        <div className="header-left">
          <a href="#">
            <img
              src="https://cake.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCake-logo-01.e915daf7.webp&w=256&q=75"
              alt="Logo"
            />
          </a>
        </div>

        <nav className={`header-center ${menuOpen ? 'show' : ''}`}>
          <li className="hide-desktop close">
            <a href="#">
            <img
              src="https://cake.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCake-logo-01.e915daf7.webp&w=256&q=75"
              alt="Logo"
            />
          </a>
            <a href="#" className="menu-close" onClick={() => setMenuOpen(false)}>
              <CircleX color='black' />
            </a>
          </li>
          <ul className='nav-link'>
            <li className='link'><a href="#">Sản phẩm </a><ChevronDown size={20} /></li>
            <li className='link about-cake'><a href="#">Về Cake</a></li >
            <li className='link'><a href="#">Hỗ trợ </a><ChevronDown size={20} /></li >
            <li className='link'><a href="#">Tin mới </a><ChevronDown size={20} /></li>
            <li className="hide-desktop lang-download">
              <div className="lang-switch">
                <div><img src="https://flagcdn.com/w40/vn.png" alt="VN" width="20" />VI</div>
                <ChevronDown/>
              </div>
              <button className="download-btn">Tải ứng dụng</button>
            </li>
          </ul>
        </nav>

        <div className="header-right">
          <button className="icon-btn" onClick={() => setSearchOpen(true)}>
            <Search size={18} />
          </button>
          <div className="lang-switch hide-mobile">
            <img src="https://flagcdn.com/w40/vn.png" alt="VN" width="20" />
            VI 
            <ChevronDown/>
          </div>
          <button className="download-btn hide-mobile">Tải ứng dụng</button>
          <a href="#" className="menu-open hide-desktop" onClick={() => setMenuOpen(true)}>
            <EllipsisVertical color="black" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
