import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Header() {

  const location = useLocation();
  const currentRoute=location.pathname;

  return (
    <div className='header'>
        <div className="container nav-menu">
          <div className="brand">
            <Link to={'/'}>
              <h2 className='brand-logo'>Movway</h2>
            </Link>
          </div>
          <ul className="nav-links">
            <li className={`nav-link${currentRoute==='/' ? ' active' :''}`}>
              <Link to="/">Ana Səhifə</Link>
            </li>
            <li className={`nav-link${currentRoute==='/movies' ? ' active' :''}`}>
              <Link to="/movies">Kategoriyalar</Link>
            </li>
            <li className={`nav-link${currentRoute==='/contact' ? ' active' :''}`}>
              <Link to="/contact">Əlaqə</Link>
            </li>
          </ul>
        </div>
      </div>
  )
}
