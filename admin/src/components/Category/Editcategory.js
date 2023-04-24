import React from 'react'
import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../Footer'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Data from './Data'
import General from './General'
import Seo from './Seo'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'



const Editcategory = () => {

    const [value, setValue] = React.useState('1');

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const { _id } = useSelector(state => state.dataSave)
    console.log("123", _id);


    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };


    const takeData = async () => {
        const res = await fetch('/compare', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                _id
            })
        })
        const save = await res.json()
        // console.log('save', save.images);
        dispatch({ type: "SEODATASAVE", payload: save.keywords })
        dispatch({ type: "SECONDDATASAVE", parent: save.parent })
        dispatch({ type: "filtersDatasave", payload: save.filters })
        dispatch({ type: "storesDatasave", payload: save.stores })
        dispatch({ type: "imagesDatasave", payload: save.images })
        dispatch({ type: "columnsDatasave", payload: save.columns })
        dispatch({ type: "sortorderDatasave", payload: save.sortorder })
        dispatch({ type: "statusDatasave", payload: save.status })
        dispatch({ type: "categoryDatasave", payload: save.category })
        dispatch({ type: "descriptionDatasave", payload: save.description })
        dispatch({ type: "metatitleDatasave", payload: save.metatitle })
        dispatch({ type: "metadescriptionDatasave", payload: save.metadescription })
        dispatch({ type: "metakeywordsDatasave", payload: save.metakeywords })
    }


    useEffect(() => {
        takeData()
    }, [])


    const { category, description, metatitle, metadescription, metakeywords, parent, filters, stores, status, columns, sortorder, keywords } = useSelector(state => state.dataSave)
    const { image } = useSelector(state => state => state.Image)
    const sendData = async (e) => {
        e.preventDefault();

        if (!category || !metatitle || !sortorder) {
            alert('fill required filled')
        } else {
            const res = await fetch('/update', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    category, description, metatitle, metadescription, metakeywords, parent, filters, stores, image, status, columns, sortorder, keywords, _id
                })
            })
            const data = await res;
            // console.log('data123456', data);
            if (data.status === 200) {
                console.log('success');
                window.alert(' data save')
                dispatch({ type: "SEODATASAVE", payload: '' })
                dispatch({ type: "SECONDDATASAVE", parent: '' })
                dispatch({ type: "filtersDatasave", payload: '' })
                dispatch({ type: "storesDatasave", payload: '' })
                dispatch({ type: "imagesDatasave", payload: '' })
                dispatch({ type: "columnsDatasave", payload: '' })
                dispatch({ type: "sortorderDatasave", payload: '' })
                dispatch({ type: "categoryDatasave", payload: '' })
                dispatch({ type: "descriptionDatasave", payload: '' })
                dispatch({ type: "metatitleDatasave", payload: '' })
                dispatch({ type: "metadescriptionDatasave", payload: '' })
                dispatch({ type: "metakeywordsDatasave", payload: '' })
                navigate('/Categories')

            } else {
                console.log('invalid data');
                window.alert('invalid data')
            }
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
                                <li className="breadcrumb-item"><Link to='/admin'>Home</Link> <span>| Categories</span></li>
                            </ol>
                        </div>
                        <div className='col-6'>
                            <ol className="breadcrumb">
                                <li className='col-12 text-end'>
                                    <Link to='/Add'>
                                        <button type="button" className="btn btn-primary btn-sm " style={{ marginRight: '4px' }} onClick={sendData}> Save</button>
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
                    <thead>
                        <tr>
                            <th>
                                <Box sx={{ width: '100%', typography: 'body1' }}>
                                    <TabContext value={value} keepTabsMounted='true'>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                <Tab label='General' value="1" />
                                                <Tab label="Data" value="2" />
                                                <Tab label="Seo" value="3" />
                                            </TabList>
                                        </Box>
                                        <TabPanel value="1">{<General />}</TabPanel>
                                        <TabPanel value="2">{<Data />}</TabPanel>
                                        <TabPanel value="3">{<Seo />}</TabPanel>
                                    </TabContext>
                                </Box>
                            </th>
                        </tr>
                    </thead>
                </table>
            </main>
            <Footer />
        </>
    )
}

export default Editcategory
