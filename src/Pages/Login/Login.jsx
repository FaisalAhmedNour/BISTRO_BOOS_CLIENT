import { Link, useLocation, useNavigate } from 'react-router-dom';
import bannerImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import './Login.css'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
    const [ifCaptcha, setIfCaptcha] = useState(true)
    const { signInUserWithPass, googleLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        signInUserWithPass(email, password)
            .then(() => {
                // console.log(result.user)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully loged in...',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: { errorMessage },
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    const handleGoogleLogIn = () => {
        googleLogin()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully loged in...',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: { errorMessage },
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    const handleCaptcha = e => {
        const captchaValue = e.target.value;
        console.log(captchaValue)
        console.log(captchaValue);
        if (validateCaptcha(captchaValue)) {
            // console.log('yes')
            setIfCaptcha(false)
        }
        else {
            // console.log('no')
            setIfCaptcha(true)
        }
    }

    return (
        <div className={`hero min-h-screen page`}>
            <Helmet>
                <title>Bistro | Login</title>
            </Helmet>
            <div className={`hero-content border w-full shadow-2xl flex-col lg:flex-row`}>
                <div className="text-center lg:text-left">
                    <img src={bannerImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-xl bg-opacity-0">
                    <h1 className='text-5xl font-bold text-center'>Login</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-[600]">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="email"
                                className="w-full px-3 py-2 placeholder-gray-400 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-base leading-10" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text text-xl font-[600]"
                                >Password</span>
                            </label>
                            <input
                                type="password"
                                name='password'
                                placeholder="password"
                                className="w-full px-3 py-2 placeholder-gray-400 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-base leading-10" />
                            <label className="label">
                                <a href="#"
                                    className="label-text-alt text-sm link link-hover"
                                >Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input
                                type="text"
                                name='captcha'
                                placeholder="Type the captcha"
                                onBlur={handleCaptcha}
                                className="w-full px-3 py-2 placeholder-gray-400 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-base leading-10"
                            />
                        </div>
                        <div className="form-control mt-6">
                            <input
                                className={`px-8 py-4 w-full text-white ${ifCaptcha ? 'bg-[#D9B47C]' : 'bg-[#af905e]'} rounded-md font-[700] text-xl  focus:outline-none`}
                                type="submit"
                                value="Log in"
                                // TO DO: Make disable
                                disabled={false}
                            />
                        </div>
                    </form>
                    <div className='text-center'>
                        <p className='text-[#D1A054] font-[500] text-xl flex justify-center'>
                            New here?
                            <Link to="/signup">
                                <h3 className='font-[700] ms-2'>Create an account</h3>
                            </Link>
                        </p>
                        <p className='font-[500] text-xl mt-3'>Or sign in with</p>
                        <p onClick={handleGoogleLogIn}>
                            <span className='text-2xl font-serif rounded-3xl bg-slate-400 px-5 py-1'>Sign in With Google</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;