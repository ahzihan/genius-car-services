import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../firebase.init';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Loading from '../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const provider = new GoogleAuthProvider();
const Login = () => {
    const emailRef = useRef( '' );
    const navigate = useNavigate();
    const location = useLocation();
    const [ signInWithEmailAndPassword, user, loading, error ] = useSignInWithEmailAndPassword( auth );
    const [ sendPasswordResetEmail, sending ] = useSendPasswordResetEmail( auth );
    let errorMessage;
    const from = location.state?.from?.pathname || "/";
    if ( user ) {
        // navigate( from, { replace: true } );
    }
    if ( loading ) {
        return <Loading></Loading>;
    }

    if ( error ) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>;
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if ( email ) {
            await sendPasswordResetEmail( email );
            toast( 'Sent email' );
        } else {
            toast( 'Please Enter your email address.' );
        }

    };

    const handleSubmit = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword( email, password );
        const { data } = await axios.post( 'http://localhost:5000/login', { email } );
        localStorage.setItem( 'accessToken', data.accessToken );
        navigate( from, { replace: true } );
    };

    const handleGoogleSignIn = () => {
        signInWithPopup( auth, provider )

            .then( result => {
                const user = result.user;
                if ( user ) {
                    navigate( from, { replace: true } );
                }
            } ).catch( error => {
                console.error( error );
            } );
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
                                    <input ref={emailRef} type="email" className="form-control" name='email' id="floatingInput" placeholder="name@example.com" required />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" name='password' id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <p className='text-danger'>{errorMessage}</p>

                                <div className="d-grid">
                                    <button className="btn btn-primary btn-login text-uppercase fw-bold"
                                        type="submit">Sign in</button>
                                </div>

                                <p className='mb-0'>New to Genus car? <Link className='text-primary text-decoration-none' to='/register'>Please Register</Link></p>

                                <p className='mb-0'>Reset Password? <button onClick={resetPassword} className='text-primary btn btn-link text-decoration-none'>Forget Password</button></p>

                                <hr className="my-4" />
                                <div className="d-grid mb-2">
                                    <button onClick={handleGoogleSignIn} className="btn btn-danger text-white text-uppercase fw-bold"
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