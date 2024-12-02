import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import menu3 from "../Data/menu3.json";
import LogoMain from "../../assets/images/matamaps-images/logo-design.svg";

function Sidebar(props) {
  const [isSidebarMini, setIsSidebarMini] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const [darkLightMode, setDarkLightMode] = useState("light");
  const [role, setRole] = useState(null); // Track user role
  const navigate = useNavigate();

  const filterMenuByRole = (role) => {
    // Filter menu items based on role
    if (role === "admin") {
      return menu3.menu3.filter(
        (item) =>
          item.identifier !== "ClubsLeader" &&
          item.identifier !== "Login" &&
          item.identifier !== "Registration"
      );
    } else if (role === "club_leader") {
      return menu3.menu3.filter(
        (item) =>
          item.identifier !== "ClubsAdmin" &&
          item.identifier !== "ManageUsers" &&
          item.identifier !== "Login" &&
          item.identifier !== "Registration"
      );
    } else if (role === "user") {
      return menu3.menu3.filter(
        (item) =>
          item.identifier !== "ClubsAdmin" &&
          item.identifier !== "ManageUsers" &&
          item.identifier !== "ClubsLeader" &&
          item.identifier !== "Login" &&
          item.identifier !== "Registration"
      );
    } else {
      // Default for not logged in
      return menu3.menu3.filter(
        (item) => item.identifier === "Login" || item.identifier === "Registration"
      );
    }
  };

  useEffect(() => {
    const fetchUserRole = async () => {
      const jwt_token = Cookies.get("jwt_token");
      if (!jwt_token) {
        // Not logged in, show only login and registration
        setMenuData(filterMenuByRole(null));
        return;
      }

      try {
        // Fetch user details to determine the role
        const response = await fetch("http://localhost:3500/users/account/details", {
          headers: { Authorization: `Bearer ${jwt_token}` },
        });

        const result = await response.json();
        if (result.success) {
          setRole(result.data.role);
          setMenuData(filterMenuByRole(result.data.role));
        } else {
          setMenuData(filterMenuByRole(null));
        }
      } catch (err) {
        console.error("Error fetching user role:", err);
        setMenuData(filterMenuByRole(null));
      }
    };

    fetchUserRole();
  }, []);

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
    // Remove cookies
    Cookies.remove("jwt_token");
    setRole(null); // Reset role to null
    setMenuData(filterMenuByRole(null));
    navigate("/login"); // Redirect to login page
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
              <Link to={`/${d.routerLink[0]}`} className={`m-link ${d.routerLink[0] === activekey ? "active" : ""}`}>
                <i className={d.iconClass}></i>
                <span><b>{d.name}</b></span>
              </Link>
            </li>
          ))}
        </ul>
        {/* Dark mode toggle */}
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
        {role && (
          <div className="text-center mt-4">
            <button type="button" className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
        <button type="button" className="btn btn-link sidebar-mini-btn text-light" onClick={() => setIsSidebarMini(!isSidebarMini)}>
          <span className="ms-2"><i className="icofont-bubble-right"></i></span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;