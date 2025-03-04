import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

import './MMNavbar.css';
import LogoMain from "../../assets/images/matamaps-images/logo-design.svg";
import menu from "../Data/menu.json";
import menu2 from "../Data/menu2.json";
import menu3 from "../Data/menu3.json";
import menu4 from "../Data/menu4.json";

import ClockWidget from "../common/MMWidget"; // Import the clock component

function MMNavbar(props) {
  const location = useLocation();
  const [hidden, setHidden] = useState(true);
  const [menuData, setMenuData] = useState(menu?.menu || []);
  const { activekey, isLoggedIn } = props;

  useEffect(() => {
    try {
      const token = Cookies.get('jwt_token');
      const role = Cookies.get('role');
      console.log('JWT Token:', token);
      console.log('User role from cookies:', role);

      if (role === 'club_leader') {
        setMenuData(menu3?.menu3 || []);
      } else if (role === 'user') {
        setMenuData(menu4?.menu4 || []);
      } else if (role === 'admin') {
        setMenuData(menu2?.menu2 || []);
      } else if (isLoggedIn) {
        setMenuData(menu4?.menu4 || []);
      } else {
        setMenuData(menu?.menu || []);
      }
    } catch (error) {
      console.error('Error loading menu data:', error);
      setMenuData(menu?.menu || []);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    Cookies.remove('jwt_token');
    Cookies.remove('role');
    window.location.href = '/matamaps/login';
  };

  return (
    <div className="sidebar-spacing flex-shrink">
      <div className="mobile-nav">
        <button className="mobile-nav-btn" onClick={() => setHidden(!hidden)}>
          <i className="icofont-listine-dots"></i>
        </button>
      </div>
      <nav className={!hidden ? 'hidden' : 'shown'}>
        <button type="button" className="nav-btn" onClick={() => setHidden(!hidden)}>
          {!hidden ? <i className="icofont-double-right"></i> : <i className="icofont-double-left"></i>}
        </button>

        {hidden && (
          <div>
            <a href="/matamaps" className="mb-0 brand-icon">
              <img src={LogoMain} alt="MataMaps" className="logo-icon" />
            </a>

            {/* Add the ClockWidget above the menu list */}
            <div className="clock-container">
              <ClockWidget />
            </div>

            <ul className="menu-list flex-grow-1 mt-3">
              {menuData.map((menuItem, index) => (
                <li key={menuItem.identifier || `${menuItem.routerLink[0]}-${index}`} className="collapsed">
                  <NavLink to={`/${menuItem.routerLink[0]}`} className={`nav-link ${menuItem.routerLink[0] === activekey ? "active" : ""}`}>
                    <i className={menuItem.iconClass}></i>
                    <span><b>{menuItem.name}</b></span>
                  </NavLink>
                </li>
              ))}
            </ul>

            {isLoggedIn && (
              <ul className="list-unstyled mt-3">
                <li className="d-flex align-items-center justify-content-center">
                  <button className="btn btn-danger btn-logout w-100" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}
      </nav>
    </div>
  );
}

export default MMNavbar;
