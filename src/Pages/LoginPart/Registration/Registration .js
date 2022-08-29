import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RegistrationBG from "../../../Utilities/Image/animation_500_l5dm4ehu.gif";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../init.Firebase";
import Loading from "../../../Shared/Loading/Loading";
import { toast } from "react-toastify";

const Registration = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [sendEmailVerification, sending, restError] =
    useSendEmailVerification(auth);
  const imageStoreKey = "74c8424adb20f9d1cb8d5b37f691776a";

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const displayName = data.FirstName + " " + data.LastName;
    const image = data.Picture[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const user = {
            name: data.displayName,
            email: data.email,
            image: data.data.display_url,
          };
          fetch("http://localhost:5000/addUser", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              updateProfile(displayName, user.image);
              toast.success("Check your email and verify your account");
            });
        }
      });
    createUserWithEmailAndPassword(data.Email, data.Password);
    sendEmailVerification();
  };

  if (loading || updating || sending) {
    return <Loading></Loading>;
  }

  if (error || updateError || restError) {
    toast.error(error.message || updateError || restError);
  }

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 container mx-auto items-center justify-center">
      <div>
        <img src={RegistrationBG} alt="" />
      </div>
      <div className="px-5 md:px-0 py-5 md:py-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4 className="text-center text-3xl font-bold my-4 text-gray-100">
            Registration
          </h4>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium font-sans">
                First name
              </span>
            </label>
            <input
              type="name"
              placeholder="First name"
              className="input input-bordered w-full"
              {...register("FirstName", {
                required: {
                  value: true,
                  message: "First name is required",
                },
              })}
            />
          </div>
          <label className="label">
            {errors.FirstName?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.FirstName.message}
              </span>
            )}
            {errors.FirstName?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.FirstName.message}
              </span>
            )}
          </label>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium font-sans">
                Last name
              </span>
            </label>
            <input
              type="name"
              placeholder="Last name"
              className="input input-bordered w-full"
              {...register("LastName", {
                required: {
                  value: true,
                  message: "Last name is required",
                },
              })}
            />
          </div>
          <label className="label">
            {errors.LastName?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.LastName.message}
              </span>
            )}
            {errors.LastName?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.LastName.message}
              </span>
            )}
          </label>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium font-sans">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full"
              {...register("Email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                  message: "Enter a valid email",
                },
              })}
            />
          </div>
          <label className="label">
            {errors.Email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.Email.message}
              </span>
            )}
            {errors.Email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.Email.message}
              </span>
            )}
          </label>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium font-sans">
                Your picture
              </span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full pt-2"
              {...register("Picture", {
                required: {
                  value: true,
                  message: "Picture is required",
                },
              })}
            />
          </div>
          <label className="label">
            {errors.Picture?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.Picture.message}
              </span>
            )}
          </label>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium font-sans">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Your password"
              className="input input-bordered w-full"
              {...register("Password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 8,
                  message: "Password must have 8 character",
                },
              })}
            />
          </div>
          <label className="label">
            {errors.Password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.Password.message}
              </span>
            )}
            {errors.Password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.Password.message}
              </span>
            )}
          </label>
          <label className="label">
            <span className="label-text-alt">
              <Link to="/login">Already have an account?</Link>
            </span>
          </label>
          <input
            className="btn bg-accent text-gray-900 hover:bg-teal-500 hover:text-gray-100 font-bold w-full"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default Registration;
