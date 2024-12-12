import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie
import LogoMain from "../../assets/images/matamaps-images/logo-design.svg";
import menu3 from "../Data/menu3.json";
import menu4 from "../Data/menu4.json";
import menu2 from "../Data/menu2.json"; // Assume you have this file

function Sidebar(props) {
  const [isSidebarMini, setIsSidebarMini] = useState(false);
  const [darkLightMode, setDarkLightMode] = useState("light");
  const [menuData, setMenuData] = useState([]); // 1️⃣ Default state is an empty array
  const { activekey } = props;

  // **1️⃣ Get user role from cookies and load the appropriate menu**
  useEffect(() => {
    try {
      const role = Cookies.get('role') || 'user'; // 2️⃣ Default role is user if no role is found
      console.log('User role from cookies:', role);

      if (role === 'club_leader') {
        setMenuData(menu3?.menu3 || []); // If menu3 is not available, default to an empty array
      } else if (role === 'user') {
        setMenuData(menu4?.menu4 || []); // If menu4 is not available, default to an empty array
      } else if (role === 'admin') {
        setMenuData(menu2?.menu2 || []); // If menu2 is not available, default to an empty array
      } else {
        console.warn('No role found, defaulting to user menu');
        setMenuData(menu4?.menu4 || []); // Default to user menu if no role is found
      }
    } catch (error) {
      console.error('Error loading menu data:', error);
      setMenuData([]); // If something goes wrong, ensure menuData is at least an empty array
    }
  }, []);

  // **2️⃣ Handle dark/light mode switch**
  const onChangeDarkMode = () => {
    if (window.document.children[0].getAttribute("data-theme") === "light") {
      window.document.children[0].setAttribute("data-theme", "dark");
      setDarkLightMode("dark");
    } else {
      window.document.children[0].setAttribute("data-theme", "light");
      setDarkLightMode("light");
    }
  };

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
      <div className="d-flex flex-column h-100">
        {/* Logo */}
        <a href="/matamaps" className="mb-0 brand-icon">
          <img src={LogoMain} alt="MataMaps" className="logo-icon" />
        </a>

        {/* Dynamic menu items based on the user's role */}
        <ul className="menu-list flex-grow-1 mt-3">
          {menuData.map((menuItem, index) => (
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
          ))}
        </ul>

        {/* Theme switch (dark/light mode) */}
        <ul className="list-unstyled mb-0">
          <li className="d-flex align-items-center justify-content-center">
            <div className="form-check form-switch theme-switch">
              <input
                className="form-check-input"
                type="checkbox"
                checked={darkLightMode === "dark"}
                id="theme-switch"
                onChange={onChangeDarkMode}
              />
              <label className="form-check-label" htmlFor="theme-switch">Enable Dark Mode</label>
            </div>
          </li>
        </ul>

        {/* Logout Button */}
        <ul className="list-unstyled mt-3">
          <li className="d-flex align-items-center justify-content-center">
            <button 
              className="btn btn-danger btn-logout w-100" 
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>

        {/* Mini Sidebar Toggle Button */}
        <button 
          type="button" 
          className="btn btn-link sidebar-mini-btn text-light" 
          onClick={() => setIsSidebarMini(!isSidebarMini)}
        >
          <span className="ms-2"><i className="icofont-bubble-right"></i></span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Cookies from "js-cookie"; // Import js-cookie
// import LogoMain from "../../assets/images/matamaps-images/logo-design.svg";
// import menu3 from "../Data/menu3.json";
// import menu4 from "../Data/menu4.json";
// import menu2 from "../Data/menu2.json"; // Assume you have this file

// function Sidebar(props) {
//   const [isSidebarMini, setIsSidebarMini] = useState(false);
//   const [darkLightMode, setDarkLightMode] = useState("light");
//   const [menuData, setMenuData] = useState([]); // 1️⃣ Default state is an empty array
//   const { activekey } = props;

//   // **1️⃣ Get user role from cookies and load the appropriate menu**
//   useEffect(() => {
//     try {
//       const role = Cookies.get('role') || 'user'; // 2️⃣ Default role is user if no role is found
//       console.log('User role from cookies:', role);

//       if (role === 'club_leader') {
//         setMenuData(menu3?.menu3 || []); // If menu3 is not available, default to an empty array
//       } else if (role === 'user') {
//         setMenuData(menu4?.menu4 || []); // If menu4 is not available, default to an empty array
//       } else if (role === 'admin') {
//         setMenuData(menu2?.menu2 || []); // If menu2 is not available, default to an empty array
//       } else {
//         console.warn('No role found, defaulting to user menu');
//         setMenuData(menu4?.menu4 || []); // Default to user menu if no role is found
//       }
//     } catch (error) {
//       console.error('Error loading menu data:', error);
//       setMenuData([]); // If something goes wrong, ensure menuData is at least an empty array
//     }
//   }, []);

//   // **2️⃣ Handle dark/light mode switch**
//   const onChangeDarkMode = () => {
//     if (window.document.children[0].getAttribute("data-theme") === "light") {
//       window.document.children[0].setAttribute("data-theme", "dark");
//       setDarkLightMode("dark");
//     } else {
//       window.document.children[0].setAttribute("data-theme", "light");
//       setDarkLightMode("light");
//     }
//   };

//   // **3️⃣ Render the sidebar component with dynamic menu**
//   return (
//     <div id="mainSideMenu" className={`sidebar px-4 py-4 py-md-5 me-0 ${isSidebarMini ? "sidebar-mini" : ""}`}>
//       <div className="d-flex flex-column h-100">
//         {/* Logo */}
//         <a href="/matamaps" className="mb-0 brand-icon">
//           <img src={LogoMain} alt="MataMaps" className="logo-icon" />
//         </a>

//         {/* Dynamic menu items based on the user's role */}
//         <ul className="menu-list flex-grow-1 mt-3">
//   {menuData.map((menuItem, index) => (
//     <li 
//       key={menuItem.identifier || `${menuItem.routerLink[0]}-${index}`} 
//       className="collapsed"
//     >
//       <Link 
//         to={`/${menuItem.routerLink[0]}`} 
//         className={`m-link ${menuItem.routerLink[0] === activekey ? "active" : ""}`}
//       >
//         <i className={menuItem.iconClass}></i>
//         <span><b>{menuItem.name}</b></span>
//       </Link>
//     </li>
//   ))}
// </ul>


//         {/* Theme switch (dark/light mode) */}
//         <ul className="list-unstyled mb-0">
//           <li className="d-flex align-items-center justify-content-center">
//             <div className="form-check form-switch theme-switch">
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 checked={darkLightMode === "dark"}
//                 id="theme-switch"
//                 onChange={onChangeDarkMode}
//               />
//               <label className="form-check-label" htmlFor="theme-switch">Enable Dark Mode</label>
//             </div>
//           </li>
//         </ul>

//         {/* Mini Sidebar Toggle Button */}
//         <button 
//           type="button" 
//           className="btn btn-link sidebar-mini-btn text-light" 
//           onClick={() => setIsSidebarMini(!isSidebarMini)}
//         >
//           <span className="ms-2"><i className="icofont-bubble-right"></i></span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;