import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import menu3 from "../Data/menu3.json";
import LogoMain from "../../assets/images/matamaps-images/logo-design.svg";

function Sidebar(props) {
    const [isSidebarMini, setIsSidebarMini] = useState(false);
    const [menuData, setMenuData] = useState([...menu3.menu3]);
    const [darkLightMode, setDarkLightMode] = useState("light");

    const navigate = useNavigate();

    useEffect(() => {
        window.document.children[0].setAttribute("data-theme", "light");
    }, []);

    function onChangeDarkMode() {
        if (window.document.children[0].getAttribute("data-theme") === "light") {
            window.document.children[0].setAttribute("data-theme", "dark");
            setDarkLightMode("dark");
        } else {
            window.document.children[0].setAttribute("data-theme", "light");
            setDarkLightMode("light");
        }
    }

    const { activekey } = props;

    return (
        <div id="mainSideMenu" className={`sidebar px-4 py-4 py-md-5 me-0 ${isSidebarMini ? "sidebar-mini" : ""}`}>
            <div className="d-flex flex-column h-100">
                <a href="/matamaps" className="mb-0 brand-icon">
                    <img src={LogoMain} alt="MataMaps" className="logo-icon" />
                    {/*<span className="logo-text">MataMaps</span>*/}
                </a>
                <ul className="menu-list flex-grow-1 mt-3">
                    {menuData.map((d, i) => (
                        <li key={`menu-item-${i}`} className="collapsed">
                            <Link to={`/${d.routerLink[0]}`} className={`m-link ${d.routerLink[0] === activekey ? "active" : ""}`}>
                                <i className={d.iconClass}></i>
                                {/*<img src={require(d.iconRef)} className="menu-item-icon"/>*/}
                                <span>{d.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* Dark mode toggle */}
                <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center justify-content-center">
                        <div className="form-check form-switch theme-switch">
                            <input className="form-check-input" type="checkbox" checked={darkLightMode === "dark"} id="theme-switch" onChange={onChangeDarkMode} />
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


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import menu3 from "../Data/menu3.json"; // Import the new menu3 data

// function Sidebar(props) {
//     const [isSidebarMini, setIsSidebarMini] = useState(false);
//     const [menuData, setMenuData] = useState([...menu3?.menu3]); // Set initial state to menu3
//     const [darkLightMode, setDarkLightMode] = useState("light");
//     const [updateRtl, setUpdateRtl] = useState(false);

//     const navigate = useNavigate();
    
//     useEffect(() => {
//         window.document.children[0].setAttribute("data-theme", "light");
//     }, []);

//     function onChangeDarkMode() {
//         if (window.document.children[0].getAttribute("data-theme") === "light") {
//             window.document.children[0].setAttribute("data-theme", "dark");
//             setDarkLightMode("dark");
//         } else {
//             window.document.children[0].setAttribute("data-theme", "light");
//             setDarkLightMode("light");
//         }
//     }

//     function onChangeRTLMode() {
//         if (document.body.classList.contains("rtl_mode")) {
//             document.body.classList.remove("rtl_mode");
//         } else {
//             document.body.classList.add("rtl_mode");
//         }
//         setUpdateRtl(!updateRtl);
//     }

//     const { activekey } = props;
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };

//     // Navigate to the selected dropdown page
//     const handleDropdownSelect = (path) => {
//         navigate(path);
//         setIsDropdownOpen(false); // Close dropdown after selecting
//     };

//     return (
//         <div id="mainSideMenu" className={`sidebar px-4 py-4 py-md-5 me-0 ${isSidebarMini ? "sidebar-mini" : ""}`}>
//             <div className="d-flex flex-column h-100">
//                 <a href="/" className="mb-0 brand-icon">
//                     <span className="logo-icon">
//                         <svg width="35" height="35" fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16">
//                             <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
//                             <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
//                             <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
//                         </svg>
//                     </span>
//                     <span className="logo-text">MataMaps</span>
//                 </a>
//                 <ul className="menu-list flex-grow-1 mt-3">
//                     {
//                         menuData.map((d, i) => {
//                             return (
//                                 <li key={"menu-item-" + i} className="collapsed">
//                                 <Link to={`/${d.routerLink[0]}`} className={`m-link ${d.routerLink[0] === activekey ? "active" : ""}`}>
//                                 <i className={d.iconClass}></i>
//                                         <span>{d.name}</span>
//                                     </Link>
//                                 </li>
//                             );
//                         })
//                     }
//                     <li className="collapsed">
//                         <a  onClick={toggleDropdown} className="m-link">
//                             <i className="icofont-options"></i>
//                             <span>Pages</span>
//                             <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span>
//                         </a>
//                         {isDropdownOpen && (
//                             <ul className="sub-menu collapse show has-children">
//                                 <li>
//                                     <a  onClick={() => handleDropdownSelect("/my-dashboard")} className="ms-link">Dashboard</a>
//                                 </li>
//                                 <li>
//                                     <a  onClick={() => handleDropdownSelect("/messages")} className="ms-link">Messages</a>
//                                 </li>
//                                 <li>
//                                     <a  onClick={() => handleDropdownSelect("/personal-details")} className="ms-link">Personal Details</a>
//                                 </li>
                                
//                             </ul>
//                         )}
//                     </li>                    
//                 </ul>
//                 <ul className="list-unstyled mb-0">
//                     <li className="d-flex align-items-center justify-content-center">
//                         <div className="form-check form-switch theme-switch">
//                             <input className="form-check-input" type="checkbox" checked={darkLightMode === "dark"} id="theme-switch" onChange={onChangeDarkMode} />
//                             <label className="form-check-label" htmlFor="theme-switch">Enable Dark Mode!</label>
//                         </div>
//                     </li>
//                     <li className="d-flex align-items-center justify-content-center">
//                         <div className="form-check form-switch theme-rtl">
//                             <input className="form-check-input" type="checkbox" checked={document.body.classList.contains("rtl_mode")} id="theme-rtl" onChange={onChangeRTLMode} />
//                             <label className="form-check-label" htmlFor="theme-rtl">Enable RTL Mode!</label>
//                         </div>
//                     </li>
//                 </ul>
//                 <button type="button" className="btn btn-link sidebar-mini-btn text-light" onClick={() => { setIsSidebarMini(!isSidebarMini); }}>
//                     <span className="ms-2"><i className="icofont-bubble-right"></i></span>
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Sidebar;