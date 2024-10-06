import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const user = useSelector((state) => state.user);

  return user ? <Navigate to="/" replace /> : <Outlet />;
};
export default AuthLayout;
