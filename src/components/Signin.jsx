import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../features/navbar";
import axios from "axios";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:9000/user/signin", input, {
      withCredentials: true,
    });

    if (data.data.token) {
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("userId", data.data.userId);
      localStorage.setItem("username", data.data.username);
      localStorage.setItem("profile", data.data.profile);
      dispatch(signin());
      navigate("/");
    }
  };

  useEffect(() => {
    document.title = "Sign in";
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="row mt-5">
        <div className="col-lg-5">
          <img src="signin.png" alt="sign in" className="img-fluid" />
        </div>
        <div className="col-lg-5 mx-auto">
          <div className="sign-container p-lg-4 mt-5">
            <h3 className="mb-4">
              <strong>Sign in</strong>
            </h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="" className="mb-2">
                <strong>Email</strong>
              </label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={handleInput}
                />
              </div>

              <label htmlFor="" className="mb-2 mt-2">
                <strong>Password</strong>
              </label>
              <div className="input-group mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleInput}
                />
              </div>

              <button>Sign in</button>
              <p className="text-center mt-3">
                <Link to="/signup">Don't have an account ? Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
