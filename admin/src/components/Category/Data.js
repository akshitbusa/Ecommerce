import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Data = () => {
    const { parent, filters, stores, images, status, columns, sortorder, imgtemp } = useSelector(state => state.dataSave)
    const { image } = useSelector(state => state.Image)
    console.log("image123", image);
    const dispatch = useDispatch()




    const handleFileChange = (e) => {
        dispatch({
            type: "imagesDatasave",
            payload: e.target.files[0]
        })
    }
    const parentData = (e) => {
        console.log(e);
        dispatch({
            type: "SECONDDATASAVE",
            parent: e
        })
    }
    const Filters = (e) => {
        console.log(e);
        dispatch({
            type: "filtersDatasave",
            payload: e
        })
    }
    const Stores = (e) => {
        console.log(e);
        dispatch({
            type: "storesDatasave",
            payload: e
        })
    }

    const Columns = (e) => {
        console.log(e);
        dispatch({
            type: "columnsDatasave",
            payload: e
        })
    }
    const SortOrder = (e) => {
        console.log(e);
        dispatch({
            type: "sortorderDatasave",
            payload: e
        })
    }
    const Status = (e) => {
        console.log(e);
        dispatch({
            type: "statusDatasave",
            payload: e
        })
    }






    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <table className='table ' style={{ opacity: '0.9' }}>
                        <thead>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>

                                <td className='text-end  col-3' >
                                    <label> <span>Parent </span></label>

                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='Parent' onChange={(e) => { parentData(e.target.value) }} value={parent} />

                                </td>
                            </tr>
                            <tr>

                                <td className='text-end  col-3' >
                                    <label> <span>Filters </span></label>

                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='Filters' onChange={(e) => { Filters(e.target.value) }} value={filters} />

                                </td>
                            </tr>
                            <tr>

                                <td className='text-end col-3' >
                                    <label> <span>Stores </span></label>
                                </td>
                                <td className='col-8'>
                                    <select name="cars" id="cars" className='col-11' style={{ height: '29px' }} value={stores} onChange={Stores} >
                                        <option value="Account">Account</option>
                                        <option value="Affiliate">Affiliate</option>
                                        <option value="Category">Category</option>
                                        <option value="Checkout">Checkout</option>
                                        <option value="Contact">Contact</option>
                                        <option value="Default">Default</option>
                                        <option value="Home">Home</option>
                                        <option value="Information">Information</option>
                                        <option value="Product">Product</option>
                                        <option value="Search">Search</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>

                                <td className='text-end  col-3' >
                                    <label> <span>Images </span></label>

                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='Images' type='file' name='file' onChange={handleFileChange} value={images}
                                    />
                                    {/* <img alt="previewimage" src={image.preview} className='col-sm-5 col-10' /> */}

                                </td>
                            </tr>
                            <tr>

                                <td className='text-end  col-3' >
                                    <label> <span>Columns </span></label>

                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='Columns number' type='number' onChange={(e) => { Columns(e.target.value) }} value={columns} />

                                </td>
                            </tr>
                            <tr>

                                <td className='text-end  col-3' >
                                    <label>  <span style={{ color: 'red' }}>*</span><span>Sort Order </span></label>

                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='Sort Order number' type='number' onChange={(e) => { SortOrder(e.target.value) }} value={sortorder} required />

                                </td>
                            </tr>
                            <tr>

                                <td className='text-end  col-3' >
                                    <label> <span>Status </span></label>

                                </td>
                                <td className='col-8'>
                                    <select name="cars" id="cars" className='col-11' style={{ height: '29px' }} onChange={(e) => { Status(e.target.value) }} value={status}>
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </td>
                            </tr>
                        </thead>

                    </table>
                </div>

            </div>
        </>
    )
}

export default Data
