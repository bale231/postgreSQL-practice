import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { StickyNavbar } from "./StickyNavbar";
import axios from "axios";
import useProfile from "../customHooks/useProfile";
import { useEffect } from "react";

function App() {
  const { profile, userLocal, userSession } = useProfile();
  const navigate = useNavigate();

  async function handleUser() {
    try {
      await axios.get(`http://localhost:3000/users/${userLocal.username}`);
    } catch (error) {
      if (error.response.status === 404) {
        localStorage.clear();
        navigate("/register");
        window.location.reload();
      }
      console.error(error.response);
    }
  }

  useEffect(() => {
    handleUser();
  }, []);

  return (
    <>
      <StickyNavbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
