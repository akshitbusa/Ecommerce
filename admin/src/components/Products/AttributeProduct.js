import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const AttributeProduct = () => {
    const dispatch = useDispatch()
    const { Attribute } = useSelector(state => state.addProduct)
    const [rows, setRows] = useState([
        { id: 1 }
    ]);


    const product = (e, id) => {
        console.log(e.target.value, id);
        dispatch({
            type: "Attribute",
            payload: { id: id, value: e.target.value }
        })
    }


    console.log(Attribute);
    const addDeatil = () => {
        const newRow = { id: rows.length + 1 };
        setRows([...rows, newRow]);
        dispatch({
            type: "tableRow",
            payload: { id: rows.length + 1, value: '' }
        })

    }
    const deleteRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };


    useEffect(() => {
        return () => {
            setRows([]);
        };
    }, []);



    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <table className='table table-bordered' style={{ opacity: '0.9' }}>
                        <thead>
                            <tr>
                                <th className='col-5'> Attribute</th>
                                <th className='col-5'>Text</th>
                                <th className='col-1'></th>
                            </tr>
                        </thead>
                        <tbody id='show'>
                            {rows.map(row => (
                                <tr key={row.id}>
                                    <td>  <input className='col-11' placeholder='Product Name' onMouseLeave={(e) => { product(e, row.id) }}

                                    /></td>
                                    <td> <textarea className='col-11' placeholder='Description' style={{ marginLeft: '11px', height: '83px' }}
                                    ></textarea></td>
                                    <td className='text-center'><button onClick={() => deleteRow(row.id)} className="btn btn-danger" style={{ marginTop: "25px" }}><i className="bi bi-trash3"></i></button></td>
                                </tr>
                            ))}     
                            <tr>
                                <td></td>
                                <td></td>
                                <td className='text-center'>

                                    <button className='btn  btn-primary ' onClick={addDeatil}><i className="bi bi-plus-square "></i></button>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                    <div className='text-end'>

                    </div>
                </div>

            </div>
        </>
    )
}

export default AttributeProduct
