import React, { useEffect, useState } from 'react'

const ImageProduct = () => {


    const [rows, setRows] = useState([
        { id: 1 }
    ]);

    const [imageFile, setImageFile] = useState(null);
    const [count, setCount] = useState(0)
    const [image, setImage] = useState(null);
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [url, setUrl] = useState({
        url: '',
        url1: '',
        url2: '',
        url3: '',
        url4: ''
    })


    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        setImageFile(selectedFile);
    };

    const imageChange = (e, row) => {
        console.log("aa", row);

        const data = e.target.files[0]
        if (row === 1) {
            setImage(data)
            setUrl({
                url: URL.createObjectURL(data)
            })

        }
        if (row === 2) {
            setImage1(data)
            setUrl({
                url1: URL.createObjectURL(data)
            })
        }
        if (row === 3) {
            setImage2(data)
            setUrl({
                url2: URL.createObjectURL(data)
            })
        }
        if (row === 4) {
            setImage3(data)
            setUrl({
                url3: URL.createObjectURL(data)
            })
        }
        if (row === 5) {
            alert('photo add limit')
            var id = 5
            deleteRow(id)
        }

    }



    const addDeatil = () => {
        console.log(rows);
        if (rows.length === 4) {
            alert('row limit 5')
        } else {

            setCount()
            const newRow = { id: rows.length + 1 };
            setRows([...rows, newRow]);
        }

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
                    <table className='table'>
                        <thead>
                            <tr>
                                <td style={{ opacity: 0.9 }} ><h4>Image</h4></td>
                                <td></td>
                                <td></td>

                            </tr>
                            <tr className='col-12'>
                                <td className='col-7'>

                                    <input type="file" accept="image/*" onChange={handleImageChange} className='col-12 img-fluid' />
                                    <br></br>
                                    {imageFile && (
                                        <img src={URL.createObjectURL(imageFile)} alt="SelectedImage" className='col-12 img-fluid' />
                                    )}

                                </td>

                            </tr>


                        </thead>

                    </table>
                    <tr>
                        <td style={{ opacity: 0.9 }} ><h4>Additional Images</h4></td>
                        <td></td>
                        <td></td>

                    </tr>
                    <table className='table table-bordered' style={{ opacity: " 0.9" }}>
                        <thead>
                            <tr>
                                <th className='col-5'>
                                    Image</th>
                                <th className='col-5'>	Sort Order</th>
                                <th className='col-1'></th>
                            </tr>
                        </thead>
                        <tbody id='show'>
                            {rows.map(row => (
                                <tr key={row.id}>
                                    <td>
                                        <input type="file" accept="image/*" onChange={(e) => imageChange(e, row.id)} className='col-12 img-fluid' />
                                        <br></br>
                                        {
                                            [url].map((data) => {
                                                if (row.id === 1) {
                                                    return <img src={data.url} alt="SelectedImage" className='col-12 img-fluid' />
                                                }
                                                if (row.id === 2) {

                                                    return <>
                                                        <img src={data.url1} alt="SelectedImage" className='col-12 img-fluid' />
                                                    </>
                                                }
                                                if (row.id === 3) {
                                                    return <img src={data.url2} alt="SelectedImage" className='col-12 img-fluid' />
                                                }
                                                if (row.id === 4) {
                                                    return <img src={data.url3} alt="SelectedImage" className='col-12 img-fluid' />
                                                }
                                            })
                                        }
                                        {/* {image && (
                                            <img src={url} alt="SelectedImage" className='col-12 img-fluid' />
                                        )} */}
                                        {/* <img src={url.url} alt="SelectedImage" className='col-12 img-fluid' /> */}
                                    </td>
                                    <td>

                                        <textarea className='col-11' placeholder='Description' style={{ marginLeft: '11px', height: '83px' }}>
                                        </textarea>

                                    </td>

                                    <td className='text-center'><button onClick={() => deleteRow(row.id)} className="btn btn-danger" style={{ marginTop: "25px" }}><i className="bi bi-trash3"></i></button>
                                    </td>
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

                </div>
            </div>

        </>
    )
}

export default ImageProduct
