import React, { useState } from "react";
import { addUser } from "./redux/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navi = useNavigate();

  const users = useSelector((state) => state.users);
  const handle1 = (e) => {
    e.preventDefault();
    //console.log(name,email)

    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));

    navi("/");
  };

  return (
    <main className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handle1}>
          <h1 className="h3 mb-3 fw-normal">Add New User</h1>

          <div className="form-floating">
            <input
              type="text"
              class="form-control"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
            />
            <label for="floatingPassword">Name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              class="form-control"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit ">
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
};

export default Create;
