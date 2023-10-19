import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Navbar = () => {
    const [isNavExpanded, setIsNavbarExpanded] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    window.addEventListener('resize', () => {

        if (window.innerWidth < 992) {
            setIsNavbarExpanded(false);
            setIsSmallScreen(true);
        } else {
            setIsNavbarExpanded(false);
            setIsSmallScreen(false);
        }
    });
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 className="m-0 text-primary">
                    <i className="fa fa-graduation-cap me-3" />
                    ETPx.
                </h2>
            </Link>
            <button
                title='Toggle navigation'
                type="button"
                className={window.innerWidth < 992 ? "navbar-toggler me-4" : "collapse d-none"}
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                onClick={() => setIsNavbarExpanded(!isNavExpanded)}
            >
                <span className="navbar-toggler-icon" />
            </button>
            {/* <div className="collapse navbar-collapse" id="navbarCollapse"> */}
            <div className={isSmallScreen ? isNavExpanded ? "collapse navbar-expand" : " navbar-collapse" : " navbar-collapse"} id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link to="/" className="nav-item nav-link active">
                        Home
                    </Link>
                    {/* <Link to="/about" className="nav-item nav-link">
                        About
                    </Link> */}
                    {/* <Link to="/courses" className="nav-item nav-link">
                        Tests
                    </Link>
                    <Link to="/contact" className="nav-item nav-link">
                        Contact
                    </Link> */}
                </div>
                {/* <Link to="/" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
                    Join Now
                    <i className="fa fa-arrow-right ms-3" />
                </Link> */}
            </div>
        </nav >
    );
};

export default Navbar;
