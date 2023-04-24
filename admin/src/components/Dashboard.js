import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Map from './Map'
import Chart from './Chart'
import Footer from '../Footer'


const Dashboard = () => {


    let style =
    {
        color: 'white',
        backgroundColor: ' #1b80c2'
    }
    return (
        <>
            <Header />
            <main id="main" className="main" style={{ overflow: "hidden" }}>
                <div className="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">Home</li>

                        </ol>
                    </nav>
                </div>

                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-xxl-3 col-md-6">
                                    <div className="card info-card sales-card " style={style}>


                                        <div className="card-body">
                                            <div className='row'>

                                                <h5 className="card-title col-8" style={style}>TOTAL ORDERS</h5>
                                                <div className='card-title text-end col-3' style={style}>0%</div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center ">
                                                    <i className="bi bi-cart"></i>
                                                </div>
                                                <div className="col-9 text-end">
                                                    <h6 style={style}>145</h6>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='offset-1'>

                                                <Link style={style}>View More...</Link>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-6">
                                    <div className="card info-card sales-card" style={style}>


                                        <div className="card-body">
                                            <div className='row'>

                                                <h5 className="card-title col-8" style={style}>TOTAL SALES</h5>
                                                <div className='card-title text-end col-3' style={style}>0%</div>
                                            </div>


                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center ">
                                                    <i className="bi bi-credit-card"></i>
                                                </div>
                                                <div className="col-9 text-end">
                                                    <h6 style={style} >17.2K</h6>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='offset-1'>

                                                <Link style={style}>View More...</Link>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-6">
                                    <div className="card info-card sales-card" style={style}>


                                        <div className="card-body">
                                            <div className='row'>

                                                <h5 className="card-title col-8" style={style}>TOTAL CUSTOMERS</h5>
                                                <div className='card-title text-end col-3' style={style}>-8%</div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center ">
                                                    <i className="bi bi-person"></i>
                                                </div>
                                                <div className="col-9 text-end">
                                                    <h6 style={style}>145</h6>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='offset-1'>

                                                <Link style={style}>View More...</Link>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-6">
                                    <div className="card info-card sales-card" style={style}>


                                        <div className="card-body">
                                            <h5 className="card-title" style={style}>PEOPLE ONLINE</h5>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center ">
                                                    <i className="bi bi-people"></i>
                                                </div>
                                                <div className="col-9 text-end">
                                                    <h6 style={style}>145</h6>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='offset-1'>

                                                <Link style={style}>View More...</Link>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className="col-xxl-6 col-md-12 col-lg-6">
                                    <div className="card info-card sales-card" >


                                        <div className="card-body" >
                                            <div className='row' >
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center ">
                                                        <i className="bi bi-globe-asia-australia"></i>
                                                    </div>
                                                    <div className="col-9  " style={{ marginLeft: '24px' }}>
                                                        <h6 className='card-title'>World Map</h6>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center text-center justify-content-center" >
                                                <div className=' col-9   text-center mt-lg-4 ' >
                                                    <Map />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xxl-6 col-md-12 col-lg-6" >
                                    <div className="card info-card sales-card" >


                                        <div className="card-body " >
                                            <div className='row'>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center ">
                                                        <i className="bi bi-bar-chart-line"></i>
                                                    </div>
                                                    <div className="col-9  " style={{ marginLeft: '24px' }}>
                                                        <h6 className='card-title'>Sales Analytics</h6>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                            </div>
                                            <div className='col-12'>
                                                <Chart />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card sales-card" >


                                        <div className="card-body">
                                            <div className='row'>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center ">
                                                        <i className="bi bi-calendar"></i>
                                                    </div>
                                                    <div className="col-9" style={{ marginLeft: '20px' }}>
                                                        <h6 className='card-title'>Recent Activity</h6>

                                                    </div>
                                                </div>
                                            </div>


                                            <div className="d-flex align-items-center">
                                                <div className="text-center col-12 mt-2 mb-0">
                                                    <div className='text-center'>No results!</div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xxl-8 col-md-6">
                                    <div className="card info-card sales-card" >


                                        <div className="card-body">
                                            <div className='row'>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center ">
                                                        <i className="bi bi-cart"></i>
                                                    </div>
                                                    <div className="col-9" style={{ marginLeft: '20px' }}>
                                                        <h6 className='card-title'>Latest Orders</h6>

                                                    </div>
                                                </div>
                                                <div className='row mt-4'>
                                                    <table className="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">OrderId</th>
                                                                <th scope="col">Customer</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col">Data Added</th>
                                                                <th scope="col">Total</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                                <td>@mdo</td>
                                                                <td><Link to=''>

                                                                    <button type="button" className="btn btn-primary btn-sm"><i className="bi bi-eye"></i></button>
                                                                </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2</th>
                                                                <td>Jacob</td>
                                                                <td>Thornton</td>
                                                                <td>@fat</td>
                                                                <td>@fat</td>
                                                                <td><Link to=''>

                                                                    <button type="button" className="btn btn-primary btn-sm"><i className="bi bi-eye"></i></button>
                                                                </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">3</th>
                                                                <td >Larry the Bird</td>
                                                                <td>@twitter</td>
                                                                <td>@twitter</td>
                                                                <td>@twitter</td>
                                                                <td><Link to=''>

                                                                    <button type="button" className="btn btn-primary btn-sm"><i className="bi bi-eye"></i></button>
                                                                </Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>




                            </div>
                        </div>



                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default Dashboard
