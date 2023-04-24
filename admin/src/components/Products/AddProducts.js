import React from 'react'
import Header from './../Header'
import { Link, Navigate } from 'react-router-dom'
import Footer from '../../Footer'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { AlertTitle, Tabs } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import GeneralProduct from './GeneralProduct'
import DataProduct from './DataProduct'
import LinkProduct from './LinkProduct'
import AttributeProduct from './AttributeProduct'
import OptionProduct from './OptionProduct'
import SpecialProduct from './SpecialProduct'
import ImageProduct from './ImageProduct'
import SeoProduct from './SeoProduct'






const AddProducts = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            <Header />
            <main id="main" className="main">
                <div className="pagetitle">
                    <div className='row'>

                        <div className='col-6'>
                            <h1>Products</h1>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/dashboard'>Home</Link> <span>| products</span></li>

                            </ol>


                        </div>
                        <div className='col-6'>
                            <ol className="breadcrumb">
                                <li className='col-12 text-end'>
                                    <Link to='/AddProducts'>

                                        <button type="button" className="btn btn-primary btn-sm " style={{ marginRight: '4px' }} > Save</button>
                                    </Link>

                                    <Link to='/Products'>
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
                            <th><i className="bi bi-pencil"></i><span style={{ marginLeft: '10px', fontSize: '18px' }}> Add Products</span></th>
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
                                                <Tab label="Links" value="3" />
                                                <Tab label="Attribute" value="4" />
                                                <Tab label="Option" value="5" />
                                                {/* <Tab label="Discount" value="6" /> */}
                                                {/* <Tab label="Special" value="7" /> */}
                                                <Tab label="Image" value="8" />
                                                <Tab label="SEO " value="9" />
                                            </TabList>
                                        </Box>
                                        <TabPanel value="1">{<GeneralProduct />}</TabPanel>
                                        <TabPanel value="2">{<DataProduct />}</TabPanel>
                                        <TabPanel value="3">{<LinkProduct />}</TabPanel>
                                        <TabPanel value="4">{<AttributeProduct />}</TabPanel>
                                        <TabPanel value="5">{<OptionProduct />}</TabPanel>
                                        {/* <TabPanel value="6">{<DiscountProduct />}</TabPanel> */}
                                        {/* <TabPanel value="7">{<SpecialProduct />}</TabPanel> */}
                                        <TabPanel value="8">{<ImageProduct />}</TabPanel>
                                        <TabPanel value="9">{<SeoProduct />}</TabPanel>
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

export default AddProducts