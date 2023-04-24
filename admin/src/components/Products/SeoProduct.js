import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SeoProduct = () => {


    // const { keywords } = useSelector(state => state.dataSave)
    // console.log(keywords);
    // const dispatch = useDispatch()

    // const addData = (e) => {
    //     console.log(e);
    //     dispatch({
    //         type: 'SEODATASAVE',
    //         payload: e
    //     })
    // }

    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <table className='table table-bordered' style={{ opacity: '0.9' }}>
                        <thead>
                            <tr>
                                <th>Stores</th>
                                <th>Keywords</th>
                            </tr>
                            <tr>

                                <td className='text-start  col-3' >
                                    <label> <span>Default </span></label>

                                </td>
                                <td className=' col-9'>
                                    <input className='col-11' placeholder='Keywords'  />

                                </td>
                            </tr>
                        </thead>

                    </table>
                </div>

            </div>
        </>
    )
}

export default SeoProduct