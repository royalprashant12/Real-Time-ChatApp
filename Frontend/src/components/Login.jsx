import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const [authUser, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    // console.log(userInfo);
    axios
      .post("/api/user/login", userInfo)
      .then((response) => {
        if (response.data) {
          toast.success("Login successful");
        }
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.error);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/10 shadow-2xl px-8 py-8 rounded-2xl space-y-5 w-96 backdrop-blur-md border border-white/20"
        >
          <h1 className="text-3xl text-center font-bold text-indigo-400 tracking-wide mb-2">
            Chat<span className="text-green-400 font-extrabold">App</span>
          </h1>
          <h2 className="text-xl text-center text-white font-semibold mb-4">Login</h2>

          {/* Email */}
          <label className="input input-bordered flex items-center gap-2 bg-white/20 rounded-lg focus-within:ring-2 ring-indigo-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow bg-transparent text-white placeholder:text-indigo-200 focus:outline-none"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </label>
          {errors.email && (
            <span className="text-red-400 text-xs font-semibold pl-2">This field is required</span>
          )}
          {/* Password */}
          <label className="input input-bordered flex items-center gap-2 bg-white/20 rounded-lg focus-within:ring-2 ring-indigo-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow bg-transparent text-white placeholder:text-indigo-200 focus:outline-none"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password && (
            <span className="text-red-400 text-xs font-semibold pl-2">This field is required</span>
          )}
          {/* Text & Button */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-indigo-200 text-sm">
              New user?
              <Link
                to="/signup"
                className="text-blue-400 underline cursor-pointer ml-1 hover:text-blue-600 transition"
              >
                Signup
              </Link>
            </p>
            <input
              type="submit"
              value="Login"
              className="text-white bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-2 cursor-pointer rounded-lg font-semibold shadow hover:scale-105 transition-transform duration-200"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
