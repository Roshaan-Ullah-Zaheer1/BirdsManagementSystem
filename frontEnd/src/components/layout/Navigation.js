import mainLogo from './../../dist/img/AdminLTELogo.png';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const SideNavigation = (props) => {

    const handleToggle = () => {
        props.toggleHandler();
    }

    return (
        <>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item" onClick={handleToggle}>
                        <div className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars"></i></div>
                    </li>
                </ul>
            </nav>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">

                <a href="#" className="brand-link">
                    <img src={mainLogo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                        style={{ "opacity": ".8" }} />
                    <span className="brand-text font-weight-light">ZABA BIRDS FARM</span>
                </a>

                <div className="sidebar">
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <Link to="/birds">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>
                                            All Birds
                                        </p>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/birds/create">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>
                                            Add Bird
                                        </p>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/view/single/bird">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>
                                            View Single Bird
                                        </p>
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