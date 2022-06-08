import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const emailRef = useRef( '' );
    const passwordRef = useRef( '' );
    const cPasswordRef = useRef( '' );
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = cPasswordRef.current.value;
        console.log( email, password, confirmPassword );
    };

    return (
        <div className="body">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-bold fs-5">Sign Up</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input ref={emailRef} type="email" className="form-control" name='email' id="floatingInput" placeholder="name@example.com" required />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input ref={passwordRef} type="password" className="form-control" name='password' id="floatingPassword" placeholder="Password" required />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input ref={cPasswordRef} type="password" className="form-control" name='confirmPassword' id="floatingPassword" placeholder="Password" required />
                                    <label for="floatingPassword">Confirm Password</label>
                                </div>

                                <div className="form-check d-flex mb-2">
                                    <input className="form-check-input mr-2" type="checkbox" value="" id="rememberPasswordCheck" />
                                    <label class="form-check-label" for="rememberPasswordCheck">Remember password</label>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-login text-uppercase fw-bold"
                                        type="submit">Sign Up</button>

                                </div>
                                <p className='mb-0'>Already have an account?<Link className='text-danger text-decoration-none' to='/login'> Please Login</Link></p>
                                <hr className="my-4" />
                                <div className="d-grid mb-2">
                                    <button className="btn btn-danger text-white text-uppercase fw-bold"
                                        type="submit">Sign Up with Google</button>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary text-white text-uppercase fw-bold"
                                        type="submit">Sign Up with Facebook</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;