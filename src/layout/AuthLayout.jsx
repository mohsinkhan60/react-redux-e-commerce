import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const AuthLayout = () => {
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("/auth");
      }
    });
  }, [navigate]);
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default AuthLayout;
