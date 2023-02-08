import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

function LoginForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const history = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:9000/api/login", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        localStorage.setItem("s11g2token", res.data.token);
        props.setIsAuth(true);
        history.push(`/friends`);
      })
      .catch((err) => console.log(err));
  };
  console.log(props);
  return (
    <div className="flex flex-col flex-wrap content-center">
      <h3 className="my-10 text-6xl font-bold ">LOGIN</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          {" "}
          USERNAME
          <input
            className="block w-30vh bg-black w-96 h-12 text-white"
            type="text"
            placeholder="username"
            value="workintech"
            {...register("username", {
              required: true,
              maxLength: 80,
            })}
          />
        </label>
        <label>
          {" "}
          PASSWORD
          <input
            className="block bg-black w-96 h-12 text-white"
            type="password"
            placeholder="password"
            value="wecandoit"
            {...register("password", {
              required: true,
              maxLength: 100,
            })}
          />
        </label>
        <button
          type="submit"
          className="mt-6 block bg-black w-96 text-white h-12"
        >
          SUBMIT{" "}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
