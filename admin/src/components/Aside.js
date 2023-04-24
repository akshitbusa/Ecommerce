import React from 'react'
import { Link } from "react-router-dom";


const Aside = () => {
    return (
        <>
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/dashboard">
                            <i className="bi bi-house-fill"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    {/* <!-- End Dashboard Nav --> */}

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="/">
                            <i className="bi bi-tags-fill"></i><span>Catalog</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to='/Categories'>
                                    <i className="bi bi-circle"></i><span>Categories</span>
                                </Link>
                                <Link to='/Products'>
                                    <i className="bi bi-circle"></i><span>Products</span>
                                </Link>
                                <Link to='/Badges'>
                                    <i className="bi bi-circle"></i><span>Subscription Plans</span>
                                </Link>
                                <Link to='/Breadcrumbs'>
                                    <i className="bi bi-circle"></i><span>Filters</span>
                                </Link>
                                <Link to='/Breadcrumbs'>
                                    <i className="bi bi-circle"></i><span>Attributes</span>
                                </Link>
                                <Link to='/Breadcrumbs'>
                                    <i className="bi bi-circle"></i><span>Options</span>
                                </Link>
                                <Link to='/Breadcrumbs'>
                                    <i className="bi bi-circle"></i><span>Manufacturers</span>
                                </Link>
                                <Link to='/Breadcrumbs'>
                                    <i className="bi bi-circle"></i><span>Downloads</span>
                                </Link>
                                <Link to='/Breadcrumbs'>
                                    <i className="bi bi-circle"></i><span>Reviews</span>
                                </Link>
                                <Link to='/Breadcrumbs'>
                                    <i className="bi bi-circle"></i><span>Information</span>
                                </Link>

                            </li>


                        </ul>
                    </li>
                    {/* <!-- End Components Nav --> */}

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/">
                            <i className="bi bi-puzzle-fill"></i><span>Extensions</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to='/forms-elements'>
                                    <i className="bi bi-circle " data-bs-target="#sidebar"></i><span>Marketplace</span>
                                </Link>
                                <Link to='/forms-elements'>
                                    <i className="bi bi-circle " data-bs-target="#sidebar"></i><span>Installer</span>
                                </Link>
                                <Link to='/forms-elements'>
                                    <i className="bi bi-circle " data-bs-target="#sidebar"></i><span>Extensions</span>
                                </Link>
                                <Link to='/forms-elements'>
                                    <i className="bi bi-circle " data-bs-target="#sidebar"></i><span>Startup</span>
                                </Link>
                                <Link to='/forms-elements'>
                                    <i className="bi bi-circle " data-bs-target="#sidebar"></i><span>Events</span>
                                </Link>
                                <Link to='/forms-elements'>
                                    <i className="bi bi-circle " data-bs-target="#sidebar"></i><span>Cron Jobs</span>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    {/* <!-- End Forms Nav --> */}

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="/">
                            <i className="bi bi-laptop-fill"></i><span>Design</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/GeneralTable">
                                    <i className="bi bi-circle"></i><span>Layouts</span>
                                </Link>
                                <Link to="/GeneralTable">
                                    <i className="bi bi-circle"></i><span>Theme Editor</span>
                                </Link>
                                <Link to="/GeneralTable">
                                    <i className="bi bi-circle"></i><span>Language Editor</span>
                                </Link>
                                <Link to="/GeneralTable">
                                    <i className="bi bi-circle"></i><span>Banners</span>
                                </Link>
                                <Link to="/GeneralTable">
                                    <i className="bi bi-circle"></i><span>SEO URL</span>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    {/* <!-- End Tables Nav --> */}

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="/">
                            <i className="bi bi-cart-fill"></i><span>Sales</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="charts-nav" className="nav-content collapse     " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Orders</span>
                                </Link>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Subscriptions</span>
                                </Link>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Returns</span>
                                </Link>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Gift Vouchers</span>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#chart-nav" data-bs-toggle="collapse" href="/">
                            <i className="bi bi-person-fill"></i><span>Customers</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="chart-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Customers</span>
                                </Link>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Customers Groups</span>
                                </Link>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Customers Approvals</span>
                                </Link>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>GDPR</span>
                                </Link>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Custom Fields</span>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#char-nav" data-bs-toggle="collapse" href="/">
                            <i className="bi bi-share-fill"></i><span>Marketing</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="char-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Affiliate</span>
                                </Link>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Marketing</span>
                                </Link>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Coupons</span>
                                </Link>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Mail</span>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#cha-nav" data-bs-toggle="collapse" href="/">
                            <i className="bi bi-gear-fill"></i><span>System</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="cha-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Settings</span>
                                </Link>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Users</span>
                                </Link>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Localisation</span>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#ch-nav" data-bs-toggle="collapse" href="/">
                            <i className="bi bi-gear-fill"></i><span>Reports</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="ch-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Reports</span>
                                </Link>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Who's Online</span>
                                </Link>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Statistics</span>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    {/* <!-- End Charts Nav --> */}




                </ul>
            </aside>

            {/* <!-- End Sidebar--> */}
        </>
    )
}

export default Aside
