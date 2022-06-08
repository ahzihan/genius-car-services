import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log( email, password );
    };
    return (
        <div className="body">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-bold fs-5">Sign In</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" name='email' id="floatingInput" placeholder="name@example.com" required />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" name='password' id="floatingPassword" placeholder="Password" required />
                                    <label for="floatingPassword">Password</label>
                                </div>

                                <div className="form-check d-flex mb-2">
                                    <input className="form-check-input mr-2" type="checkbox" value="" id="rememberPasswordCheck" />
                                    <label class="form-check-label" for="rememberPasswordCheck">Remember password</label>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-login text-uppercase fw-bold"
                                        type="submit">Sign in</button>
                                </div>
                                <p className='mb-0'>New to Genus car? <Link className='text-danger text-decoration-none' to='/register'>Please Register</Link></p>
                                <hr className="my-4" />
                                <div className="d-grid mb-2">
                                    <button className="btn btn-danger text-white text-uppercase fw-bold"
                                        type="submit">Sign in with Google</button>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary text-white text-uppercase fw-bold"
                                        type="submit">Sign in with Facebook</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;