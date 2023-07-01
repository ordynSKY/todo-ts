import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { login } from "../../services/AuthService";
import { toast } from "react-toastify";
import { regex } from "../../utils/authValidationUtils/regexConfig";

/*
 1) сделай адекватные ошибки, валидации. ЧТобы было понятно что не так.
    типа "This field is required" и "Not valid email".
    Убери переменные emailDirty, passwordDirty, formValid
    Если хочешь валидировать когда юзер пишет - валидируй на onChange
    Если хочешь валидировать когда юзер убрал фокус из инпута - валидируй на onBlur
    Если хочешь при сабмите - валидируй на onSubmit.
    Для этого не нужны emailDirty, passwordDirty
    formValid стейт не нужен, потому что у тебя formValid === false, когда в каком-то из полей есть ошибка.
    Пусть ошибки сначала будут пустыми строками, если emailError === пустая строка, то ошибки нет, если там есть текст, то ошибка есть.
    formValid = emailError || passwordError получится.
    Ты избавишься от переменных, от ненужных условий и получишь гибкую простую систему валидации и отображения ошибок.
    В SignUp те же советы

  2) Валидация одинаковая на регистрации и логине. Вынеси валидацию в util какую-то в src, и просто используй фкнцию
*/
export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("Email error");
  const [passwordError, setPasswordError] = useState<string>("Password error");
  const [formValid, setFormValid] = useState<boolean>(false);

  useEffect(() => {
    // ! setFormValid(!(passwordError || emailError));
    if (passwordError || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [passwordError, emailError]);

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // ВЫПОЛНЕНО - ! вот этот regex одинаковый на логине и регистрации. Вынеси его в какую-то папку конфигураций в src и польуйся.
    const res = regex;

    if (!res.test(String(e.target.value).toLowerCase())) {
      setEmailError("Type Email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    // ! то о чём я писал в HomePage, я сейчас тебе накину ещё 5 условий по валидации пароля и ты тут сделаешь супервложенность if {} else {}
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
    // ! не делай setEmailDirty, а валидируй имейл. Зачем этот промежуточный шаг? Сделай функцию, которая примет имейл, отвалидирует и вернёт или текст ошибки, или null, например.
    // ! или вообще одну функцию, которая будет валидировать всё, просо закинул в неё значение и что валидируем
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
    // ! ставь переносы строк логические, чтобы не было сплошняка. Сложно читать будет большие функции.

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
