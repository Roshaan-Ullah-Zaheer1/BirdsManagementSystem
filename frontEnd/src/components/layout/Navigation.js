
import mainLogo from './../../dist/img/AdminLTELogo.png';
import mainLogo1 from './../../dist/img/abcd.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./Navigation.css"
const SideNavigation = (props) => {
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem('user-token');
        navigate("/login");
    }

    const handleToggle = () => {
        props.toggleHandler();
    }

    return (
        <>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav customNav">
                    <li className="nav-item" onClick={handleToggle}>
                        <div className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars"></i></div>
                    </li>
                    <li className="nav-item logoutButton">
                        <div>
                            <button className="btn btn-block btn-secondary" onClick={logoutHandler}>Logout <i className='fas fa-sign-out-alt'></i></button>
                        </div>
                    </li>
                </ul>
            </nav>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">

                <a href="/" className="brand-link">
                    <img src={mainLogo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                        style={{ "opacity": ".8" }} />
                    <span className="brand-text font-weight-light">ZABA BIRDS FARM</span>
                </a>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={mainLogo1} className="img-circle elevation-2" alt="User Image"/>
                        </div>
                        <div className="info">
                            <a href="/" class="d-block">Roshaan Ullah Zaheer</a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li class="nav-header">Entry Section</li>
                            <li className="nav-item">
                                <Link to="/birds">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>
                                            Birds
                                        </p>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/pairs">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>
                                            Pairs
                                        </p>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sales">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>
                                            Sold Birds
                                        </p>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/purchases">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>
                                            Purchase Birds
                                        </p>
                                    </a>
                                </Link>
                            </li>
                            <hr/>
                            <li class="nav-header">Record Section</li>

                            <li className="nav-item ">
                                <Link to="/cages">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-th" ></i>
                                        <p>
                                            Cage Wise Birds
                                        </p>
                                    </a>
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to="/daybook">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>
                                            Daybook
                                        </p>
                                    </a>
                                </Link>
                            </li>
                          
                            <li className="nav-item">
                                <Link to="/profitloss">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>
                                            Profit Loss
                                        </p>
                                    </a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/chicks">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>
                                            Chicks Pedigree
                                        </p>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/genetic">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>
                                            Genetic Calculator                                              </p>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </aside>
        </>);
}

export default SideNavigation;