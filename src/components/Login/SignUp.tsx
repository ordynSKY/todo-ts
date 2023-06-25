import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { registration } from "../../services/AuthService";
import { toast } from "react-toastify";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameDirty, setUsernameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [usernameError, setUsernameError] = useState("Username error");
  const [emailError, setEmailError] = useState("Email error");
  const [passwordError, setPasswordError] = useState("Password error");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (usernameError || emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [usernameError, emailError, passwordError]);

  const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    const res = /^[a-zA-Z\-]+$/.exec(e.target.value);
    const valid = !!res;
    if (!valid) {
      setUsernameError("Type Username");
    } else {
      setUsernameError("");
    }
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const res =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!res.test(String(e.target.value).toLowerCase())) {
      setEmailError("Type Email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError("more whan 3 and less whan 8 ");
      if (!e.target.value) {
        setPasswordError("Empty password");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "username":
        setUsernameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
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
      window.location.replace("/");
    } catch (e: any) {
      toast.error(`${e.response?.data?.message}`, {
        position: "bottom-right",
      });
      console.log(e.response?.data?.message);
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
        {usernameDirty && usernameError && (
          <div style={{ color: "red", marginTop: 10, marginBottom: 10 }}>
            {usernameError}
          </div>
        )}
        <input
          onBlur={(e) => blurHandler(e)}
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => usernameHandler(e)}
          style={{ marginTop: 10, marginBottom: 10, width: 400 }}
        />
        {emailDirty && emailError && (
          <div style={{ color: "red", marginTop: 10, marginBottom: 10 }}>
            {emailError}
          </div>
        )}
        <input
          onBlur={(e) => blurHandler(e)}
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => emailHandler(e)}
          style={{ marginTop: 10, marginBottom: 10 }}
        />
        {passwordDirty && passwordError && (
          <div style={{ color: "red", marginTop: 10, marginBottom: 10 }}>
            {passwordError}
          </div>
        )}
        <input
          onBlur={(e) => blurHandler(e)}
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => passwordHandler(e)}
          style={{ marginTop: 10, marginBottom: 10 }}
        />
        <button
          disabled={!formValid}
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
