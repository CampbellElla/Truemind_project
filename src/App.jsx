/**
 * App Component - Main Application Root
 *
 * This component sets up the routing structure for the entire application using React Router.
 * It defines the main routes and their corresponding page components.
 *
 * Routing Structure:
 * - / : Menu page (food items - main homepage content)
 * - /auth : Authentication page (login/signup)
 * - All other routes redirect to / (Menu)
 *
 * Router Setup:
 * - BrowserRouter: Enables client-side routing
 * - Routes: Container for all route definitions
 * - Route: Individual route definitions with path and element
 */

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
          {/* Menu Page (Food items - main homepage content) */}
          <Route path="/" element={<Menu />} />

          {/* Authentication Page Route */}
          <Route path="/auth" element={<Auth />} />

          {/* Explore Page Route */}
          <Route path="/explore" element={<Explore />} />

          {/* Food Details Route */}
          <Route path="/food/:id" element={<FoodDetails />} />

          {/* Orders Page (My Orders/Cart) */}
          <Route path="/orders" element={<Orders />} />

          {/* Redirect all other routes to home (Menu) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
