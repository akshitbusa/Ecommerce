import React from 'react'
import Header from '../Header'
import { Link, Navigate } from 'react-router-dom'
import Footer from '../../Footer'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Data from './Data'
import General from './General'
import Seo from './Seo'
import { Tabs } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";



const Addcategorie = () => {

    const [value, setValue] = React.useState('1');
    const navigate = useNavigate();


    const { category, description, metatitle, metadescription, metakeywords, parent, filters, stores, status, columns, sortorder, keywords } = useSelector(state => state.dataSave)
    const { image } = useSelector(state => state.Image)

    const dispatch = useDispatch()

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };


    const sendData = async (e) => {
        e.preventDefault();
        console.log('test', image);
        const form_data = new FormData();
        form_data.append("category", category);
        form_data.append("description", description);
        form_data.append("metatitle", metatitle);
        form_data.append("metadescription", metadescription);
        form_data.append("metakeywords", metakeywords);
        form_data.append("parent", parent);
        form_data.append("filters", filters);
        form_data.append("stores", stores);
        form_data.append("images", image);
        form_data.append("status", status);
        form_data.append("columns", columns);
        form_data.append("sortorder", sortorder);
        form_data.append("keywords", keywords);

        for (var pair of form_data.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }




        if (!category || !metatitle || !sortorder) {
            alert('fill required filled')
        } else {
            const res = await fetch('/general', {
                method: "POST",
                headers: {
                    // "Content-Type": "multipart/form-data;boundary='MyBoundary'",
                    // "Content-Type": "application/json"

                },
                body: form_data,
            })



            const data = await res;
            console.log(data, "data");


            if (data.status === 200) {
                console.log('success');
                window.alert(' data save')
                dispatch({ type: "SEODATASAVE", payload: '' })
                dispatch({ type: "SECONDDATASAVE", parent: '' })
                dispatch({ type: "filtersDatasave", payload: '' })
                dispatch({ type: "storesDatasave", payload: '' })
                dispatch({ type: "imagesDatasave", payload: {} })
                dispatch({ type: "columnsDatasave", payload: '' })
                dispatch({ type: "sortorderDatasave", payload: '' })
                dispatch({ type: "categoryDatasave", payload: '' })
                dispatch({ type: "descriptionDatasave", payload: '' })
                dispatch({ type: "metatitleDatasave", payload: '' })
                dispatch({ type: "metadescriptionDatasave", payload: '' })
                dispatch({ type: "metakeywordsDatasave", payload: '' })
                dispatch({ type: "sortorderDatasave", payload: '' })
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

export default Addcategorie
