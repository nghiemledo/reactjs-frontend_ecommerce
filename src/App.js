import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AppProvider from "./states/AppContext";
import "../src/assets/css/style.css";
import PublicLayout from "./pages/PublicLayout";
import HomePage from "./pages/HomePage";
import { BeatLoader } from "react-spinners";
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";
import CategoryPage2 from "./pages/CategoryPage2";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckOutPage from './pages/CheckOutPage'
import UserProfilePage from "./pages/UserProfilePage";
import SetPasswordPage from "./pages/SetPasswordPage";
import AboutPage from "./pages/AboutPage";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loading-container">
          <BeatLoader
            height={35}
            width={4}
            radius={2}
            margin={2}
            loading={loading}
            color="#4b9df9"
          />
        </div>
      ) : (
        <div>
          <AppProvider>
            <Routes>
              <Route path="/" element={<PublicLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/category" element={<CategoryPage2 />} />
                <Route path="/register" element={<Signup />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/checkout" element={<CheckOutPage/>} />
                <Route path="/user/profile" element={<UserProfilePage/>} />
                <Route path="/user/set_password" element={<SetPasswordPage/>} />
                <Route path="/about" element={<AboutPage/>} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AppProvider>
        </div>
      )}
    </div>
  );
}

export default App;
