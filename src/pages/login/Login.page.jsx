import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import { useHistory, useLocation } from "react-router-dom";

import loginSchema from "../../validation/login.validation";
import { authActions } from "../../store/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    console.log("location", location);
    if (location.state && location.state.email && location.state.password) {
      setEmail(location.state.email);
      setPassword(location.state.password);
    }
  }, []);

  useEffect(() => {
    console.log(email);
  }, [email]);

  useEffect(() => {
    if (
      email != "" &&
      password != "" &&
      location.state &&
      location.state.email &&
      location.state.password
    ) {
      handleSubmit();
    }
  }, [email, password]);

  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };
  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };
  const handleSubmit = (ev) => {
    if (ev) ev.preventDefault();
    const validatedValue = Joi.validate({ email, password }, loginSchema, {
      abortEarly: false,
    });
    const { error } = validatedValue;
    if (error) {
      //invalid email
      //invalid password
      toast.error(`"invalid email and/or password"`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      axios
        .post("/auth", {
          email,
          password,
        })
        .then(({ data }) => {
          console.log("data", data);
          localStorage.setItem("token", data.token);
          dispatch(authActions.login()); //update redux state
          console.log("token decoded", jwt_decode(data.token));
          dispatch(authActions.updateUserData(jwt_decode(data.token))); //update user info in redux store
          history.push("/dashboard"); //navigate to another page
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={handleEmailChange}
        />
        <div id="emailHelp" className="form-text">
          {email}
        </div>
        {!email && (
          <div id="emailHelp" className="form-text">
            please provied your email
          </div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="position-relative">
          {password.length < 6 && (
            <div id="emailHelp" className="form-text">
              Please provide password with at least 6 characters
            </div>
          )}
        </div>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default LoginPage;
