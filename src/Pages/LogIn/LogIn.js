import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const LogIn = () => {

    const { logIn, setUser, signInBy, signInByFacebook } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    // Google sign In

    const handleGoogleSignIn = () => {
        signInBy()
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error('error: ', error))

    }

    // facebook sign in

    const handleFacebookSignIn = () => {
        signInByFacebook()
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error('error: ', error))

    }

    // log in using email, password

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);

                const currentUser = {
                    uid: user.uid
                }

                //fetching api to get jwt token

                fetch('https://dhekur-server.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true });
                    })

            })
            .catch(error => console.error('error: ', error))
    }

    return (
        <div className='w-full'>
            <div className='flex justify-center items-center'>
                <div className='bg-white px-16 py-8 rounded-lg shadow-lg shadow-indigo-500/40'>
                    <form className='mb-4' onSubmit={handleLogIn}>
                        <h1 className='text-3xl font-semibold'>Log In</h1>
                        <div className='grid grid-cols-1 gap-4'>
                            <div className='flex flex-col justify-start'>
                                <label className="label">
                                    <span className="label-text text-2xl">Email: </span>
                                </label>
                                <input type="Email" placeholder="EMAIL Address" className="input input-bordered input-accent w-56 md:w-72" name='email' />
                            </div>
                            <div className='flex flex-col justify-start'>
                                <label className="label">
                                    <span className="label-text text-2xl">Password: </span>
                                </label>
                                <input type="Password" placeholder="PASSWORD" className="input input-bordered input-accent w-56 md:w-72" name='password' />
                            </div>
                        </div>
                        <button type="submit" className='btn btn-outline btn-success mt-4 px-8 py-2 text-xl'>SUBMIT</button>
                        <h2 className='text-xl mt-2'>Don't have an Account! Please <Link to='/register'><span className='text-blue-600'>Register</span></Link></h2>
                    </form>
                    <hr />
                    <h1 className='text-2xl font-semibold mt-4 mb-4'>Log In With</h1>
                    <div className='grid grid-cols-1 gap-2'>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline text-xl"><FcGoogle className='mr-1'></FcGoogle> Log In By Google</button>
                        <button onClick={handleFacebookSignIn} className="btn btn-outline text-xl text-sky-800"><FaFacebook className='mr-1'></FaFacebook>Log In By Facebook</button>
                    </div>
                </div>
            </div>

                {/* title */}

            <Helmet>
                <title>DHEKUR: LOG IN</title>
            </Helmet>
        </div>
    );
};

export default LogIn;