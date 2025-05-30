import React from 'react'
import './index.css'
import { ChevronDown, CircleX, EllipsisVertical, Search } from 'lucide-react'

const Navbar = () => {
  return (
    <header>
      <div className="header-left">
        <a href="">
          <img src="https://cake.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCake-logo-01.e915daf7.webp&w=256&q=75" alt="Logo" />
        </a>
      </div>

      <nav className="header-center">
        <ul>
          <li><a href="">Sản phẩm <ChevronDown size={20}/></a></li>
          <li><a href="">Về Cake <ChevronDown size={20}/></a></li>
          <li><a href="">Hỗ trợ <ChevronDown size={20}/></a></li>
          <li><a href="">Tin mới <ChevronDown size={20}/></a></li>
        </ul>
      </nav>

      <div className="header-right">
        <button className="icon-btn"><Search size={18}/></button>
        <div className="lang-switch">
          <img src="https://flagcdn.com/w40/vn.png" alt="VN" width="20" />
          VI
        </div>
        <button className="download-btn">Tải ứng dụng</button>
      </div>
    </header>
  )
}

export default Navbar
