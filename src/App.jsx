/**
 * App Component - Main Application Root
 *
 * This component sets up the routing structure for the entire application using React Router.
 * It defines the main routes and their corresponding page components.
 *
 * Routing Structure:
 * - / : Home page (landing page)
 * - /auth : Authentication page (login/signup)
 *
 * Router Setup:
 * - BrowserRouter: Enables client-side routing
 * - Routes: Container for all route definitions
 * - Route: Individual route definitions with path and element
 *
 * Layout Notes:
 * - Each page component (Home, Auth) includes its own Navbar and Footer
 * - This allows flexibility for future pages with different layouts
 * - No global layout wrapper to maintain component independence
 *
 * Future Scalability:
 * - Add more routes as the application grows
 * - Consider refactoring to a Layout component if all pages share Navbar/Footer
 * - Could add ProtectedRoute component for authentication later
 */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import Menu from "./pages/Menu.jsx";
import Explore from "./pages/Explore.jsx";
import FoodDetails from "./pages/FoodDetails.jsx";
import Orders from "./pages/Orders.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<Home />} />

          {/* Authentication Page Route */}
          <Route path="/auth" element={<Auth />} />

          {/* Menu Page Route */}
          <Route path="/menu" element={<Menu />} />

          {/* Explore Page Route */}
          <Route path="/explore" element={<Explore />} />
          {/* Food Details Route */}
          <Route path="/food/:id" element={<FoodDetails />} />
          {/* Orders Page (My Orders) */}
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
