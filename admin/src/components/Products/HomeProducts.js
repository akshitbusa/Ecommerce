import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'

const HomeProducts = () => {
    return (
        <>
            <Header />
            <main id="main" className="main">
                <div className="pagetitle">
                    <div className='row'>

                        <div className='col-6'>
                            <h1>Products</h1>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/dashboard'>Home</Link> <span>| Products</span></li>

                            </ol>


                        </div>
                        <div className='col-6'>

                            <ol className="breadcrumb">
                                <li className='col-12 text-end'>
                                    <Link to='/AddProducts'>

                                        <button type="button" className="btn btn-primary btn-sm " style={{ marginRight: '4px' }}> Add</button>
                                    </Link>

                                    {/* <button type="button" className="btn btn-danger btn-sm">Delete</button> */}
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="card info-card sales-card" >


                    <div className="card-body">
                        <div className='row'>
                            <div className="d-flex align-items-center">
                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center ">
                                    <i className="bi bi-card-list"></i>
                                </div>
                                <div className="col-9" style={{ marginLeft: '20px' }}>
                                    <h6 className='card-title'>Products List</h6>

                                </div>
                                <div></div>
                            </div>
                        </div>


                        <div className="d-flex align-items-center">
                            <div className="text-center col-12 mt-2 mb-0">
                                <div className='row'>

                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col" className='col-sm-1'>  Image </th>
                                                <th scope="col" className='col-sm-2'>Product Name</th>
                                                <th scope="col" className='col-sm-2'>Model</th>
                                                <th scope="col" className='col-sm-1'>Price</th>
                                                <th scope="col" className='col-sm-1'>Quantity</th>
                                                <th scope="col" className='col-sm-1'>Action</th>
                                            </tr>

                                        </thead>
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>


            </main>
            <Footer />
        </>
    )
}

export default HomeProducts
