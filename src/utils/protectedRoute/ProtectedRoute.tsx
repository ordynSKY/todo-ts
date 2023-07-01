import { Outlet, Navigate } from "react-router-dom";
import { getItem } from "../localStorageUtils/localStorageService";

const ProtectedRoute = () => {
  const auth = getItem("token");
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
