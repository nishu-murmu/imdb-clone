import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogoImage } from "../components/media/Images";
import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";
import { RootState } from "../utils/types";
import { useSelector, useDispatch } from "react-redux";
import { AuthActions } from "../store/reducers/AuthSlice";
import { WarningIcon } from "../components/media/Icons";

const Register: React.FC = () => {
  const authContext = useContext(AuthContext);
  const { register } = authContext;
  const disptach = useDispatch();
  const userDetails = useSelector((state: RootState) => state.auth);
  const isSubmited = useSelector((state: RootState) => state.auth.isSubmitted);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    disptach(AuthActions.setIsSubmitted(true));
    if (userDetails.password === userDetails.retypedPassword) {
      register(userDetails);
      document.getElementById("errorBox")?.classList.add("hidden");
      document
        .querySelector("form")
        ?.querySelectorAll("input")
        .forEach((input) => {
          input.value = "";
        });
    }
  };

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputType: string
  ) => {
    e.preventDefault();
    let value = e.target.value;
    disptach(AuthActions.setUserDetails({ value, type: inputType }));
  };

  return (
    <>
      <div
        className="mx-auto container  justify-center flex my-3"
        id="register-heading"
      >
        <Link to={"/"}>
          <div className="flex items-center hover:cursor-pointer  flex-row mx-auto">
            <LogoImage width="107px" height="57px" />
          </div>
        </Link>
      </div>
      {isSubmited && (
        <div
          id="errorBox"
          className="mx-auto  w-[348px]  border-2 border-solid border-red-400 rounded-md container flex flex-col justify-center mb-2"
        >
          <div className="flex gap-x-2 px-4 py-2">
            <div>
              <WarningIcon fillColor="red" height="28" width="28" />
            </div>
            <div className="text-2xl text-red-600 font-extrabold">
              There was a Problem
            </div>
          </div>
          <div className="px-10 py-2">
            <ul className="list-disc text-md">
              {userDetails.name === "" && <li>Enter your Name</li>}
              {userDetails.email === "" && <li>Enter your Email</li>}
              {userDetails.password === "" && <li>Enter your Password</li>}
              {userDetails.password !== userDetails.retypedPassword && (
                <li>Passwords must match</li>
              )}
            </ul>
          </div>
        </div>
      )}
      <div
        id="register-form"
        className="mx-auto w-[348px] h-[462px] border-1 border-solid border-gray-200 rounded-md container flex justify-center"
      >
        <form action="" className="px-4 py-3 text-sm mt-2 w-full">
          <h1 className="font-normal leading-3 text-3xl">Create account</h1>
          <div className="flex flex-col my-5 gap-y-2">
            <label htmlFor="name" className="font-bold">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              onChange={(e: any) => onChangeHandler(e, "name")}
              className="border-2 h-8 p-1 rounded-sm w-full hover:shadow-input  hover:shadow-yellow-hover"
            />
          </div>

          <div className="flex flex-col my-5 gap-y-2">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              onChange={(e: any) => onChangeHandler(e, "email")}
              className="border-2 h-8 w-full rounded-sm hover:shadow-input  hover:shadow-yellow-hover"
            />
          </div>

          <div className="flex flex-col my-5 gap-y-2">
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <input
              id="password"
              type="password"
              onChange={(e: any) => onChangeHandler(e, "password")}
              className="border-2 h-8 w-full rounded-sm hover:shadow-input hover:shadow-yellow-hover"
            />
          </div>

          <div className="flex flex-col my-5 gap-y-2">
            <label htmlFor="re-password" className="font-bold">
              Re-enter Password
            </label>
            <input
              id="re-password"
              type="password"
              onChange={(e: any) => onChangeHandler(e, "repassword")}
              className="border-2 h-8 w-full rounded-sm hover:shadow-input hover:shadow-yellow-hover"
            />
          </div>
          <button
            id="submit"
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="bg-yellow-default text-black-default py-2 rounded-sm w-full"
          >
            Create your IMDb account
          </button>
          <Link to={"/signin"}>
            <div className="flex flex-row gap-x-2  relative ">
              <p>Already have an account?</p>
              <a className="text-blue-800" href="#">
                Sign in
              </a>
            </div>
          </Link>
        </form>
      </div>
      <div
        id="register-footer"
        className="text-sm mx-auto container flex flex-col mt-2 gap-y-2 place-items-center  justify-center "
      >
        <div className="flex gap-x-2">
          <a href="#" className="text-blue-800">
            Help
          </a>
          <a href="#" className="text-blue-800">
            Conditions of Use
          </a>
          <a href="#" className="text-blue-800">
            Privacy Policy
          </a>
        </div>
        <div id="foot-notes">
          © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </>
  );
};
export default Register;
