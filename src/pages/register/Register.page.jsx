import { useState } from "react";
import axios from "axios";
import Joi from "joi-browser";
import registerSchema from "../../validation/register.validation";

const RegisterPage = () => {
  const [name, setName] = useState("");
  // const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isBiz, setIsBiz] = useState(false);
  const [showPasswordErrorMsg, setShowPasswordErrorMsg] = useState(false);

  const handleNameChange = (ev) => {
    setName(ev.target.value);
  };
  // const handleLastnameChange = (ev) => {
  //   setLastname(ev.target.value);
  // };
  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };
  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };
  const handleConfirmPassword = (ev) => {
    setConfirmPassword(ev.target.value);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    // if (password != confirmPassword) {
    //   setShowPasswordErrorMsg(true);
    // } else {
    //   setShowPasswordErrorMsg(false);
    // }
    setShowPasswordErrorMsg(password != confirmPassword);
    const validatedValue = Joi.validate(
      { email, password, confirmPassword, biz: isBiz, name },
      registerSchema,
      {
        abortEarly: false,
      }
    );
    const { error } = validatedValue;

    if (error) {
      console.log("error", error.details);
    } else {
      if (password === confirmPassword) {
        axios
          .post("/users", {
            name: name,
            email: email,
            password: password,
            biz: isBiz,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log("err from axios", err);
          });
      }
    }
  };

  const handleCBChanged = (ev) => {
    // console.log(ev.target.checked);
    setIsBiz(ev.target.checked);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputName1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName1"
          aria-describedby="emailHelp"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      {/* <div className="mb-3">
        <label htmlFor="exampleInputLastname1" className="form-label">
          Lastname
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputLastname1"
          aria-describedby="emailHelp"
          value={lastname}
          onChange={handleLastnameChange}
        />
      </div> */}
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
      </div>
      {password.length < 8 && (
        <div className="alert alert-warning" role="alert">
          A simple warning alert—check it out!
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="exampleInputConfirmPassword1" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputConfirmPassword1"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
      </div>
      {/* {password != confirmPassword && (
        <div className="alert alert-danger" role="alert">
          The password and confirm password must be the same
        </div>
      )} */}
      {showPasswordErrorMsg && (
        <div className="alert alert-danger" role="alert">
          The password and confirm password must be the same
        </div>
      )}
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onChange={handleCBChanged}
          checked={isBiz}
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

export default RegisterPage;
