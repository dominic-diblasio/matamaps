import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Avatar1 from "../../assets/images/xs/avatar1.jpg";
import Avatar2 from "../../assets/images/xs/avatar2.jpg";
import Avatar3 from "../../assets/images/xs/avatar3.jpg";
import Avatar4 from "../../assets/images/xs/avatar4.jpg";
import Avatar5 from "../../assets/images/xs/avatar5.jpg";
import Avatar6 from "../../assets/images/xs/avatar6.jpg";
import Avatar7 from "../../assets/images/xs/avatar7.jpg";
import Avatar8 from "../../assets/images/xs/avatar8.jpg";
import ProfileImg from "../../assets/images/profile_av.png";
import { Link } from "react-router-dom";
import AddNewUserModal from "./AddNewUserModal";

function Header() {
    const [isAddUserModa, setIsAddUserModa] = useState(false);

    return (
        <div className="header">
            <nav className="navbar py-4">
                <div className="container-xxl">
                    <div className="h-right d-flex align-items-center order-1">
                        <div className="d-flex">
                            <Link to="help" className="nav-link text-primary collapsed info-page-icon" title="Get Help">
                                <i className="icofont-info-square fs-5"></i>
                            </Link>
                            <div className="avatar-list avatar-list-stacked px-3 me-2">
                                <img className="avatar rounded-circle" src={Avatar2} alt="" />
                                <img className="avatar rounded-circle" src={Avatar1} alt="" />
                                <img className="avatar rounded-circle" src={Avatar3} alt="" />
                                <img className="avatar rounded-circle" src={Avatar4} alt="" />
                                <img className="avatar rounded-circle" src={Avatar7} alt="" />
                                <img className="avatar rounded-circle" src={Avatar8} alt="" />
                                <span className="avatar rounded-circle text-center pointer" onClick={() => { setIsAddUserModa(true) }}><i className="icofont-ui-add"></i></span>
                            </div>
                        </div>
                        <Dropdown className="notifications px-2 px-md-0">
                            <Dropdown.Toggle as="a" className="nav-link dropdown-toggle pulse">
                                <i className="icofont-alarm fs-5"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className=" rounded-lg shadow border-0 dropdown-animation dropdown-menu-sm-end p-0 m-0">
                                <div className="card border-0 w380">
                                    <div className="card-header border-0 p-3">
                                        <h5 className="mb-0 font-weight-light d-flex justify-content-between">
                                            <span>Notifications</span>
                                            <span className="badge text-white">11</span>
                                        </h5>
                                    </div>
                                    <div className="tab-content card-body">
                                        <div className="tab-pane fade show active">
                                            <ul className="list-unstyled list mb-0">
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="#!" className="d-flex">
                                                        <img className="avatar rounded-circle" src={Avatar1} alt="" />
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Dylan Hunter</span> <small>2MIN</small></p>
                                                            <span className="">Added  2021-02-19 my-Task ui/ux Design <span className="badge bg-success">Review</span></span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="#!" className="d-flex">
                                                        <div className="avatar rounded-circle no-thumbnail">DF</div>
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Diane Fisher</span> <small>13MIN</small></p>
                                                            <span className="">Task added Get Started with Fast Cad project</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="#!" className="d-flex">
                                                        <img className="avatar rounded-circle" src={Avatar3} alt="" />
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Andrea Gill</span> <small>1HR</small></p>
                                                            <span className="">Quality Assurance Task Completed</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="#!" className="d-flex">
                                                        <img className="avatar rounded-circle" src={Avatar5} alt="" />
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Diane Fisher</span> <small>13MIN</small></p>
                                                            <span className="">Add New Project for App Developemnt</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="#!" className="d-flex">
                                                        <img className="avatar rounded-circle" src={Avatar6} alt="" />
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Andrea Gill</span> <small>1HR</small></p>
                                                            <span className="">Add Timesheet For Rhinestone project</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2">
                                                    <a href="#!" className="d-flex">
                                                        <img className="avatar rounded-circle" src={Avatar7} alt="" />
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Zoe Wright</span> <small className="">1DAY</small></p>
                                                            <span className="">Add Calander Event</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a className="card-footer text-center border-top-0" href="#!"> View all notifications</a>
                                </div>
                            </Dropdown.Menu>

                        </Dropdown>
                        <Dropdown className="dropdown user-profile ms-2 ms-sm-3 d-flex align-items-center">
                            <div className="u-info me-2">
                                <p className="mb-0 text-end line-height-sm "><span className="font-weight-bold">Dylan Hunter</span></p>
                                <small>Admin Profile</small>
                            </div>
                            <Dropdown.Toggle as="a" className="nav-link dropdown-toggle pulse p-0">
                                <img className="avatar lg rounded-circle img-thumbnail" src={ProfileImg} alt="profile" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                                <div className="card border-0 w280">
                                    <div className="card-body pb-0">
                                        <div className="d-flex py-1">
                                            <img className="avatar rounded-circle" src={ProfileImg} alt="profile" />
                                            <div className="flex-fill ms-3">
                                                <p className="mb-0"><span className="font-weight-bold">Dylan Hunter</span></p>
                                                <small className="">Dylan.hunter@gmail.com</small>
                                            </div>
                                        </div>

                                        <div><hr className="dropdown-divider border-dark" /></div>
                                    </div>
                                    <div className="list-group m-2 ">
                                        <Link to="tasks" className="list-group-item list-group-item-action border-0 "><i className="icofont-tasks fs-5 me-3"></i>My Task</Link>
                                        <Link to="members" className="list-group-item list-group-item-action border-0 "><i className="icofont-ui-user-group fs-6 me-3"></i>members</Link>
                                        <Link to="sign-in" className="list-group-item list-group-item-action border-0 "><i className="icofont-logout fs-6 me-3"></i>Signout</Link>
                                        <div><hr className="dropdown-divider border-dark" /></div>
                                        <Link to="sign-up" className="list-group-item list-group-item-action border-0 "><i className="icofont-contact-add fs-5 me-3"></i>Add personal account</Link>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>


                    <button className="navbar-toggler p-0 border-0 menu-toggle order-3"
                        onClick={() => {
                            var side = document.getElementById("mainSideMenu");
                            if (side) {
                                if (side.classList.contains("open")) {
                                    side.classList.remove("open")
                                } else {
                                    side.classList.add("open")
                                }
                            }
                        }}
                    >
                        <span className="fa fa-bars"></span>
                    </button>


                    <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
                        <div className="input-group flex-nowrap input-group-lg">
                            <button type="button" className="input-group-text" id="addon-wrapping"><i className="fa fa-search"></i></button>
                            <input type="search" className="form-control" placeholder="Search" aria-label="search" aria-describedby="addon-wrapping" />
                            <button type="button" className="input-group-text add-member-top" onClick={() => { setIsAddUserModa(true) }}><i className="fa fa-plus"></i></button>
                        </div>
                    </div>

                </div>
            </nav>
            <AddNewUserModal show={isAddUserModa} onClose={() => { setIsAddUserModa(false) }} />
        </div>
    )
}


export default Header;  