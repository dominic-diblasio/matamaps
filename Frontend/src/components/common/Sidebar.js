import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import LogoMain from "../../assets/images/matamaps-images/logo-design.svg";
import defaultMenu from "../Data/menu4.json"; // Import menu4.json

const SIDEBAR_URL = process.env.REACT_APP_SIDEBAR_API_BASE_URL || "http://localhost:3500"; //not sure why but REACT_APP_SIDEBAR_API_BASE_URL was returning null so added a fallback for testing

function Sidebar(props) {
  const [isSidebarMini, setIsSidebarMini] = useState(false);
  const [menuData, setMenuData] = useState(defaultMenu.menu); // Initialize with default menu
  const [darkLightMode, setDarkLightMode] = useState("light");
  const [role, setRole] = useState(null);
  const [jwtToken, setJwtToken] = useState(Cookies.get("jwt_token"));
  const navigate = useNavigate();

  const loadMenuData = async (role) => {
    try {
      switch (role) {
        case "admin":
          return import("../Data/adminMenu.json").then((module) => module.default.menu || defaultMenu.menu);
        case "club_leader":
          return import("../Data/clubLeaderMenu.json").then((module) => module.default.menu || defaultMenu.menu);
        case "user":
          return import("../Data/userMenu.json").then((module) => module.default.menu || defaultMenu.menu);
        default:
          return defaultMenu.menu; // Default to log in menu
      }
    } catch (error) {
      return defaultMenu.menu; // Return defaultMenu on error
    }
  };

  const fetchUserRole = async () => {
    const jwt_token = Cookies.get("jwt_token");
    if (!jwt_token) {
      setMenuData(defaultMenu.menu);
      setRole(null); // Clear role if no token
      return;
    }

    try {
      const response = await fetch(`${SIDEBAR_URL}/users/account/details`, {
        headers: { Authorization: `Bearer ${jwt_token}` },
      });

      console.log("API Response:", response); // used to see what side bar was routing to

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      
      const text = await response.text();

      if (!text) {
        console.warn("Response body is empty");
        setMenuData(defaultMenu.menu);
        setRole(null);
        return;
      }
    try {
      const result = JSON.parse(text); // Parse the text as JSON
      if (result.success) {
        const userRole = result.data.role;
        setRole(userRole); // Update the role

        const roleMenu = await loadMenuData(userRole); //force refetching on reload
        setMenuData(roleMenu);
      } else {
        console.warn("API response returned success: false", result);
        setMenuData(defaultMenu.menu);
        setRole(null);
      }
    } catch (jsonError) {
      console.error("Failed to parse JSON", text);
      setMenuData(defaultMenu.menu);
      setRole(null);
    }
    } catch (err) {
      console.error("Error fetching user role:", err.message);
      setMenuData(defaultMenu.menu);
      setRole(null);
    }
  };

  // Fetch user role when the component mounts or JWT token changes
  useEffect(() => {
    fetchUserRole();
  }, [jwtToken]);

  

  const onChangeDarkMode = () => {
    if (window.document.children[0].getAttribute("data-theme") === "light") {
      window.document.children[0].setAttribute("data-theme", "dark");
      setDarkLightMode("dark");
    } else {
      window.document.children[0].setAttribute("data-theme", "light");
      setDarkLightMode("light");
    }
  };

  const handleLogout = () => {
    Cookies.remove("jwt_token");
    setRole(null);
    setMenuData(defaultMenu.menu);
    navigate("/login");
  };

  const { activekey } = props;

  return (
    <div id="mainSideMenu" className={`sidebar px-4 py-4 py-md-5 me-0 ${isSidebarMini ? "sidebar-mini" : ""}`}>
      <div className="d-flex flex-column h-100">
        <a href="/matamaps" className="mb-0 brand-icon">
          <img src={LogoMain} alt="MataMaps" className="logo-icon" />
        </a>
        <ul className="menu-list flex-grow-1 mt-3">
          {menuData.map((d, i) => (
            <li key={`menu-item-${i}`} className="collapsed">
              <Link
                to={`/${d.routerLink[0]}`}
                className={`m-link ${d.routerLink[0] === activekey ? "active" : ""}`}
              >
                <i className={d.iconClass}></i>
                <span>
                  <b>{d.name}</b>
                </span>
              </Link>
            </li>
          ))}
        </ul>

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

        {role && (
          <div className="text-center mt-4">
            <button type="button" className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
        <button
          type="button"
          className="btn btn-link sidebar-mini-btn text-light"
          onClick={() => setIsSidebarMini(!isSidebarMini)}
        >
          <span className="ms-2">
            <i className="icofont-bubble-right"></i>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import adminMenu from "../Data/adminMenu.json";
// import clubLeaderMenu from "../Data/clubLeaderMenu.json";
// import userMenu from "../Data/userMenu.json";
// import guestMenu from "../Data/guestMenu.json";
// import LogoMain from "../../assets/images/matamaps-images/logo-design.svg";
// import { useAuth } from "../../AuthContext"; // Import AuthContext

// function Sidebar(props) {
//   const [isSidebarMini, setIsSidebarMini] = useState(false);
//   const [menuData, setMenuData] = useState([]); // Menu data based on role
//   const [darkLightMode, setDarkLightMode] = useState("light"); // Dark mode toggle
//   const { authState, logout } = useAuth(); // Use AuthContext
//   const { isLoggedIn, username, role } = authState; // Destructure authState
//   const navigate = useNavigate();

//   // Load menu data based on role
//   const loadMenuData = (role) => {
//     console.log("Loading menu for role:", role); // Debugging log
//     if (role === "admin") return adminMenu.menu;
//     if (role === "club_leader") return clubLeaderMenu.menu;
//     if (role === "user") return userMenu.menu;
//     return guestMenu.menu; // Default menu for unauthenticated users
//   };

//   // Update menu data based on role changes
//   useEffect(() => {
//     if (role !== null) {
//       const updatedMenu = loadMenuData(role); // Load menu based on role
//       setMenuData(updatedMenu);
//     } else {
//       setMenuData(loadMenuData(null)); // Load guest menu
//     }
//   }, [role]); // Triggered whenever `role` changes

//   // Handle dark mode toggle
//   const onChangeDarkMode = () => {
//     const currentTheme = window.document.children[0].getAttribute("data-theme");
//     const newTheme = currentTheme === "light" ? "dark" : "light";
//     window.document.children[0].setAttribute("data-theme", newTheme);
//     setDarkLightMode(newTheme);
//   };

//   // Handle user logout
//   const handleLogout = () => {
//     Cookies.remove("jwt_token"); // Remove token
//     logout(); // Reset AuthContext state
//     setMenuData(loadMenuData(null)); // Load guest menu
//     navigate("/login"); // Redirect to login page
//   };

//   const { activekey } = props;

//   return (
//     <div
//       id="mainSideMenu"
//       className={`sidebar px-4 py-4 py-md-5 me-0 ${isSidebarMini ? "sidebar-mini" : ""}`}
//     >
//       <div className="d-flex flex-column h-100">
//         <a href="/matamaps" className="mb-0 brand-icon">
//           <img src={LogoMain} alt="MataMaps" className="logo-icon" />
//         </a>
//         <ul className="menu-list flex-grow-1 mt-3">
//           {menuData.map((d, i) => (
//             <li key={`menu-item-${i}`} className="collapsed">
//               <Link
//                 to={`/${d.routerLink[0]}`}
//                 className={`m-link ${d.routerLink[0] === activekey ? "active" : ""}`}
//               >
//                 <i className={d.iconClass}></i>
//                 <span>
//                   <b>{d.name}</b>
//                 </span>
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Display username */}
//         {isLoggedIn && (
//           <div className="text-center mb-3">
//             <p>Welcome, <b>{username}</b></p>
//           </div>
//         )}

//         {/* Dark Mode Toggle */}
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
//               <label className="form-check-label" htmlFor="theme-switch">
//                 Enable Dark Mode
//               </label>
//             </div>
//           </li>
//         </ul>

//         {/* Logout Button */}
//         {isLoggedIn && (
//           <div className="text-center mt-4">
//             <button type="button" className="btn btn-danger" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         )}

//         <button
//           type="button"
//           className="btn btn-link sidebar-mini-btn text-light"
//           onClick={() => setIsSidebarMini(!isSidebarMini)}
//         >
//           <span className="ms-2">
//             <i className="icofont-bubble-right"></i>
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;