"use client";
import React, { useContext } from "react";
// import { Link, Link } from "react-router";
// import "./Navbar.css";
import "animate.css";
// import { AuthContext } from "../../contexts/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { ClimbingBoxLoader } from "react-spinners";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, signoutUserFunc, setUser,loading,setLoading} = useContext(AuthContext);
  const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
        setLoading(false)
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  // console.log(user);

  const links = (
    <>
      <li className="mr-2">
        <Link href="/">Home</Link>
      </li>

      <li className="mr-2">
        <Link href="/services">Services</Link>
      </li>

      <li className="mr-2">
        <Link href="/profile">My Profile</Link>
      </li>
    </>
  );


  return (
    <div className="bg-[#0e4372] shadow-sm ">
      <div className="navbar container mx-auto">
        <Toaster
          position="top-center"
          toastOptions={{
            style: { zIndex: 9999 },
          }}
        />
        <div className="navbar-start">
          <div className="dropdown z-10">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-[#0e4372] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Link
            href="/"
            className=" text-xl md:text-4xl font-extrabold 
             bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff]
             bg-clip-text text-transparent 
             drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] tracking-wide animate__animated animate__pulse animate__infinite"
          >
            Warm Paws
          </Link>
          {/* <h1 className="animate__animated animate__bounce animate__infinite">hello</h1> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        
        {/* <div className="navbar-end ">
          {user ? (
            <div>
              <div
                className="avatar avatar-placeholder mr-3 tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <div className="bg-neutral text-neutral-content w-10 lg:w-12 rounded-full">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="" />
                  ) : (
                    <span className="text-xl">
                      {user.displayName ? user.displayName[0] : "X"}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={handleSignout}
                className="bg-linear-to-tr from-[#ffb3b3] via-[#ff6666] to-[#ffffff] px-2 md:px-4  lg:px-6  rounded-box py-2 font-bold hover:cursor-pointer"
                // href="/login"
              >
                Log out
              </button>
            </div>
          ) : (
            <Link
              className="bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] px-2 md:px-4  lg:px-6  rounded-box py-2 font-bold"
              href="/login"
            >
              Login
            </Link>
          )}
        </div> */}

      <div className="navbar-end flex items-center h-12">
  {loading ? (
    <ClimbingBoxLoader 
      color="#6ec1ff" 
      size={5} 
      cssOverride={{ display: 'inline-block' }}
    />
  ) : user ? (
    
    <div>
      <div
        className="avatar avatar-placeholder mr-3 tooltip tooltip-bottom"
        data-tip={user.displayName}
      >
        <div className="bg-neutral text-neutral-content w-10 lg:w-12 rounded-full">
          {/* {user.photoURL ? (
            <img src={user.photoURL} alt="" />
          ) : (
            <span className="text-xl">
              {user.displayName ? user.displayName[0] : "X"}
            </span>
          )} */}
                    
            {/* <img src={user.photoURL} alt="" /> */}
          
        </div>
      </div>
      <button
        onClick={handleSignout}
        className="bg-linear-to-tr from-[#ffb3b3] via-[#ff6666] to-[#ffffff] px-2 md:px-4 lg:px-6 rounded-box py-2 font-bold hover:cursor-pointer"
      >
        Log out
      </button>
    </div>
  ) : (
   
    <Link
      className="bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] px-2 md:px-4 lg:px-6 rounded-box py-2 font-bold"
      href="/login"
    >
      Login
    </Link>
  )}
</div>

      </div>
    </div>
  );
};

export default Navbar;