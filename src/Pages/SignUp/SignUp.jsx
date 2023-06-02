import { Link, useNavigate } from 'react-router-dom';
import bannerImg from '../../assets/others/authentication2.png'
import './SignUp.css'
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUserWithPass, updateUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const onSubmit = data => {
        // console.log(data.name, data.photo)
        createUserWithPass(data.email, data.password)
            .then(() => {
                updateUser(data.name, data.photo)
                    .then(() => {
                        reset();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Successfully Signed in...',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
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
    };
    // console.log(watch("example"));

    return (
        <div className={`hero min-h-screen page`}>
            <Helmet>
                <title>Bistro | Sign Up</title>
            </Helmet>
            <div className={`hero-content border w-full h-[80%] shadow-2xl flex-col lg:flex-row-reverse`}>
                <div className="text-center lg:text-left">
                    <img src={bannerImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-xl bg-opacity-0">
                    <h1 className='text-5xl font-bold text-center'>Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-[600]">Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                placeholder="Your name"
                                className="w-full px-3 py-2 placeholder-gray-400 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-base leading-10" />
                            {errors.name && <span className='text-error'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-[600]">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                {...register("photo", { required: true })}
                                placeholder="Paste photo url"
                                className="w-full px-3 py-2 placeholder-gray-400 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-base leading-10" />
                            {errors.photo && <span className='text-error'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-[600]">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="Your email"
                                className="w-full px-3 py-2 placeholder-gray-400 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-base leading-10" />
                            {errors.email && <span className='text-error'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text text-xl font-[600]"
                                >Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 16,
                                    pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{6,16}$/
                                })}
                                placeholder="password"
                                className="w-full px-3 py-2 placeholder-gray-400 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-base leading-10" />
                            {errors.password?.type === 'minLength' && <span className='text-error'>Password length minimum 6 characters required</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-error'>Password length will be maximum 16 characters</span>}
                            {errors.password?.type === 'pattern' && <span className='text-error'>Must have an uppercase, a lowercase, a digit and a special character </span>}
                        </div>
                        <div className="form-control mt-6">
                            <input
                                className={`px-8 py-4 w-full text-white bg-[#D9B47C] rounded-md font-[700] text-xl  focus:outline-none`}
                                type="submit"
                                value="Sign Up"
                            />
                        </div>
                    </form>
                    <div className='text-center'>
                        <p className='text-[#D1A054] font-[500] text-xl flex justify-center'>
                            Already have an account?
                            <Link to="/login">
                                <h3 className='font-[700] ms-2'>Log in</h3>
                            </Link>
                        </p>
                        <p className='font-[500] text-xl mt-3'>Or sign in with</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;