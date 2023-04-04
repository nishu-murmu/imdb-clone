import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { WarningIcon } from "../components/media/Icons";
import { LogoImage } from "../components/media/Images";
import { AuthContext } from "../utils/contexts/authContext";
import { AuthActions } from "../store/reducers/AuthSlice";
import { RootState } from "../utils/types";

const SignIn: React.FC = () => {
  const authContext = useContext(AuthContext);
  const { signIn, currentUser, signOut } = authContext;
  const disptach = useDispatch();
  const userDetails = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const isSubmited = useSelector((state: RootState) => state.auth.isSubmitted);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    disptach(AuthActions.setIsSubmitted(!isSubmited));
    if (currentUser === null) {
      signIn(userDetails).then((user: any) => {
        navigate("/")
      }).catch((err: any) => {
        navigate("/signin")
        disptach(AuthActions.setIsSubmitted(!isSubmited));
        disptach(
          AuthActions.setNotFound(
            JSON.stringify(err.code).replace(/"/g, "").split("/")[1]
          )
        );
      });

      document
        .querySelector("form")
        ?.querySelectorAll("input")
        .forEach((input) => {
          input.value = "";
        });
    } else {
      signOut();
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
        id="sign-in-heading"
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
            <ul className="list-none text-md">
              {userDetails.notFound === "user-not-found" && (
                <li>User Not Found</li>
              )}
              {userDetails.notFound === `wrong-password` && (
                <li>Wrong Password</li>
              )}
            </ul>
          </div>
        </div>
      )}
      <div
        id="register-form"
        className="mx-auto  mb-6  w-[348px]  h-[381px] border-1 border-solid border-gray-200 rounded-md container flex justify-center"
      >
        <form action="" className="px-4 py-3 text-sm mt-2 w-full">
          <h1 className="font-normal leading-3 text-3xl">Sign In</h1>
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
              className=" h-8 w-full rounded-sm border-1  hover:shadow-input hover:shadow-yellow-hover"
            />
          </div>

          <button
            id="submit"
            type="submit"
            onClick={(e: any) => handleSubmit(e)}
            className="bg-yellow-default text-black-default py-2 border-1 border-black-default rounded-sm w-full"
          >
            Sign In
          </button>
          <div className="hover:cursor-pointer my-4 flex flex-row gap-x-2  relative ">
            <input type="checkbox" className="" id="signedin" />
            <label htmlFor="signedin">Keep me signed in.</label>
            <p className="text-blue-800">Details</p>
          </div>
          <Link to={"/register"}>
            <button
              id="submit"
              type="submit"
              className="bg-gradient-to-b from-light-50 to-light-100 border-1 border-black-default text-black-default py-2 rounded-sm w-full"
            >
              Create your IMDb Account
            </button>
          </Link>
        </form>
      </div>

      <div
        id="register-footer"
        className="  pb-20 text-sm border-t-2 pt-4 mx-auto container flex flex-col mt-2 gap-y-2 place-items-center  justify-center "
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
export default SignIn;
