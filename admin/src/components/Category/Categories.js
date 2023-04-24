import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'
import Header from '../Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Categories = () => {
    const [data, setData] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log('data', data);
    const callAbout = async () => {
        try {

            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    
                },
                credentials: "include"

            })
            console.log('response')
            const data = await res.json();
            // console.log("data123", (data[3].images));
            // const url = window.URL.createObjectURL(data[3].images)
            // console.log(url);
            setData(data)
            // console.log(data[0].category)
            // console.log(data.metaTitle)

            if (res.status === 200) {
                console.log('done');

            }

        } catch (e) {
            console.log(e);
            // navigate('/Login')
        }
    }

    useEffect(() => {
        callAbout();
    }, [])


    const dataEdit = (e) => {
console.log(e);
        dispatch({
            type: "editData",
            payload: e
        })
        navigate('/Editcategory')

    }
    const dataDelete = async (e) => {

        try {
            const _id = await e;
            console.log(_id);

            const res = await fetch('/delete', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    _id
                })
            })

            const data = await res
            console.log(data);
            if (data.status == 200) {
                alert('data delete')
                window.location.reload() 
            } else {

            }
        } catch (e) {
            console.log(e);
        }


    }

    return (
        <>
            <Header />
            <main id="main" className="main">
                <div className="pagetitle">
                    <div className='row'>

                        <div className='col-6'>
                            <h1>Categories</h1>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/dashboard'>Home</Link> <span>| Categories</span></li>

                            </ol>


                        </div>
                        <div className='col-6'>

                            <ol className="breadcrumb">
                                <li className='col-12 text-end'>
                                    <Link to='/Add'>

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
                                    <h6 className='card-title'>Category List</h6>

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
                                                <th scope="col" className='text-start col-8'>  Category List

                                                </th>
                                                <th scope="col">Sort Order</th>
                                                <th scope="col">Action</th>
                                            </tr>

                                        </thead>
                                        <tbody>

                                            {data?.map((e) => {
                                                return <tr>

                                                    <td className='text-start'>

                                                        {e.category}
                                                    </td>
                                                    <td>
                                                        {e.sortorder}
                                                    </td>
                                                    <td>
                                                        <button className='btn btn-primary btn-sm' style={{ marginRight: '5px' }} onClick={() => { dataEdit(e._id) }}><i className="bi bi-pencil"></i></button>
                                                        <button className='btn btn-danger btn-sm ' onClick={() => { dataDelete(e._id) }}><i className="bi bi-archive-fill"></i></button>
                                                    </td>
                                                    {/* <td>
                                                        {e.images}
                                                        {console.log(e.images)}
                                                    </td> */}
                                                </tr>
                                            })}

                                        </tbody>
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

export default Categories