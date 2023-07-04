import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { login } from "../../services/AuthService";
import { handleErrorUtil } from "../../utils/handleErrorUtil/handleErrorUtil";
import validationHandler from "../../utils/authValidationUtils/validationHandlers";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const formValid = !!emailError || !!passwordError || !email || !password;

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
      handleErrorUtil(e);
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
          style={{ marginTop: 10, marginBottom: 10, width: 400 }}
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
          disabled={formValid}
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
