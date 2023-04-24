import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'

const Design = () => {
    return (
        <>
            <Header />
            <main id="main" className="main">
                <div className="pagetitle">
                    <div className='row'>

                        <div className='col-6'>
                            <h1>Categories</h1>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/admin'>Home</Link> <span>| Categories</span></li>

                            </ol>


                        </div>
                        <div className='col-6'>
                            <ol className="breadcrumb">
                                <li className='col-12 text-end'>
                                    <Link to='/Add'>

                                        <button type="button" className="btn btn-primary btn-sm " style={{ marginRight: '4px' }}> Save</button>
                                    </Link>

                                    <Link to='/Categories'>
                                        <button type="button" className="btn btn-info btn-sm"><i className="bi bi-skip-backward"></i></button>
                                    </Link>

                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th><i className="bi bi-pencil"></i><span style={{ marginLeft: '10px', fontSize: '18px' }}> Add Category</span></th>
                        </tr>
                    </thead>
                    <thead style={{ opacity: '0.8' }}>
                        <tr>
                            <th >
                                <Link to='/Add'>      <button type="button" class="btn btn ">General</button></Link>
                                <Link to='/Data'>    <button type="button" class="btn btn ">Data</button></Link>
                                <Link to="/Seo">     <button type="button" class="btn btn ">SEO </button></Link>
                                <Link to='/Design'>     <button type="button" class="btn btn active">Design</button></Link>
                            </th>

                        </tr>
                        <tr>
                            <th style={{ fontSize: '15px' }}><i className="bi bi-globe"></i><span style={{ marginLeft: '10px' }}>English</span></th>
                        </tr>
                        <tr>
                            <th className='text-center'>
                                <label> Parent </label>
                                <input className='col-7 ' style={{ marginLeft: '28px' }} placeholder='Parent '></input>
                            </th>
                        </tr>
                        <tr>
                            <th className='text-center'>
                                <label> Filters </label>
                                <input className='col-7 ' style={{ marginLeft: '28px' }} placeholder='Filters'></input>
                            </th>
                        </tr>
                        <tr>
                            <th className='text-center'>
                                <label> Stores </label>
                                <input className='col-7 ' style={{ marginLeft: '28px' }} placeholder='Stores'></input>
                            </th>
                        </tr>
                        <tr>
                            <th className='text-center'>
                                <label> image </label>
                                <input className='col-7 ' style={{ marginLeft: '28px' }} placeholder='image'></input>
                            </th>
                        </tr>
                        <tr>
                            <th className='text-center'>
                                <label> Columns </label>
                                <input className='col-7 ' style={{ marginLeft: '28px' }} placeholder='Columns'></input>
                            </th>
                        </tr>
                        <tr>
                            <th className='text-center'>
                                <label> Sort Order </label>
                                <input className='col-7 ' style={{ marginLeft: '28px' }} placeholder='Sort Order'></input>
                            </th>
                        </tr>
                        <tr>
                            <th className='text-center'>
                                <label> Status </label>
                                <input className='col-7 ' style={{ marginLeft: '28px' }} placeholder='enabled or disabled'></input>


                            </th>
                        </tr>
                    </thead>

                </table>
            </main>
            <Footer />
        </>
    )
}

export default Design
