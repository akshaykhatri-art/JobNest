import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form action="" className="form">
        <Logo />
        <h4>Register</h4>

        <FormRow type="text" name="name" defaultValue="Akshay" />
        <FormRow
          type="text"
          name="lastname"
          labelText="Last Name"
          defaultValue="Khatri"
        />
        <FormRow type="text" name="location" defaultValue="India" />
        <FormRow
          type="email"
          name="email"
          defaultValue="akshaykhatri22@gmail.com"
        />
        <FormRow type="password" name="password" defaultValue="secret123" />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
