import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu3 from "../Data/menu3.json";
import LogoMain from "../../assets/images/matamaps-images/logo-design.svg";

function Sidebar(props) {
  const [isSidebarMini, setIsSidebarMini] = useState(false);
  const [darkLightMode, setDarkLightMode] = useState("light");
  const { activekey } = props;

  const onChangeDarkMode = () => {
    if (window.document.children[0].getAttribute("data-theme") === "light") {
      window.document.children[0].setAttribute("data-theme", "dark");
      setDarkLightMode("dark");
    } else {
      window.document.children[0].setAttribute("data-theme", "light");
      setDarkLightMode("light");
    }
  };

  return (
    <div id="mainSideMenu" className={`sidebar px-4 py-4 py-md-5 me-0 ${isSidebarMini ? "sidebar-mini" : ""}`}>
      <div className="d-flex flex-column h-100">
        <a href="/matamaps" className="mb-0 brand-icon">
          <img src={LogoMain} alt="MataMaps" className="logo-icon" />
        </a>
        <ul className="menu-list flex-grow-1 mt-3">
          {menu3.menu3.map((d, i) => (
            <li key={`menu-item-${i}`} className="collapsed">
              <Link to={`/${d.routerLink[0]}`} className={`m-link ${d.routerLink[0] === activekey ? "active" : ""}`}>
                <i className={d.iconClass}></i>
                <span><b>{d.name}</b></span>
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
        <button type="button" className="btn btn-link sidebar-mini-btn text-light" onClick={() => setIsSidebarMini(!isSidebarMini)}>
          <span className="ms-2"><i className="icofont-bubble-right"></i></span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;