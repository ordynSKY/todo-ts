import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { login } from "../../services/AuthService";
import { toast } from "react-toastify";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("Email error");
  const [passwordError, setPasswordError] = useState<string>("Password error");
  const [formValid, setFormValid] = useState<boolean>(false);

  useEffect(() => {
    if (passwordError || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [passwordError, emailError]);

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
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  //async func
  const onLogin = async (
    event: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    event.preventDefault();
    try {
      const response = await login(email, password);
      localStorage.setItem("token", response.data.token);
      window.location.replace("/dashboard");
    } catch (e: any) {
      toast.error(`${e.response?.data?.message}`, {
        position: "bottom-right",
      });
      console.log(e.response?.data?.message);
    }
  };

  return (
    <div>
      <form
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
        onSubmit={(e) => onLogin(e, email, password)}
      >
        <h1>Login</h1>
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
          style={{ marginTop: 10, marginBottom: 10, width: 400 }}
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
          Login
        </button>
      </form>
      <Grid
        container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Grid item>
          <Link to="/registration">Don't have an account? Sign Up</Link>
        </Grid>
      </Grid>
    </div>
  );
}
