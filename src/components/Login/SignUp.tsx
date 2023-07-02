import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registration } from "../../services/AuthService";
import { toast } from "react-toastify";
import { regex } from "../../utils/authValidationUtils/regexConfig";
import { handleErrorUtil } from "../../utils/handleErrorUtil/handleErrorUtil";

const SignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [usernameDirty, setUsernameDirty] = useState<boolean>(false);
  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
  const [usernameError, setUsernameError] = useState<string>(
    "Username is required"
  );
  const [emailError, setEmailError] = useState<string>("Email is required");
  const [passwordError, setPasswordError] = useState<string>(
    "Password is required"
  );

  const formValid = emailError || passwordError || usernameError;

  const navigate = useNavigate();

  const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    const res = /^[a-zA-Z\-]+$/.exec(e.target.value);
    const valid = !!res;
    if (!valid) {
      setUsernameError("Please enter a valid Username");
    } else {
      setUsernameError("");
    }
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // ВЫПОЛНЕНО - ! вот этот regex одинаковый на логине и регистрации. Вынеси его в какую-то папку конфигураций в src и польуйся.
    const res = regex;

    if (!res.test(String(e.target.value).toLowerCase())) {
      setEmailError("Please enter a valid Email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError("Please type more whan 3 and less whan 8 symbols");
      if (!e.target.value) {
        setPasswordError("Password is required");
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
