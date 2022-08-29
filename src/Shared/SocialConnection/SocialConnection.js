import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import auth from "../../init.Firebase";
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";

const SocialConnection = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);

  if (googleLoading || facebookLoading) {
    return <Loading />;
  }
  return (
    <div className="my-5">
      <h3 className="text-lg font-medium font-sans my-2">
        Connect with social links:
      </h3>
      <div className="flex gap-3 ">
        <button
          onClick={() => signInWithGoogle()}
          className="inline-flex items-center gap-3 text-white hover:text-gray-100 bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-teal-700  rounded text-lg"
        >
          <FcGoogle className="text-2xl" /> Google
        </button>
        <button
          onClick={() => signInWithFacebook()}
          className="inline-flex items-center gap-3 text-white hover:text-gray-100 bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-teal-700  rounded text-lg"
        >
          <FaFacebook className="text-2xl" /> Facebook
        </button>
      </div>
      {googleError || facebookError ? (
        <p>{googleError.message || facebookError.message}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default SocialConnection;
