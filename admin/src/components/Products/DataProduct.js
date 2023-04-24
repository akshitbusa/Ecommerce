import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const DataProduct = () => {
    const dispatch = useDispatch()
    const { Model, SKU, UPC, EAN, JAN, ISBN, MPN, Location, Price, Taxclass, Quantity, MinimumQuantity, Length, Width, Height, LengthClass, Weight, WeightClass, Status, SortOrder } = useSelector(state => state.addProduct)

    const model = (e) => {
        dispatch({
            type: "Model",
            payload: e.target.value
        })
    }
    const sKU = (e) => {
        dispatch({
            type: "SKU",
            payload: e.target.value
        })
    }

    const uPC = (e) => {
        dispatch({
            type: "UPC",
            payload: e.target.value
        })
    }
    const eAN = (e) => {
        dispatch({
            type: "EAN",
            payload: e.target.value
        })
    }
    const jAN = (e) => {
        dispatch({
            type: "JAN",
            payload: e.target.value
        })
    }
    const iSBN = (e) => {
        dispatch({
            type: "ISBN",
            payload: e.target.value
        })
    }
    const mPN = (e) => {
        dispatch({
            type: "MPN",
            payload: e.target.value
        })
    }
    const location = (e) => {
        dispatch({
            type: "Location",
            payload: e.target.value
        })
    }
    const price = (e) => {
        dispatch({
            type: "Price",
            payload: e.target.value
        })
    }
    const taxclass = (e) => {
        dispatch({
            type: "Taxclass",
            payload: e.target.value
        })
    }
    const quantity = (e) => {
        dispatch({
            type: "Quantity",
            payload: e.target.value
        })
    }
    const minimumQuantity = (e) => {
        dispatch({
            type: "MinimumQuantity",
            payload: e.target.value
        })
    }
    const length = (e) => {
        dispatch({
            type: "Length",
            payload: e.target.value
        })
    }
    const width = (e) => {
        dispatch({
            type: "Width",
            payload: e.target.value
        })
    }
    const height = (e) => {
        dispatch({
            type: "Height",
            payload: e.target.value
        })
    }
    const lengthClass = (e) => {
        dispatch({
            type: "LengthClass",
            payload: e.target.value
        })
    }
    const weight = (e) => {
        dispatch({
            type: "Weight",
            payload: e.target.value
        })
    }
    const weightClass = (e) => {
        dispatch({
            type: "WeightClass",
            payload: e.target.value
        })
    }
    const status = (e) => {
        dispatch({
            type: "Status",
            payload: e.target.value
        })
    }
    const sortOrder = (e) => {
        dispatch({
            type: "SortOrder",
            payload: e.target.value
        })
    }





    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <table className='table ' style={{ opacity: '0.9' }}>
                        <thead>
                            <tr>
                                <td style={{ opacity: 0.9 }} ><h4>Model</h4></td>
                                <td></td>
                            </tr>
                            <tr>

                                <td className='text-end  col-2' >
                                    <label> <span style={{ color: 'red' }}>*</span><span>Model </span></label>
                                </td>
                                <td className=' col-12'>
                                    <input className='col-11' placeholder='Model '
                                        onChange={model} value={Model}
                                    />
                                </td>
                            </tr>
                            <tr>

                                <td className='text-end  col-3' >
                                    <label> <span>SKU </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='SKU'
                                        onChange={sKU} value={SKU}
                                    />
                                </td>
                            </tr>
                            <tr>

                                <td className='text-end  col-3' >
                                    <label><span>UPC </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='UPC'
                                        onChange={uPC} value={UPC}
                                    />
                                </td>
                            </tr>
                            <tr>

                                <td className='text-end  col-3' >
                                    <label> <span>EAN  </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='EAN'
                                        onChange={eAN} value={EAN}
                                    />
                                </td>
                            </tr>
                            <tr>

                                <td className='text-end  col-3' >
                                    <label> <span>JAN  </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='JAN'
                                        onChange={jAN} value={JAN}
                                    />
                                </td>
                            </tr>
                            <tr>

                                <td className='text-end  col-3' >
                                    <label> <span>ISBN </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='ISBN'
                                        onChange={iSBN} value={ISBN} />
                                </td>
                            </tr>
                            <tr>

                                <td className='text-end  col-3' >
                                    <label> <span>MPN  </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='MPN'
                                        onChange={mPN} value={MPN}
                                    />
                                </td>
                            </tr>
                            <tr>

                                <td className='text-end  col-3' >
                                    <label> <span>Location </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='Location'
                                        onChange={location} value={Location}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ opacity: 0.9 }}  ><h4>Price</h4></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='text-end  col-3' >
                                    <label> <span>Price </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='Price' type='number'
                                        onChange={price} value={Price}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-end  col-3' >
                                    <label> <span>Tax class </span></label>
                                </td>
                                <td className=' col-9'>
                                    <select name="cars" id="cars" className='col-11' style={{ height: '29px', opacity: 0.8 }}
                                        onChange={taxclass} value={Taxclass}  >
                                        <option value="--None--">--None--</option>
                                        <option value="Taxable Goods">Taxable Goods</option>
                                        <option value="Downloadable Products">Downloadable Products </option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ opacity: 0.9 }}><h4>Stock</h4></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='text-end  col-3' >
                                    <label> <span>Quantity </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='Quantity' type="number"
                                        onChange={quantity} value={Quantity}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-end  col-3' >
                                    <label> <span>Minimum Quantity </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='Minimum Quantity' type="number"
                                        onChange={minimumQuantity} value={MinimumQuantity} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ opacity: 0.9 }}><h4>Specification</h4></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='text-end  col-3' >
                                    <label> <span>Dimensions (L x W x H) </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-3' placeholder='Length' type="number" onChange={length} value={Length} />
                                    <input className='col-3' placeholder='Width' type="number" onChange={width} value={Width} />
                                    <input className='col-3' placeholder='Height' type="number" onChange={height} value={Height} />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-end  col-3' >
                                    <label> <span>Length Class </span></label>
                                </td>
                                <td className=' col-9'>
                                    <select name="cars" id="cars" className='col-11' style={{ height: '29px', opacity: 0.8 }}
                                        onChange={lengthClass} value={LengthClass} >
                                        <option value="Centimeter">Centimeter</option>
                                        <option value="Millimeter">Millimeter</option>
                                        <option value="Inch ">Inch </option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-end  col-3' >
                                    <label> <span>Weight </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='Weight' type='number'
                                        onChange={weight} value={Weight}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-end  col-3' >
                                    <label> <span>Weight Class </span></label>
                                </td>
                                <td className=' col-9'>
                                    <select name="cars" id="cars" className='col-11' style={{ height: '29px', opacity: 0.8 }}
                                        onChange={weightClass} value={WeightClass}  >
                                        <option value="Kilogram">Kilogram</option>
                                        <option value="Gram">Gram</option>
                                        <option value="Pound">Pound </option>
                                        <option value="Ounce">Ounce </option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-end  col-3' >
                                    <label> <span>Status</span></label>
                                </td>
                                <td className=' col-9'>
                                    <select name="cars" id="cars" className='col-11' style={{ height: '29px', opacity: 0.8 }}
                                        onChange={status} value={Status} >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-end  col-3' >
                                    <label> <span>Sort Order </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='Sort Order' type='number'
                                        onChange={sortOrder} value={SortOrder}
                                    />
                                </td>
                            </tr>
                        </thead>

                    </table>
                </div>

            </div>
        </>
    )
}

export default DataProduct
