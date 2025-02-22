import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../App";

function AddFriendForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const history = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    axiosWithAuth()
      .post("http://localhost:9000/api/friends", data)
      .then((res) => {
        console.log(res.data);
        history.push(`/friends`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col items-center">
      <h3 className="mt-10 mb-5 text-7xl font-extrabold ">ADD FRIEND</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="font-extrabold">
          {" "}
          NAME
          <input
            className="block w-30vh bg-black w-96 h-12 text-white"
            type="text"
            placeholder="name"
            {...register("name", {
              required: true,
            })}
          />
        </label>
        <label className="font-extrabold">
          {" "}
          EMAIL
          <input
            className="block bg-black w-96 h-12 text-white"
            type="email"
            placeholder="email"
            {...register("email", {
              required: true,
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

export default AddFriendForm;
