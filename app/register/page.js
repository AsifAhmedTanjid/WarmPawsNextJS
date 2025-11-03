"use client"
import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link, userouter.push } from "react-router";
// import { AuthContext } from "../contexts/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../components/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";


const Register = () => {
  const {
    createUser,
    setLoading,
    updateProfileFunc,
    signInWithGoogleFunc,
    setUser,
  } = useContext(AuthContext);
//   const router.push = userouter.push();
const router = useRouter();
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;

    const lengthPattern = /^.{6,}$/;
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;

    if (!lengthPattern.test(password)) {
      setError("Password must be at least 6 characters long");
      return;
    } else if (!uppercasePattern.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    } else if (!lowercasePattern.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        // console.log(result);
        const user = result.user;
        updateProfileFunc(name, photo)
          .then(() => {
            setUser({
              ...user,
              displayName: name,
              photoURL: photo,
            });
            setLoading(false);
            toast.success("Registered successfully!");

            setTimeout(() => {
              router.push("/");
            }, 1000);
          })
          .catch((error) => {
            // console.log(error);
            toast.error("Registration failed: "
              + error.message);
            setLoading(false);
          });
      })
      .catch((error) => {
        // console.log(error);
        toast.error("Registration failed: "+ error.message);
        setLoading(false);
      });
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleGoogleSignin = () => {
    // console.log("google signin");
    signInWithGoogleFunc()
      .then((res) => {
        // console.log(res);
        setLoading(false);
        setUser(res.user);
        toast.success("Login successful!", {
          duration: 1500,
        });

        setTimeout(() => {
          router.push("/");
        }, 1500);
      })
      .catch((e) => {
        // console.log(e);
        toast.error(e.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1
            className="text-5xl font-bold bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff]
             bg-clip-text text-transparent"
          >
            Register now!
          </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                {/* User name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Your Name"
                  required
                />
                {/* User Photo URL */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="Photo URL"
                  required
                />
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <button
                    className="btn btn-xs absolute top-2 right-5 z-10"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </button>
                </div>
                {/* <div>
                  <label className="label">
                    <input type="checkbox" name="terms" className="checkbox" />
                    Accept Terms And Condition
                  </label>
                </div> */}

                {error && <p className="text-red-500">{error}</p>}
                <button className="btn  mt-4 bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff]">
                  Register
                </button>
              </fieldset>
            </form>
            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-blue-400 underline">
                Login
              </Link>
            </p>
            <button
              onClick={handleGoogleSignin}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
