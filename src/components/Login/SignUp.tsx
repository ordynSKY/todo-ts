import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registration } from "../../services/AuthService";
import { handleErrorUtil } from "../../utils/handleErrorUtil/handleErrorUtil";
import validationHandler from "../../utils/authValidationUtils/validationHandlers";

const SignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const formValid =
    !!emailError ||
    !!passwordError ||
    !!usernameError ||
    !email ||
    !password ||
    !username;

  const navigate = useNavigate();

  const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    setUsername(val);

    validationHandler("username", val, setUsernameError);
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    setEmail(val);

    validationHandler("email", val, setEmailError);
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    setPassword(val);

    validationHandler("password", val, setPasswordError);
  };

  const onRegister = async (
    event: React.FormEvent<HTMLFormElement>,
    email: string,
    username: string,
    password: string
  ) => {
    event.preventDefault();

    try {
      const response = await registration(email, username, password);

      localStorage.setItem("token", response.data.token);

      navigate("/");
    } catch (e: any) {
      handleErrorUtil(e);
    }
  };

  return (
    <>
      <form
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
        onSubmit={(e) => onRegister(e, email, username, password)}
      >
        <h1>Register</h1>
        {usernameError && (
          <div style={{ color: "red", marginTop: 10, marginBottom: 10 }}>
            {usernameError}
          </div>
        )}
        <input
          onBlur={(e) => usernameHandler(e)}
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => usernameHandler(e)}
          style={{ marginTop: 10, marginBottom: 10, width: 400 }}
        />
        {emailError && (
          <div style={{ color: "red", marginTop: 10, marginBottom: 10 }}>
            {emailError}
          </div>
        )}
        <input
          onBlur={(e) => emailHandler(e)}
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => emailHandler(e)}
          style={{ marginTop: 10, marginBottom: 10 }}
        />
        {passwordError && (
          <div style={{ color: "red", marginTop: 10, marginBottom: 10 }}>
            {passwordError}
          </div>
        )}
        <input
          onBlur={(e) => passwordHandler(e)}
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => passwordHandler(e)}
          style={{ marginTop: 10, marginBottom: 10 }}
        />
        <button
          disabled={!!formValid}
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          Register
        </button>
      </form>
      <Grid
        container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Grid item>
          <Link to="/">Have an account? Sign In</Link>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
