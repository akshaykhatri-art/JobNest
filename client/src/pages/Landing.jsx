import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
import jobnestlogo from "../assets/images/jobnest-logo.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        {/* <img src={logo} alt="jobNest" className="logo" /> */}
        <img src={jobnestlogo} alt="jobNest" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Welcome to JobNest, the ultimate solution for streamlined job
            tracking and career management. Say goodbye to the chaos of job
            applications, interviews, and follow-ups. Our powerful MERN stack
            platform is designed to simplify your job search, enhance your
            productivity, and propel your career forward.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
