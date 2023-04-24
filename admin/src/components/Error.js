import React from 'react'
import { useNavigate } from 'react-router-dom';

const Error = () => {

    let Navigate = useNavigate();
    const change = () => {
        const data = localStorage.getItem('name')
        data ? Navigate('/dashboard') : Navigate('/')
    }

    return (
        <>
            <div className='text-center'>


                <img src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=826&t=st=1679482003~exp=1679482603~hmac=78fdb20a454d99c4155553de56e9e8a69a476408e357adf7fa765f49415c8919'
                    alt='img' />


            </div>
            <div className='text-center'>
                <button type="button" className="btn btn-primary btn-lg" onClick={change}>back to Home </button>
            </div>
        </>
    )
}

export default Error