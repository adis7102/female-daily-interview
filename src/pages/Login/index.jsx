import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { loginAPI } from "../../store/actions";
import { URL } from "../../constants";

import Input from "../../components/Input";
import Button from "../../components/Button";

import "./styles.scss";

const Login = (props) => {
  const dispatch = useDispatch();

  const { loading, isLogin } = useSelector((state) => state);

  const [email, setEmail] = useState("");

  const handleLogin = () => {
    dispatch(
      loginAPI(
        `${URL}/users?email=${email}`
      )
    );
  };

  return (
    <div className="login">
      {(localStorage.token || isLogin) && <Navigate to="/" replace />}
      <div className="login-wrap">
        <h1 className="title">LOGIN</h1>
        <div className="input-email">
          <Input
            name="email"
            title="Input Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <Button
            variant="primary"
            onClick={handleLogin}
            width="80"
            height="40"
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Login;
