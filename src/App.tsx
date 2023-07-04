import "./style.css";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/Login/SignIn";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import SignUp from "./components/Login/SignUp";
import { ToastContainer } from "react-toastify";
import Details from "./pages/DetailsPage/Details";
import ProtectedRoute from "./utils/protectedRoute/ProtectedRoute";
import { getItem } from "./utils/localStorageUtils/localStorageService";

const App = () => {
  const defaultTheme = createTheme();

  const isLoggedIn = getItem("token");

  return (
    <div className="App" key={isLoggedIn}>
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/registration" element={<SignUp />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<HomePage />} path="/dashboard" />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route element={<Details />} path="/details/:id" />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
      <ToastContainer />
    </div>
  );
};

export default App;
