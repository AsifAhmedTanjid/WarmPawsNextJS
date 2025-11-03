"use client"
import { useRouter, useSearchParams } from "next/navigation";
import React, { useRef } from "react";
// import { useLocation, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const ForgetPassword = () => {
//   const location = useLocation();
 const searchParams = useSearchParams();
//   const navigate = useNavigate();
const router =useRouter();

  const emailRef = useRef();

  
 const prefilledEmail = searchParams.get("email") || "";

  const handleReset = (e) => {
    e.preventDefault();
    const email = emailRef.current.value.trim();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    toast.success("Redirecting to Gmail...");
    setTimeout(() => {
      window.open("https://mail.google.com", "_blank");
      router.push("/login");
    }, 2000);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Toaster position="top-center" />
      <div className="hero-content flex-col">
        <h1
          className="text-4xl font-bold bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff]
             bg-clip-text text-transparent"
        >
          Reset Password
        </h1>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl mt-6">
          <form onSubmit={handleReset} className="card-body">
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              ref={emailRef}
              defaultValue={prefilledEmail}
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />

            <button className="btn bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] mt-4">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
