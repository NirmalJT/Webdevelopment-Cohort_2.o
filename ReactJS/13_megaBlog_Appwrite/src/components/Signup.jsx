import React, { use } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import login from "../store/authSlice";
import { useForm } from "react-hook-form";
function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [register, handleSubmit] = useForm();
  const create = async (data) => {
    try {
      setError("");
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/index.html");
      }
    } catch (error) {
      setError(error.message);
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
          Already have an account?
          <Link to={"/signin"}>Signup</Link>
        </p>
        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: true,
              //pattern
              validate: {
                matchPatern: (value) =>
                  //call api to check acually exist or not
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
          />
          <Input
            label="Name"
            placeholder="Enter your name"
            type={name}
            {...register("name", {
              required: true,
            })}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            {...register("password", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^_-])[A-Za-z\d@$!%*?#&^_-]{8,}$/.test(
                    value
                  ) ||
                  "Password must be 8+ characters, include uppercase, lowercase, number, and special character",
              },
            })}
          />
          <Button>Signup</Button>
        </form>
      </div>
    </>
  );
}
export default Signup;
