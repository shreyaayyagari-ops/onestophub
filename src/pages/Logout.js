import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear(); // or sessionStorage.clear();
    navigate("/login"); // redirect to login page after clearing
  }, [navigate]);

  return null; // or a spinner/loading indicator if desired
};

export default Logout;
