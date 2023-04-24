import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const General = () => {

    const { category, description, metatitle, metadescription, metakeywords } = useSelector(state => state.dataSave)

    const { iddata } = useSelector(state => state.dataSave)
    console.log(iddata);


    const dispatch = useDispatch()

    const Category = (e) => {
        console.log(e);
        dispatch({
            type: "categoryDatasave",
            payload: e
        })
    }
    const Description = (e) => {
        console.log(e);
        dispatch({
            type: "descriptionDatasave",
            payload: e
        })
    }
    const MetaTagTitle = (e) => {
        console.log(e);
        dispatch({
            type: "metatitleDatasave",
            payload: e
        })
    }
    const MetaTagDescription = (e) => {
        console.log(e);
        dispatch({
            type: "metadescriptionDatasave",
            payload: e
        })
    }
    const MetaTagKeywords = (e) => {
        console.log(e);
        dispatch({
            type: "metakeywordsDatasave",
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
                                    <label> <span style={{ color: 'red' }}>*</span><span>Category Name  </span></label>
                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='Category Name' onChange={(e) => { Category(e.target.value) }} value={category} />
                                </td>
                            </tr>
                            <tr>

                                <td className=' col-3' >
                                    <div className='col-12 text-md-end text-center' style={{ marginTop: '-92px' }}>
                                        <label>Description  </label>
                                    </div> </td>
                                <td className='col-8'>
                                    <textarea className='col-11' placeholder='Description' style={{ marginLeft: '11px', height: '83px' }} onChange={(e) => { Description(e.target.value) }} value={description}
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>

                                <td className='text-end col-3' >
                                    <label> <span style={{ color: 'red' }}>*</span><span>Meta Tag Title </span></label>
                                </td>
                                <td className='col-8'>
                                    <input className='col-11' placeholder='Meta Tag Title' onChange={(e) => { MetaTagTitle(e.target.value) }} value={metatitle} />
                                </td>
                            </tr>
                            <tr>

                                <td className=' col-3' >
                                    <div className='col-12 text-md-end text-center' style={{ marginTop: '-92px' }}>
                                        <label >Meta Tag Description  </label>
                                    </div> </td>
                                <td className='col-8'>
                                    <textarea className='col-11' style={{ marginLeft: '11px', height: '83px' }} placeholder='Meta Tag Description' onChange={(e) => { MetaTagDescription(e.target.value) }} value={metadescription}
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>

                                <td className=' col-3' >
                                    <div className='col-12 text-md-end text-center' style={{ marginTop: '-92px' }}>
                                        <label >Meta Tag Keywords  </label>
                                    </div> </td>
                                <td className='col-8'>
                                    <textarea className='col-11' style={{ marginLeft: '11px', height: '83px' }} placeholder='Meta Tag Keywords' onChange={(e) => { MetaTagKeywords(e.target.value) }} value={metakeywords}
                                    ></textarea>
                                </td>
                            </tr>
                        </thead>

                    </table>
                </div>

            </div>
        </>
    )
}

export default General
