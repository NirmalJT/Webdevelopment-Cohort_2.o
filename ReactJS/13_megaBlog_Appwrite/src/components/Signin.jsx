import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { authService } from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [register, handleSubmit] = useForm;
  const login = async (data) => {
    try {
      setError("");
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.messag);
    }
  };
  return (
    <>
      <div>
        <div>
          <span>
            <Logo />
          </span>
        </div>
        <h2>Sign to your account</h2>
        <p>
          Dont have an account
          <Link to={"/signup"}>Signup</Link>
        </p>
        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit(login)}>
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: true,
              //pattern
              validate: (value) =>
                //call api to check acually exist or not
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                "Email address must be a valid address",
            })}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            {...register("password", {
              required: true,
            })}
          />
          <Button>Signin</Button>
        </form>
      </div>
    </>
  );
}

export default Signin;
