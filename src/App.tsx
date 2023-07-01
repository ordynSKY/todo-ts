import "./style.css";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignIn from "./components/Login/SignIn";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import SignUp from "./components/Login/SignUp";
import { ToastContainer } from "react-toastify";
import Details from "./pages/DetailsPage/Details";

const App = () => {
  const defaultTheme = createTheme();

  const isLoggedIn = localStorage.getItem("token");
  return (
    <div className="App" key={isLoggedIn}>
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/registration" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={isLoggedIn ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/details"
              element={isLoggedIn ? <Details /> : <Navigate to="/" />}
            />
          </Routes>
        </Router>
      </ThemeProvider>
      <ToastContainer />
    </div>
  );
};

export default App;
