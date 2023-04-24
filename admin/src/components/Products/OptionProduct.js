import React, { useEffect, useRef, useState } from 'react'

const OptionProduct = () => {


    const [options, setOptions] = useState([""]);
    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!options.includes(inputValue)) {
            setOptions([...options, inputValue]);
        }
        // setInputValue('');
    };


    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <table className='table' style={{ opacity: '0.9' }}>
                        <thead>
                            <tr>
                                <td style={{ opacity: 0.9 }} ><h4>Add Option</h4></td>
                                <td></td>
                            </tr>
                            <tr>

                                <td className='text-end  col-2' >
                                    <label> <span>Option  </span></label>
                                </td>
                                <td className=' col-12'>
                                    <input className='col-11' placeholder='Option' list="options" value={inputValue}
                                        onChange={handleInputChange}
                                        onMouseLeave={handleFormSubmit}
                                    />
                                    {/* <input type="text" id="example-input" name="example-input" list="options" className='col-11' placeholder='Option'
                                        value={inputValue}
                                        onChange={handleInputChange}
                                    /> */}
                                    <datalist id="options">
                                        {options.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </datalist>


                                </td>
                            </tr>
                        </thead>

                    </table>

                </div>

            </div>
        </>
    )
}

export default OptionProduct
