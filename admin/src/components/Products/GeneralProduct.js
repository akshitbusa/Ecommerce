import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const GeneralProduct = () => {


    const { ProductName, Description, MetaTagTitle, MetaTagDescription, MetaTagKeywords, ProductTags } = useSelector(state => state.addProduct)
    const dispatch = useDispatch()


    const productName = (e) => {
        dispatch({
            type: "ProductName",
            payload: e.target.value
        })
    }
    const description = (e) => {
        dispatch({
            type: "Description",
            payload: e.target.value
        })
    }
    const metaTagTitle = (e) => {
        dispatch({
            type: "MetaTagTitle",
            payload: e.target.value
        })
    }
    const metaTagDescription = (e) => {
        dispatch({
            type: "MetaTagDescription",
            payload: e.target.value
        })
    }
    const metaTagKeywords = (e) => {
        dispatch({
            type: "MetaTagKeywords",
            payload: e.target.value
        })
    }
    const productTags = (e) => {
        dispatch({
            type: "ProductTags",
            payload: e.target.value
        })
    }





    return (
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
                                <label> <span style={{ color: 'red' }}>*</span><span>Product Name  </span></label>
                            </td>
                            <td className=' col-9'>
                                <input className='col-11' placeholder='Product Name ' onChange={productName} value={ProductName} />
                            </td>
                        </tr>
                        <tr>
                            <td className=' col-3' >
                                <div className='col-12 text-md-end text-center' style={{ marginTop: '-92px' }}>
                                    <label>Description  </label>
                                </div> </td>
                            <td className='col-8'>
                                <textarea className='col-11' placeholder='Description' style={{ marginLeft: '11px', height: '83px' }}
                                    onChange={description} value={Description} ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-end col-3' >
                                <label> <span style={{ color: 'red' }}>*</span><span>Meta Tag Title </span></label>
                            </td>
                            <td className='col-8'>
                                <input className='col-11' placeholder='Meta Tag Title'
                                    onChange={metaTagTitle} value={MetaTagTitle} />
                            </td>
                        </tr>
                        <tr>
                            <td className=' col-3' >
                                <div className='col-12 text-md-end text-center' style={{ marginTop: '-92px' }}>
                                    <label >Meta Tag Description  </label>
                                </div> </td>
                            <td className='col-8'>
                                <textarea className='col-11' style={{ marginLeft: '11px', height: '83px' }} placeholder='Meta Tag Description'
                                    onChange={metaTagDescription} value={MetaTagDescription}  ></textarea>
                            </td>
                        </tr>
                        <tr>

                            <td className=' col-3' >
                                <div className='col-12 text-md-end text-center' style={{ marginTop: '-92px' }}>
                                    <label >Meta Tag Keywords  </label>
                                </div>
                            </td>
                            <td className='col-8'>
                                <textarea className='col-11' style={{ marginLeft: '11px', height: '83px' }} placeholder='Meta Tag Keywords'
                                    onChange={metaTagKeywords} value={MetaTagKeywords} ></textarea>
                            </td>
                        </tr>
                        <tr>

                            <td className='text-end col-3' >
                                <label> <span style={{ color: 'red' }}>*</span><span>Product Tags</span></label>
                            </td>
                            <td className='col-8'>
                                <input className='col-11' placeholder='Product Tags'
                                    onChange={productTags} value={ProductTags} />
                            </td>
                        </tr>
                    </thead>

                </table>
            </div>

        </div>
    )
}

export default GeneralProduct