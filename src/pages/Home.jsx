import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Home Component - Redirect to Menu
 *
 * This component acts as a redirect to the main menu page.
 * The actual homepage content is now in Menu.jsx
 */

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to menu (main homepage)
    navigate("/");
  }, [navigate]);

  return null;
};

export default Home;
