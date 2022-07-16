import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [ agree, setAgree ] = useState( false );
    const navigate = useNavigate();
    const nameRef = useRef( '' );
    const emailRef = useRef( '' );
    const passwordRef = useRef( '' );
    const cPasswordRef = useRef( '' );
    const location = useLocation();


    const [ createUserWithEmailAndPassword, user, loading, error ] = useCreateUserWithEmailAndPassword( auth, { sendEmailVerification: true } );
    const [ updateProfile, updating, updateError ] = useUpdateProfile( auth );

    let errorMessage;

    const from = location.state?.from?.pathname || "/";
    if ( user ) {
        navigate( from, { replace: true } );
    }
    if ( loading || updating ) {
        return <Loading></Loading>;
    }
    if ( error || updateError ) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>;
    }
    const handleSubmit = async ( event ) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = cPasswordRef.current.value;
        // const agree = event.target.terms.checked;

        if ( password !== confirmPassword ) {
            errorMessage = <p className='text-danger'>Error: {error?.message}</p>;
            return;
        }
        if ( password.length < 6 ) {
            errorMessage = <p className='text-danger'>Error: {error?.message}</p>;
            return;
        }

        await createUserWithEmailAndPassword( email, password );
        await updateProfile( { displayName: name } );
        toast( 'Updated profile' );
        navigate( from, { replace: true } );

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
                                    <input ref={nameRef} type="text" className="form-control" name='name' id="floatingInput" placeholder="Your Name" required />
                                    <label for="floatingInput">Name</label>
                                </div>
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
                                <p className='text-danger'>{errorMessage}</p>

                                <div className="form-check d-flex mb-2">
                                    <input onClick={() => setAgree( !agree )} name="terms" className="form-check-input mr-2" type="checkbox" value="" id="rememberPasswordCheck" />
                                    <label name="terms" class={`ps-2 ${ agree ? '' : 'text-danger' }`} for="rememberPasswordCheck">Accept terms and conditions.</label>
                                </div>
                                <div className="d-grid">
                                    <button disabled={!agree} className="btn btn-primary btn-login text-uppercase fw-bold"
                                        type="submit">Sign Up</button>

                                </div>
                                <p className='mb-0'>Already have an account?<Link className='text-primary text-decoration-none' to='/login'> Please Login</Link></p>
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