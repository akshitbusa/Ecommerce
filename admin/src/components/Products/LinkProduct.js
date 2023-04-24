import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const LinkProduct = () => {

    const { Manufacturer, Categories, Filters, Stores, Downloads, RelatedProducts } = useSelector(state => state.addProduct)
    const dispatch = useDispatch()

    const manufacturer = (e) => {
        dispatch({
            type: "Manufacturer",
            payload: e.target.value
        })
    }
    const categories = (e) => {
        dispatch({
            type: "Categories",
            payload: e.target.value
        })
    }
    const filters = (e) => {
        dispatch({
            type: "Filters",
            payload: e.target.value
        })
    }
    const stores = (e) => {
        dispatch({
            type: "Stores",
            payload: e.target.value
        })
    }
    const downloads = (e) => {
        dispatch({
            type: "Downloads",
            payload: e.target.value
        })
    }
    const relatedProducts = (e) => {
        dispatch({
            type: "RelatedProducts",
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
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>

                                <td className='text-end  col-3' >
                                    <label> <span>Manufacturer  </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='Manufacturer '
                                        onChange={manufacturer} value={Manufacturer} />
                                </td>
                            </tr>
                            <tr>

                                <td className='text-end  col-3' >
                                    <label> <span>Categories  </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='Categories '
                                        onChange={categories} value={Categories}
                                    />
                                </td>
                            </tr>
                            <tr>

                                <td className='text-end  col-3' >
                                    <label> <span>Filters  </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='Filters '
                                        onChange={filters} value={Filters}
                                    />
                                </td>
                            </tr>
                            <tr>

                                <td className='text-end  col-3' >
                                    <label> <span>Stores  </span></label>
                                </td>
                                <td className=' col-9'>
                                    <select name="cars" id="cars" className='col-11' style={{ height: '29px' }}
                                        onChange={stores} value={Stores}>
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
                                    <label> <span>Downloads  </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='Downloads '
                                        onChange={downloads} value={Downloads}
                                    />
                                </td>
                            </tr>
                            <tr>

                                <td className='text-end  col-3' >
                                    <label> <span>Related Products  </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='Related Products  '
                                        onChange={relatedProducts} value={RelatedProducts}
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

export default LinkProduct
