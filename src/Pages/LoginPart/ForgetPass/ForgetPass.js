import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ForgetBG from '../../../Utilities/Image/forget.gif'



const ForgetPass = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 container mx-auto items-center justify-center'>
            <div>
                <img src={ForgetBG} alt="" />
            </div>
            <div className="px-5 md:px-0 py-5 md:py-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="text-center text-3xl font-bold my-4 text-gray-100">Forget password</h4>
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
                    <label className="label">
                        <span className="label-text-alt"><Link to='/login'>Back to login?</Link></span>
                    </label>
                    <input className="btn bg-teal-400 text-gray-900 hover:bg-teal-500 hover:text-gray-100 font-bold w-full" type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default ForgetPass;