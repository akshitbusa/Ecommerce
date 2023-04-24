import { Link, Navigate } from 'react-router-dom'
import Aside from './Aside';


const Header = () => {


    const handleClick = () => {
        const element = document.getElementsByTagName('body');
        element[0].classList.toggle("toggle-sidebar");
    };

    const signOut = () => {
        localStorage.removeItem('name')
        Navigate('/admin')

    }
    let styles = {
        marginRight: '10px',
    };

    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between col-1">
                    <a href="/" className="logo d-flex align-items-center" style={{ textDecoration: "none" }}>
                        <span className="d-none d-sm-block">AkAdmin</span>
                    </a>
                    <Link >
                            <i className="bi bi-list toggle-sidebar-btn" onClick={() => { handleClick() }}></i>
                    </Link>
                </div>



                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center " style={styles}>


                        <li className="nav-item dropdown">

                            <a className="nav-link nav-icon" href="/" data-bs-toggle="dropdown">
                                <i className="bi bi-bell"></i>
                                <span className="badge bg-primary badge-number"></span>
                            </a>
                            {/* <!-- End Notification Icon --> */}

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                <li className="dropdown-header">
                                    0 notifications
                                </li>
                            </ul>

                        </li>



                        <li className="nav-item dropdown pe-3">

                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="/" data-bs-toggle="dropdown">
                                <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                            </a>
                            {/* <!-- End Profile Image Icon --> */}

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>Kevin Anderson</h6>
                                    <span>Web Designer</span>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="/Profile">
                                        <i className="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i className="bi bi-gear"></i>
                                        <span>Account Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                        <i className="bi bi-question-circle"></i>
                                        <span>Need Help?</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" onClick={() => { signOut() }}>
                                        <i className="bi bi-box-arrow-right"></i>
                                        <span>Sign Out &nbsp;</span>
                                    </Link>
                                </li>

                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="d-flex align-items-center" onClick={() => { signOut() }}>


                                <i className="bi bi-box-arrow-right">

                                </i>&nbsp;
                                <span>Sign Out</span>



                            </Link>
                        </li>

                    </ul>
                </nav>

            </header>
            <Aside />
        </>
    )
}

export default Header
