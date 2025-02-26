// Can optimize by specifying what is imported from 'react'
import React from 'react';
import { NavLink } from "react-router-dom";

import './MMNavbar.css';
import Cookies from "js-cookie"; // Import js-cookie
import LogoMain from "../../assets/images/matamaps-images/logo-design.svg";
import menu from "../Data/menu.json"; // Import single menu.json file

function MMNavbar(props) {
  const [isSidebarMini, setIsSidebarMini] = useState(false);
  const [menuData, setMenuData] = useState(menu?.menu || []); // 1️⃣ Use default menu.json
  const { activekey } = props;
  const { isLoggedIn } = props; 

  // **1️⃣ Check if JWT token and role exist, otherwise load menu.json**
  useEffect(() => {
    try {
      const token = Cookies.get('jwt_token'); // Get JWT token
      const role = Cookies.get('role'); // Get role from cookies
      console.log('JWT Token:', token);
      console.log('User role from cookies:', role);

      if (role === 'club_leader') {
        setMenuData(menu3?.menu3 || []); // If menu3 is not available, default to an empty array
      } else if (role === 'user') {
        setMenuData(menu4?.menu4 || []); // If menu4 is not available, default to an empty array
      } else if (role === 'admin') {
        setMenuData(menu2?.menu2 || []); // If menu2 is not available, default to an empty array
      } else if (isLoggedIn) {
        console.warn('No role found, defaulting to user menu');
        setMenuData(menu4?.menu4 || []); // Default to user menu if no role is found
      } else {
        console.log('No cookies found, using default menu.');
        setMenuData(menu?.menu || []); // Use default menu if no cookies are found
      }
      
    } catch (error) {
      console.error('Error loading menu data:', error);
      setMenuData(menu?.menu || []); // If something goes wrong, ensure menuData is at least an empty array
    }
  }, []);

  // **3️⃣ Handle Logout Function**
  const handleLogout = () => {
    // Remove JWT token and role from cookies
    Cookies.remove('jwt_token'); // Removes JWT token
    Cookies.remove('role'); // Removes user role

    // Redirect to login page
    window.location.href = '/matamaps/login'; // Redirect to login page
  };

  // **4️⃣ Render the sidebar component with dynamic menu**
  return (
    
    <div id="mainSideMenu" className={`sidebar px-4 py-4 py-md-5 me-0 ${isSidebarMini ? "sidebar-mini" : ""}`}>

      <div className="mobile-nav">
				<button
					className="mobile-nav-btn"
					onClick={() => show(!visible)}
				>
					<FaBars size={24}  />
				</button>
			</div>
			<nav className={!visible ? 'navbar' : ''}>
				<button
					type="button"
					className="nav-btn"
					onClick={() => show(!visible)}
				>
					{ !visible
						? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
				</button>

      <div className="d-flex flex-column h-100">
        {/* Logo */}
        <a href="/matamaps" className="mb-0 brand-icon">
          <img src={LogoMain} alt="MataMaps" className="logo-icon" />
        </a>

        {/* Dynamic menu items */}
        <ul className="menu-list flex-grow-1 mt-3">
          {menuData.map((menuItem, index) => (
            <NavLink to="/analytics" className="nav-link">
              <FaChartBar size={ICON_SIZE} />
              <span>Analytics </span>
            </NavLink>
            {/*
            <li 
              key={menuItem.identifier || `${menuItem.routerLink[0]}-${index}`} 
              className="collapsed"
            >
              <Link 
                to={`/${menuItem.routerLink[0]}`} 
                className={`m-link ${menuItem.routerLink[0] === activekey ? "active" : ""}`}
              >
                <i className={menuItem.iconClass}></i>
                <span><b>{menuItem.name}</b></span>
              </Link>
            </li>
            */}
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MMNavbar;