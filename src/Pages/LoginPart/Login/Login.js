import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LoginBg from '../../../Utilities/Image/animation_500_l5dlhmtt.gif'

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 container mx-auto items-center justify-center'>
            <div>
                <img src={LoginBg} alt="" />
            </div>
            <div className="py-5 md:py-0 px-5 md:px-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="text-center text-3xl font-bold my-4 text-gray-100">Login</h4>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-medium font-sans">Email</span>
                        </label>
                        <input type="email" placeholder='Your email' className="input input-bordered w-full" {...register("Email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                                message: 'Enter a valid email'
                            }
                        })} />
                    </div>
                    <label className="label">
                        {errors.Email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Email.message}</span>}
                        {errors.Email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.Email.message}</span>}
                    </label>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-medium font-sans">Password</span>
                        </label>
                        <input type="password" placeholder='Your password' className="input input-bordered w-full" {...register("Password", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            minLength: {
                                value: 8,
                                message: 'Password must have 8 character'
                            }
                        })} />
                    </div>
                    <label className="label">
                        {errors.Password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Password.message}</span>}
                        {errors.Password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.Password.message}</span>}
                    </label>
                    <label className="label">
                        <span className="label-text-alt"><Link to='/forgetPass'>Forget password?</Link></span>
                    </label>
                    <label className="label">
                        <span className="label-text-alt"><Link to='/registration'>Create new account?</Link></span>
                    </label>
                    <input className="btn bg-teal-400 text-gray-900 hover:bg-teal-500 hover:text-gray-100 font-bold w-full" type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default Login;