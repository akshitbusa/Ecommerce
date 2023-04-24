import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Login = () => {



    const navigate = useNavigate();


    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();
        if (name == '') {
            alert('please fill data ');
        } else {

            const res = await fetch('/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, password
                })
            })

            const data = await res;
            console.log(data);
            if (data.status === 200) {
                console.log('success');
                window.alert('Login successful')
                localStorage.setItem('name', name)
                navigate('/dashboard')

            } else {
                console.log('invalid data');
                window.alert('invalid data')
            }

        }

    }


    return (
        <>
            <div className='container-fluid '>
                <header id="header" className="header fixed-top d-flex align-items-center">

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="logo d-flex align-items-center">
                            <span className=" d-lg-block">AkAdmin</span>
                        </div>
                    </div>
                </header>
                <section className='mt-5'>
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                    className="img-fluid" alt="image1" />
                            </div>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form>

                                    <div className="divider d-flex align-items-center my-4">
                                        <p className="text-center fw-bold mx-3 mb-0"><h3>Login Please</h3></p>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="text" id="form3Example3" className="form-control form-control-lg"
                                            placeholder="Enter a valid email address" value={name}
                                            onChange={(e) => { setName(e.target.value) }} required />
                                        <label className="form-label" for="form3Example3">User name</label>
                                    </div>


                                    <div className="form-outline mb-3">
                                        <input type="password" id="form3Example4" className="form-control form-control-lg"
                                            placeholder="Enter password" value={password}
                                            onChange={(e) => { setPassword(e.target.value) }} required />
                                        <label className="form-label" for="form3Example4">Password</label>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">

                                        <a href="#!" className="text-body">Forgot password?</a>
                                    </div>

                                    <div className="text-center text-lg-start mt-4 pt-2">
                                        <button type="button" className="btn btn-primary btn-lg" onClick={loginUser}
                                        >Login</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </section>


            </div>
        </>
    )
}

export default Login
